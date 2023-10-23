**CMSI 2021** Web Application Development, Fall 2023

# Assignment 1102
With this assignment, we fill out the stack, transitioning from using someone else’s web services to building your own. There are many ways to do this, and for this course, we have chosen [Firebase](https://firebase.google.com) to introduce you to these layers. As with any back-end development, with Firebase we hope you’ll demonstrate:
* The ability to set up and configure a Firebase project
* The ability to hook up a database (in this case Firestore) to a React web application
* The ability to deploy a Firebase app to Google’s cloud

## Background Reading
Prior resources relating to React and the web in general continue to apply for this assignment. Don’t be surprised if you continue to learn _even moar_ new techniques and technologies that apply to React and web apps overall (_ahem_ CSS _ahem_)

It should be no surprise that the big additions to the document pile involve Firebase:
* https://firebase.google.com/docs/web/setup: Setting up Firebase for the web
* https://firebase.google.com/docs/auth: Introduction to Firebase authentication
* https://firebase.google.com/docs/firestore: Introduction to Firestore
* https://firebase.google.com/docs/rules: Introduction to Firebase security rules
* NetNinja has [general Firebase](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb) and [Firebase Firestore](https://www.youtube.com/playlist?list=PL4cUxeGkcC9itfjle0ji1xOZ2cjRGY_WB) tutorial playlists

## For Submission
Create a blog web app using Firestore for persistence plus Firebase Auth for authentication, and host the application on Firebase. You have been given a starter/sample bare-bones blog app project but you are under no obligation to use that code as given—feel free to pick and choose from it to build a blog app your way. Make it as amazing as can be in terms of features and look-and-feel. Explore the possibilities—unleash your creativity!

Make sure that your blog app goes _well beyond_ the given bare-bones version: note that this is _not_ a suggestion; it’s a requirement 😈 Some ideas:
* Expand article data: lots of potential here, such as adding tags, categories, loglines, sectioning, etc.—all of these will require deeper knowledge of the [Firestore data model](https://firebase.google.com/docs/firestore/data-model)
* Filter/search articles: welcome to the world of [querying](https://firebase.google.com/docs/firestore/query-data/queries)
* Categorize/group articles: yes, still querying, with some [ordering and limits](https://firebase.google.com/docs/firestore/query-data/order-limit-data)
* Page through articles: [actually a necessity](https://firebase.google.com/docs/firestore/query-data/query-cursors) as your article counts grow—with some interesting user interface options though, ranging from classic previous/next buttons to [infinite scroll](https://blog.logrocket.com/3-ways-implement-infinite-scroll-react/) (skip the third-part library option—you can build it yourself!)
* Update articles: similarly, this corresponds to [updating documents](https://firebase.google.com/docs/firestore/manage-data/add-data#update-data)
* Delete articles: that’s a specific case of [deleting data](https://firebase.google.com/docs/firestore/manage-data/delete-data)
* Allow photo uploads or attachments: you will want to learn about [Firebase Storage](https://firebase.google.com/docs/storage/web/start) on the back end and [file access](https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications) on the front end
* Add user metadata (e.g., photos, profile, links, etc.): just a specific case of expanding your document structure, but this one may involve [additional collections and more documents](https://firebase.google.com/docs/firestore/data-model#collections)
* Implement rich text editing: this one may require a [third-party library](https://github.com/JefMari/awesome-wysiwyg-editors) but may be worth it
* Support additional methods, whether [via FirebaseUI](https://firebase.google.com/docs/auth/web/firebaseui#set_up_sign-in_methods) or [through direct SDK calls](https://firebase.google.com/docs/auth/web/start#next_steps)

Add _at least three (3)_ features beyond what is provided by the starter blog app. Additional features above and beyond these will earn extra credit based on the sophistication of those features.

As you can see above, starter links for these features are provided but don’t hesitate to find others. As always, if you use any content directly from a source, _make sure to credit the source_. Note also that there isn’t enough time to cover all of these in class so some self-study will be called for. This is by design because it corresponds to what one typically does in industry or research.

Notice how the Firebase SDKs abstract out the inner details of interacting with Firebase and expose Firebase functionality to your web app by way of “plain” classes, objects, methods, and functions. This can be viewed as a “professional example” of what you were asked to do with your generic API network code. Similarly, you will also be best off if you abstract the _Firebase functionality_ away from the rest of your app code. This puts you in a position to transition away more easily in case you change your back end to something other than Firebase.

As before, continue to reinforce and build upon the skills you have already learned:
* Retrieval from and interaction with the Firebase back end
* Abstraction of Firebase operations behind classes, objects, methods, and functions (async where appropriate)
* Appropriate user interface feedback for operations-in-progress
* Graceful error handling with messaging to the user when appropriate
* Responsive layout: It must look good on a narrow or wide screen
* Site balance and aesthetics: Make it a blog app that people will want to keep visiting!

We continue the theme of requiring all-or-nothing items, to capture the range of technologies and techniques that we want to practice multiple times, in different contexts:
* A background image or gradient
* A non-standard font (show that you can import a font from Google Fonts or similar)
* Grid layout for one or more components
* Flex layout for one or more components
* A nice title (perhaps an `h1` element, with matching CSS)
* A fun image or two (outside of the actual blog content)
* At least one transition (easiest done via `:hover` but there are other ways; and ideally something that is relevant to the user experience, not just ornamental)

These CSS properties are not required but keep them in your radar in case your particular app can use them:
* `animation`
* `border`
* `border-radius`
* `box-shadow`
* `display`
* `font-size`
* `font-weight`
* `font-style`
* `margin`
* `opacity`
* `padding`
* `position` (particularly `position: absolute` or `position: sticky`)
* `transform`
* `text-align`
* `text-shadow`

Note a few additions since last time. As before, we haven’t seen all of these in class—but they can be looked up!

Supply a simple _about.md_ Markdown file that describes your blog app briefly. Make sure to _state and elaborate on the three (3) or more features_ that go beyond the bare bones starter/sample code. Also include a clickable link to the running project on Google’s cloud, and credit any notable sources if applicable.

## Operational Tips/Suggestions
* Note again that the wealth of possibilities means that self-study and experimentation are built into the work involved with this assignment. Make sure to plan accordingly!
* Take advantage of the very distinct layers involved here: the back end (Firebase) and the front end (React). To keep the learning manageable, try to look at each layer in isolation—see if you can first get the Firebase side to work without any visual interface, possibly just printing things and/or inspecting the Firebase Console. _Then_ build the user interface on top of it knowing that the back end functionality already works. Or vice versa, if the user interface part looks tricker
* You may make mistakes, change your mind about features, or run into a dead end, all of which will take time—ideally, _build that time in_ when planning out how you will work on the app
* Setup of Prettier has been shown in class, so there is no reason at this point for why your code (all files) wouldn’t be flawlessly formatted, with 100% consistent indentation and spacing, and perfectly consistent blank-line spacing where necessary. Activate “format-on-save” if your editor has it, so you don’t have to ever worry about formatting while working.
* Many operational tips and suggestions from the past assignments also still apply—don’t hestitate to review them!

### Initial setup: Invoking `create-react-app` on your GitHub Classroom repository
As noted on the [course website](http://dondi.lmu.build/fall2023/cmsi2021/), to run `npx create-react-app` on your assignment repository you’ll need to temporarily move files “out of the way” so that `npx create-react-app` can do its thing. The following recaps the steps indicated on the site:

> 1. Move the following files out of the cloned repository folder to another place first: _instructions.md_, _.prettierrc_, _.github_—the latter two may be invisible in the GUI so you’ll need to use the `mv` or `move` command to relocate them
> 2. Another file can be outright deleted from your cloned repository: _README.md_ (`npx create-react-app` will create its own version of that file in its place)
> 3. Having done this, you can now execute `npx create-react-app {cloned repository folder name}`. Make sure (just like in Dr. Toal’s notes) that you are in the folder that _contains_ the cloned repository folder, not inside the repository itself
> 4. After `create-react-app` finishes, move the files back to the repository folder
> 5. From this point, the standard `git add`/`commit`/`push` sequence should work as expected

## How to Turn it In
Commit the following to your designated GitHub Classroom-supplied repository:
- Complete React project with all code and assets; the app should run directly from a `git clone` followed by `npm install` and `npm start`, with no further intervention
- Firebase configuration file _src/firebaseConfig.js_ (or else we won’t be able to run your app!)
- _about.md_ file describing your blog app and the three (3) or more features that you implemented and including a clickable link to the running project on Google’s cloud plus source credits if applicable

## Specific Point Allocations
For this particular assignment, graded categories are as follows:

| Category | Points |
| -------- | -----: |
| Baseline functionality | 12 points total |
| • Authentication | 4 points |
| • Firestore | 4 points |
| • Security | 4 points |
| Three (3) features beyond Bare Bones Blog | 12 points each, 36 points total |
| Baseline code quality | 16 points total |
| This is a composite score indicating how successfully the code has:<br/>• Fully-abstracted service modules<br/>• Warning- and error-free developer console | |
| Design & usability | 18 points total |
| This is a composite score indicating how successfully the app demonstrates:<br/>• Responsive design<br/>• Effective aesthetic choices<br/>• Helpful feedback, especially when waiting for asynchronous operations<br/>• Graceful error handling (e.g., when a network request fails) | |
| Implementation specifications | 10 points—all or nothing |
| • Background image or gradient<br/>• Non-standard font<br/>• Grid layout<br/>• Flex layout<br/>• Title<br/>• Fun image(s)<br/>• Transition | |
| Blog app description in _about.md_ | 8 points total |
| • About the three (3) added features | 6 points |
| • Clickable link to the running project on Google’s cloud | 2 points |
| • Credits where appropriate | deduction only (if not done) |
| Hard-to-maintain or error-prone code | deduction only |
| Hard-to-read code | deduction only |
| Version control | deduction only |
| Punctuality | deduction only |
| **Total** | **100** |

Note that inability to compile and run any code to begin with will negatively affect other criteria, because if we can’t run your code, we can’t evaluate related remaining items completely.
