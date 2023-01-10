# Project: FakeOS - Windows 11

## Overview

For Nology, we we're taksed an assignemnt for a FakeOS. This is a replica of my own desktop. The project required 3 desktop items which open up a modal containing something. Currently I have a text box, an image and some links to my Github and LinkedIn. The project only works in a desktop style format, (will not scale down to Tablet or Mobile). The goal was to create a SPA(Single Page Application), that fits a viewport, selectable icons that open up a modal, modals close, a selectable menu that opens to show icons and the time/date available on the screen.
Overall this was a fun and challenging project, I look forward to building upon the features.

## Links

Check it out here:
https://mitchanderson202.github.io/fakeOS/

Repository:
https://github.com/mitchanderson202/fakeOS

## Tech Stack

- HTML
- SCSS
- JavaScript

## MVP:

- Wallpaper scales to fit the viewport
- Minimum 3 icons on desktop
- The menu is positioned in the appropriate place (bottom left on windows, top of the screen on android)
- Apps look consistent
- Menu contains a flex with content inside it
- Apps should be able to contain text, an image or a form
- Your icons and menu should add event listener for the click event, don't use the html onclick attribute
- Give your functions and variables good names
- Use the arrow syntax to declare functions

## Updates required:

- The Modals don't currently replicate a Windows file.
- There's a set order in how the modals open.
- Click anywhere to exit the Windows menu.
- Icons showing on Windows bar next to Windows menu button when open.
- Changing all dummy text, mainlt the Lorem inside the Text-Box.
- Refactor JS code to better functions. Currently I have hard-coded things like removing borders and backgrounds.

## Longer Goals:

- Remove all Spotify dummy text and replace with different icons that open up.
- Scale into a mobile view.
- Drag and Drop all desktop items.
