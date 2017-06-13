---
title: Caption formats
order: 3
status: editors-draft
wcag_success_criteria:
  - 1.2.2
wcag_techniques:
  - G87
  - H95
editors:
  - Geoff Freed
  - Judy Brewer
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/WCAGTA/">U.S. Access Board, WCAG TA Project</a>
---
Nearly all modern browsers and media players support displaying closed captions. However,
they do not all support the same caption file formats. The most commonly used formats for online media are:

-   [Web Video Text Tracks (WebVTT)](https://www.w3.org/TR/webvtt1/) <br>
    Support in all modern browsers (Firefox, Internet Explorer 10+, Edge, Chrome, Safari, …), as well as many stand-alone players.

-   [Timed Text Markup Language (TTML)](https://www.w3.org/TR/ttaf1-dfxp/) <br>
    Support only in Internet Explorer 10+ and Edge, as well as many stand-alone players. Streaming media services typically use TTML to convey captions to users.

-   [SRT](https://matroska.org/technical/specs/subtitles/srt.html) <br>
    SRT is not supported natively by any browser, but is supported by most
    other types of media players including those provided by popular
    video-hosting services, some social-media platforms and by custom
    players.

WebVTT, TTML and SRT captions are files that are stored and loaded
separately from their corresponding video files. They are synchronized and
displayed by the user agent at the time of playback.

## Using Captions

Captions are associated with videos using HTML5’s `<track>` element. It is used as a
child of the `<video>` element:

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<video controls>
    <source src="myvideo.mp4" type="video/mp4">
        <track kind="captions" src="myvideo_captions.vtt" srclang="en" label="Captions" default>
</video>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}
