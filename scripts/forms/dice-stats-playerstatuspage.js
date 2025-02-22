
//==========================================================
//===================== FORMS SHIT =========================
//==========================================================


class PlayerStatusPage extends FormApplication {
    // static TESTSTATS;
    // static TESTROLLS;
    SEL_PLAYER = 0;

    static get defaultOptions() {
        const defaults = super.defaultOptions;
      
        const overrides = {
          height: 'auto',
          popOut: true,
          resizable: true,
          id: 'player-data',
          template: DS_GLOBALS.MODULE_TEMPLATES.PLAYERDATAFORM,
          userId: game.userId,
          title: game.i18n.localize('DICE_STATS_TEXT.player_data_form.title'),
        };
      
        const mergedOptions = foundry.utils.mergeObject(defaults, overrides);
        
        return mergedOptions;
    }

    //dataObject<PLAYER> = pointerToPlayerData type class PLAYER
    constructor(userId, options={}, dataObject = null) {  
        // the first argument is the object, the second are the options
        super(userId, options)
        this.SEL_PLAYER = userId;
        //this.PLAYERDATA = dataObject;
    }

    getData(){
        if(DS_GLOBALS.DS_OBJ_GLOBAL.PLAYER_DATA_MAP.has(this.SEL_PLAYER)){
            let playerObj = DS_GLOBALS.DS_OBJ_GLOBAL.PLAYER_DATA_MAP.get(this.SEL_PLAYER);
            var dataObject = DATA_PACKAGER.packagePlayerData(playerObj);
            dataObject.IS_DIE_DISPLAYED = [...DS_GLOBALS.DS_OBJ_GLOBAL.PLAYER_STATS_FORM_DIE_CHECKBOXES];
            return dataObject;
        }
        return DATA_PACKAGER.PLAYER_HNDL_INFO;
    }


