# CHANGELOG  

## [ 1.14.3 ]
### Updates
- move constants to own file
- Updates to readme
  - Added images for new d20 rolls display
  - Added images for comparison screen
  - Remove old versions
  - Updated DB call so now only player rolling should update DB values rather than everyone on every roll
  - Put comment in on where to fix DB error but dont feel fix is needed. Issue is with setFlag->Update call

## [ 1.14.2 ]
### Fixed
- Reformat of globals 

## [ 1.14.1 ]
### Added
- Fixed bug where blind roll setting didn't work correctly
- Fixed bug where mod was trying to load a form that was only used for testing so didn't exist
- Updated a few comments
- Fixed bug when trying to load DB values for different roll types on dice that didnt have different rolls

## [ 1.14.0 ]
### Added
- PF2E added ability to view different roll types! 

## [ 1.13.1 ]
### Fixed
- Added button to its own layer to avoid collision with other mods.

## [ 1.13.0 ]
### Added
- Comparison Screen Added! Now you can see your rolls next to your friends! 

## [ 1.12.0 ]
### Fixed
- Works with Foundry V11 and V10

## [ 1.11.1 ]
### Fixed
- Fixed Collision with global module id value & Token Mirror

## [ 1.11.0 ] 
### Updated
- Added better funtion comments to explain what every fn does and their inputs and outputs
- Updated format of scripts to better organize classes into seperate files

## [ 1.10.0 ] 5/8/2023
### Added
- Updated the stats to display the decimal value of the average rather then the integer value
- Fix clear All Data from DB buttons not working correctly
### Updated
- Changed Default of Auto DB to be **ON**
- Changed new Buttons to be **ON** by default

## [ 1.9.1 ]  4/28/2023
### Fixed
- Bugfix for gm visibility setting

## [ 1.9.0 ]  5/2/2023
### Added
- Added optional setting to change where to access player roll data

## [ 1.8.0 ]  4/28/2023
### Added
- Added auto db feature
- Added clear call button to clear local and bd at once
- Change Buttons on player Page when Auto DB is enabled
- Added auto db feature. (Disabled by default)

## [ 1.7.0 ]  3/24/2023
### Added
- Added DB interaction to allow user to
  - Save Players Data
  - Load Players Data
  - Load All Data
  - Load Other Players Data
  - Clear Players Data
  - Clear Other Players Data

## [ 1.6.0 ]  3/18/2023
### Added
- Button to allow clearing of all roll data

## [ 1.5.4 ]  3/15/2023
### Fixed
- Fix Download link for Dependency
- Fix Download link for My module

## [ 1.5.3 ]  3/13/2023
### Fixed
- Same As below but for real this time

## [ 1.5.2 ]  3/13/2023
### Fixed
- Update to allow dependency install if user doesnt have it

## [ 1.5.1 ]  2/28/2023
### Fixed
- Updates Templates to use en.json page rather then hard coded values
- Fixed issue with incompatability with token health
- SWADE Compatability confirmed

## [ 1.5.0 ]  2/26/2023
### Added
- Added feature to record if multiple dice types are rolled at once (1d10+1d20)

## [ 1.4.1 ]  2/26/2023
### Fixed
- Fixed spelling of Median (Spelt it wrong on the table but variables in code were spelt corrently... Classic)
- Fixed Median not always displaying correctly Will always display middle of odd number of rolls or left-middle for even
- Updated README to explain median
- Updated streak table to better explain what streaks are
- Added : to some table enteries that were missing it
- Fixed changelog values being wrong

## [ 1.4.0 ]  2/25/2023
### Fixed
- Fixed D100 Charts not displaying properly
- Updated Readme with more up to date images
- Re organized and added new sections to Readme

## [ 1.3.0 ]  2/20/2023
### Added
- Added feature where blind rolls do not get displayed. Instead string of test appears on top of player stats indicating that they have X Number of blind rolls and should ask the GM to push the data.
- GM has a **Push Blind Rolls** button on the global stats
- Pushing blind rolls makes all players have those rolls visible to the global and player data 

## [ 1.2.0 ]  2/20/2023
### Added
- Added Checkboxes on forms page to allow users to disable displaying of certain stats if desired.
- Checkboxes are client side

## [ 1.1.5 ]  2/19/2023  
### Fixed 
- Fix multiple dice in midi-qol

## [ 1.1.4 ]  2/19/2023  
### Fixed 
- Fix Copy Paste error in MidiQol Fix

## [ 1.1.3 ]  2/19/2023  
### Fixed 
- Partial fix for midi-qol, merge to 1 card. look at readme incompatabilities section

## [ 1.1.2 ]  2/17/2023  
### Fixed 
- Fix version number not working

## [ 1.1.1 ]  2/17/2023  
### Fixed 
- Removed only allowing for pf2e. Should work for All msystems that post rolls to chat

## [ 1.1.0 ]  2/16/2023
### Added  
- Refresh Button added to forms

### Changed  

### Fixed  
- Fixed Global Max and Min Values not displaying when they should
- Having both player stats and global stats up at the same time makes chart not visible on one of the screens


## [ 1.0 ] 2/15/2023  
### Added  
- Player Dice Stats Stats 
- Global Dice Stats Stats 
- Stats for D2, D3, D4, D6, D8, D10, D12, D20, D100
- Hide GM Rolls from global setting
- Hide GM Rolls From Player setting

### Changed  

### Fixed
