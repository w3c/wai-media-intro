---
title: Playing Accessible Media
nav_title: Playing Media
order: 8
status: editors-draft
wcag_success_criteria:
  - 1.2.2
  - 1.2.5
editors:
  - Geoff Freed
  - Judy Brewer
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/WCAGTA/">U.S. Access Board, WCAG TA Project</a>
---

## Captions

### Desktop-browser media players

All modern web browsers will provide default media players for embedded
media when the `<video>` or `<audio>` elements are used, and all will
render timed text delivered via the `<track>` element.

All browsers will
automatically surface a caption toggle in the player control bar if a
caption track is detected. Note that each browser will present
not only a different UI, but also a different default style for
captions. Users will customize captions in their browsers or operating systems to their needs. Below is an image of default caption display in Chrome.
Captions can be toggled on and off by using the CC (Closed Captions) button.

![Captions playing in the embedded Chrome video
player.](am-chrome-captions.png)

While browser-native players do not provide support for integrated transcriptions, some third-party embedded players (for example, YouTube and Able Player) will surface a button which, when selected, reveals a transcript if one is available.

### Mobile-browser video players

Mobile browsers support captions via the `<track>` element, just like
their desktop counterparts, but the presentation mode will vary:

-   **Android**<br>
    Embedded video and audio clips will play within Web pages in both
    Chrome and Firefox, on tablets and smartphones.
-   **iOS**<br>
    Embedded video and audio clips will play within Web pages on the
    iPad. iPhones will play all media clips in full screen.

## Audio descriptions in native desktop- and mobile-browser media players

Most audio-described videos are delivered to viewers using one of the
following methods:

-   Two separate videos, one with open descriptions, and the other with
    no descriptions. Authors give users a link or some other method to
    choose one or the other.
-   A single video that contains two audio tracks, one with descriptions
    and one without. Authors give users a button or menu to toggle from
    one track to the other.

## User customization of captions

Many online media players, on both desktop and mobile platforms, give
users a wide variety of caption-customization options. For example,
users can specify caption-font colors, font types and sizes, and
background colors or transparency levels.
The settings chosen by the user will override any
author-specified styling (see further [comments about
author styling of captions](production-captions.html#a-word-about-styling-captions)).

Below is an image showing caption-styling options in such a
player.

![YouTube's caption-styling options: font family, font color, font size,
and others.](yt_cc_options.png)

Some custom mobile players – those embedded in Web pages as well as
stand-alone media players – also provide styling options from within the
applications themselves. See the [mobile player used on the CNN Web
site](http://www.cnn.com/) for one such example.

Mobile devices also provide caption-styling options at the OS level.
Here is an image showing caption styling options on an Android device.

![Android's caption-styling options: language, text size, caption style,
etc.](android_cc_options.png)