    async _handleButtonClick(event){
        const clickedElement = $(event.currentTarget);
        const action = clickedElement.data().action;

        let title_txt;
        let context_txt;

        //Handle button events made on the form
        switch(action){
            case 'refresh':
                DS_GLOBALS.FORM_PLAYER_STATS.render();
                break;
            case 'save':
                title_txt = game.i18n.localize('DICE_STATS_TEXT.player_dialogs.save_to_db.title');
                context_txt = game.i18n.localize('DICE_STATS_TEXT.player_dialogs.save_to_db.context');
                const saveConfirmation = await Dialog.confirm({
                    title: title_txt,
                    content: context_txt,
                    yes: () => {return true},
                    no: () => {return false},
                    defaultYes: false
                    });

                if (saveConfirmation) {
                    ui.notifications.warn("Your Data Saved");
                    DS_GLOBALS.DS_OBJ_GLOBAL.saveMyPlayerData();
                }
                break;
            case 'loadAllFromDB':
                title_txt = game.i18n.localize('DICE_STATS_TEXT.player_dialogs.load_all_db.title');
                context_txt = game.i18n.localize('DICE_STATS_TEXT.player_dialogs.load_all_db.context');
                const loadConfirmation = await Dialog.confirm({
                    title: title_txt,
                    content: context_txt,
                    yes: () => {return true},
                    no: () => {return false},
                    defaultYes: false
                    });

                if (loadConfirmation) {
                    ui.notifications.warn("All Data Loaded");
                    DS_GLOBALS.DS_OBJ_GLOBAL.loadAllPlayerData();
                }
                break;
            case 'loadYoursFromDB':
                title_txt = game.i18n.localize('DICE_STATS_TEXT.player_dialogs.load_your_db.title');
                context_txt = game.i18n.localize('DICE_STATS_TEXT.player_dialogs.load_your_db.context');
                const loadYoursConfirmation = await Dialog.confirm({
                    title: title_txt,
                    content: context_txt,
                    yes: () => {return true},
                    no: () => {return false},
                    defaultYes: false
                    });

                if (loadYoursConfirmation) {
                    ui.notifications.warn("Your Data Loaded");
                    DS_GLOBALS.DS_OBJ_GLOBAL.loadYourPlayerData();
                }
                break;
            case 'loadOthersFromDB':
                title_txt = game.i18n.localize('DICE_STATS_TEXT.player_dialogs.load_others_db.title');
                context_txt = game.i18n.localize('DICE_STATS_TEXT.player_dialogs.load_others_db.context');
                const loadOthersConfirmation = await Dialog.confirm({
                    title: title_txt,
                    content: context_txt,
                    yes: () => {return true},
                    no: () => {return false},
                    defaultYes: false
                    });

                if (loadOthersConfirmation) {
                    DS_GLOBALS.DS_OBJ_GLOBAL.loadOthersPlayerData();
                }
                break;
            case 'clearAllLocalRollData':
                title_txt = game.i18n.localize('DICE_STATS_TEXT.player_dialogs.clear_all_local.title');
                context_txt = game.i18n.localize('DICE_STATS_TEXT.player_dialogs.clear_all_local.context');
                const clearAllLocalConfirmation = await Dialog.confirm({
                    title: title_txt,
                    content: context_txt,
                    yes: () => {return true},
                    no: () => {return false},
                    defaultYes: false
                    });

                if (clearAllLocalConfirmation) {
                    ui.notifications.warn("All Local Data Cleared");
                    DS_GLOBALS.DS_OBJ_GLOBAL.clearAllRollData();
                    if(DS_GLOBALS.FORM_PLAYER_STATS){
                        DS_GLOBALS.FORM_PLAYER_STATS.render();
                    }
                }
                break;
            case 'clearYourLocalRollData':
                title_txt = game.i18n.localize('DICE_STATS_TEXT.player_dialogs.clear_your_local.title');
                context_txt = game.i18n.localize('DICE_STATS_TEXT.player_dialogs.clear_your_local.context');
                const clearYourLocalConfirmation = await Dialog.confirm({
                    title: title_txt,
                    content: context_txt,
                    yes: () => {return true},
                    no: () => {return false},
                    defaultYes: false
                    });

                if (clearYourLocalConfirmation) {
                    ui.notifications.warn("Your Local Data Cleared");
                    DS_GLOBALS.DS_OBJ_GLOBAL.clearUsersRollData(game.user.id);
                    if(DS_GLOBALS.FORM_PLAYER_STATS){
                        DS_GLOBALS.FORM_PLAYER_STATS.render();
                    }
                }
                break;
            case 'clearYourDBrollData':
                    title_txt = game.i18n.localize('DICE_STATS_TEXT.player_dialogs.clear_your_db.title');
                    context_txt = game.i18n.localize('DICE_STATS_TEXT.player_dialogs.clear_your_db.context');
                    const dbcon = await Dialog.confirm({
                        title: title_txt,
                        content: context_txt,
                        yes: () => {return true},
                        no: () => {return false},
                        defaultYes: false
                        });
    
                    if (dbcon) {
                        ui.notifications.warn("All Your DB Data Cleared");
                        DB_INTERACTION.clearPlayer(game.user);
                        if(DS_GLOBALS.FORM_PLAYER_STATS){
                            DS_GLOBALS.FORM_PLAYER_STATS.render();
                        }
                    }
                    break;
            case 'clearAllPlayerData':
                title_txt = game.i18n.localize('DICE_STATS_TEXT.player_dialogs.clear_both.title');
                context_txt = game.i18n.localize('DICE_STATS_TEXT.player_dialogs.clear_both.context');
                const dbcon2 = await Dialog.confirm({
                    title: title_txt,
                    content: context_txt,
                    yes: () => {return true},
                    no: () => {return false},
                    defaultYes: false
                    });

                if (dbcon2) {
                    ui.notifications.warn("All Your Data Cleared");
                    DS_GLOBALS.DS_OBJ_GLOBAL.clearUsersRollData(game.user.id);
                    DB_INTERACTION.clearPlayer(game.user);
                    if(DS_GLOBALS.FORM_PLAYER_STATS){
                        DS_GLOBALS.FORM_PLAYER_STATS.render();
                    }
                }
                break;
            case 'd2checkbox':
                DS_GLOBALS.DS_OBJ_GLOBAL.PLAYER_STATS_FORM_DIE_CHECKBOXES[DS_GLOBALS.DIE_TYPE.D2] 
                    = !DS_GLOBALS.DS_OBJ_GLOBAL.PLAYER_STATS_FORM_DIE_CHECKBOXES[DS_GLOBALS.DIE_TYPE.D2];
                DS_GLOBALS.FORM_PLAYER_STATS.render();
                break;
            case 'd3checkbox':
                DS_GLOBALS.DS_OBJ_GLOBAL.PLAYER_STATS_FORM_DIE_CHECKBOXES[DS_GLOBALS.DIE_TYPE.D3] 
                    = !DS_GLOBALS.DS_OBJ_GLOBAL.PLAYER_STATS_FORM_DIE_CHECKBOXES[DS_GLOBALS.DIE_TYPE.D3];
                DS_GLOBALS.FORM_PLAYER_STATS.render();
                break;
            case 'd4checkbox':
                DS_GLOBALS.DS_OBJ_GLOBAL.PLAYER_STATS_FORM_DIE_CHECKBOXES[DS_GLOBALS.DIE_TYPE.D4] 
                    = !DS_GLOBALS.DS_OBJ_GLOBAL.PLAYER_STATS_FORM_DIE_CHECKBOXES[DS_GLOBALS.DIE_TYPE.D4];
                DS_GLOBALS.FORM_PLAYER_STATS.render();
                break;
            case 'd6checkbox':
                DS_GLOBALS.DS_OBJ_GLOBAL.PLAYER_STATS_FORM_DIE_CHECKBOXES[DS_GLOBALS.DIE_TYPE.D6] 
                    = !DS_GLOBALS.DS_OBJ_GLOBAL.PLAYER_STATS_FORM_DIE_CHECKBOXES[DS_GLOBALS.DIE_TYPE.D6];
                DS_GLOBALS.FORM_PLAYER_STATS.render();
                break;
            case 'd8checkbox':
                DS_GLOBALS.DS_OBJ_GLOBAL.PLAYER_STATS_FORM_DIE_CHECKBOXES[DS_GLOBALS.DIE_TYPE.D8] 
                    = !DS_GLOBALS.DS_OBJ_GLOBAL.PLAYER_STATS_FORM_DIE_CHECKBOXES[DS_GLOBALS.DIE_TYPE.D8];
                DS_GLOBALS.FORM_PLAYER_STATS.render();
                break;
            case 'd10checkbox':
                DS_GLOBALS.DS_OBJ_GLOBAL.PLAYER_STATS_FORM_DIE_CHECKBOXES[DS_GLOBALS.DIE_TYPE.D10] 
                    = !DS_GLOBALS.DS_OBJ_GLOBAL.PLAYER_STATS_FORM_DIE_CHECKBOXES[DS_GLOBALS.DIE_TYPE.D10];
                DS_GLOBALS.FORM_PLAYER_STATS.render();
                break;
            case 'd12checkbox':
                DS_GLOBALS.DS_OBJ_GLOBAL.PLAYER_STATS_FORM_DIE_CHECKBOXES[DS_GLOBALS.DIE_TYPE.D12] 
                    = !DS_GLOBALS.DS_OBJ_GLOBAL.PLAYER_STATS_FORM_DIE_CHECKBOXES[DS_GLOBALS.DIE_TYPE.D12];
                DS_GLOBALS.FORM_PLAYER_STATS.render();
                break;
            case 'd20checkbox':
                DS_GLOBALS.DS_OBJ_GLOBAL.PLAYER_STATS_FORM_DIE_CHECKBOXES[DS_GLOBALS.DIE_TYPE.D20] 
                    = !DS_GLOBALS.DS_OBJ_GLOBAL.PLAYER_STATS_FORM_DIE_CHECKBOXES[DS_GLOBALS.DIE_TYPE.D20];
                DS_GLOBALS.FORM_PLAYER_STATS.render();
                break;
            case 'd100checkbox':
                DS_GLOBALS.DS_OBJ_GLOBAL.PLAYER_STATS_FORM_DIE_CHECKBOXES[DS_GLOBALS.DIE_TYPE.D100] 
                    = !DS_GLOBALS.DS_OBJ_GLOBAL.PLAYER_STATS_FORM_DIE_CHECKBOXES[DS_GLOBALS.DIE_TYPE.D100];
                DS_GLOBALS.FORM_PLAYER_STATS.render();
                break;
            default:
                DS_GLOBALS.FORM_PLAYER_STATS.render();
                return;
        }
    }

    activateListeners(html) {
        super.activateListeners(html);
        html.on('click', "[data-action]", this._handleButtonClick);
    }
}