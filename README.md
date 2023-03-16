# Fake OS - Windows 11

## Demo & Snippets

<img width="427" alt="Windows-Menu" src="https://user-images.githubusercontent.com/78459081/225546258-6784c384-2f05-4ad3-bf81-adfed78aa93e.png">
<img width="1229" alt="Modal" src="https://user-images.githubusercontent.com/78459081/225546275-23f97268-8b4a-42f7-892e-52c72cf1014c.png">
<img width="1268" alt="Desktop-Icons" src="https://user-images.githubusercontent.com/78459081/225546280-471454ef-d250-4525-a0e2-bafac5a88987.png">

---

## Requirements

- Wallpaper scales to fit the viewport
- Minimum 3 icons on desktop
- The menu is positioned in the appropriate place (bottom left on windows, top of the screen on android)
- Apps look consistent
- Menu contains a flex with content inside it
- Apps should be able to contain text, an image or a form
- Your icons and menu should add event listener for the click event, don't use the html onclick attribute
- Give your functions and variables good names
- Use the arrow syntax to declare functions

## Links

Check it out here:
https://mitchanderson202.github.io/fakeOS/

Repository:
https://github.com/mitchanderson202/fakeOS

## Stack

- HTML
- SCSS
- JavaScript

---

## Build Steps

- git clone https://github.com/mitchanderson202/fakeOS
- use live server to open in browser

---

## Design Goals

- Re-create Windows 11(Current operating system at the time).
- I've always had that fluorescent mushroom backround, had to find a way to get a windows bar with live date & time.
- The windows button needs to open a menu showing profile and more icons.
- Click on an icon to open a "modal".

---

## Known issues

- The modals open as a set position, height and index.
- Clicking away from the windows menu doesn't shut it down.

---

## Future Goals

- I would love to make all the modals moveable, sizeable and open on top if they're the most recent clicked. Just like the real Windows OS.
- Click anywhere to drop the Windows Menu.
- Add new windows icons with better information.
- Re-build the whole project in a framework. This was built prior to learning React.

---

## Change logs

- 16/03/23. Updated Readme.
