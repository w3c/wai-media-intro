---
title: Subtitles
order: 5
status: editors-draft
wcag_success_criteria:
  - 1.2.2
wcag_techniques:
  - G87
editors:
  - Geoff Freed
  - Judy Brewer
contributors:
  - The Education and Outreach Working Group (<a href="https://www.w3.org/WAI/EO/">EOWG</a>)
support: Developed with support from the <a href="https://www.w3.org/WAI/WCAGTA/">U.S. Access Board, WCAG TA Project</a>
---

Subtitles (also known as foreign-language subtitles) are, from a
technical perspective, similar to captions: they are text (or sometimes
images of text) presented through markup that contains timing
information and positioning codes. They can be created using the same
authoring tools and [formats as captions](formats.html). They can be provided in an [open or closed](index.html#open-closed) way.

In instances where subtitles cannot be presented using true text, they
can instead be presented as bitmaps: in other words, pictures of text or
other symbols. The bitmaps themselves can still be transmitted using
markup, though, by using [TTML Profiles for Internet Media Subtitles and
Captions 1.0 (IMSC1)](https://www.w3.org/TR/ttml-imsc1/). Keep in mind that bitmap captions cannot be customized, which may diminish their usefulness to viewers with certain types of visual impairments.  Learn more about [why caption customization is important](production-captions.html#custom_cc).

## Differences between subtitles and captions

Subtitles are not the same as captions, nor are they aimed at the same
audiences. In contrast to captions, subtitles are…

* … intended for people who can hear;
* … translations of the audio;
* … not containing non-speech information (indications of music, sound effects, etc.);
* … not positioned to convey who is speaking.

## Displaying Subtitles

Like captions, subtitles are delivered to viewers using HTML5's `<track>` element.
Be sure
to set the value of the `kind` attribute to `"subtitles"` and to specify
the language in the `label` attribute:

{::nomarkdown}
<%= code_start %>
{:/nomarkdown}

~~~html
<video controls>
    <source src="myvideo.mp4" type="video/mp4">
    <track kind="subtitles" src="my_italian_subtitles.vtt" srclang="en" label="Italian" default>
</video>
~~~

{::nomarkdown}
<%= code_end %>
{:/nomarkdown}

In some cases, it may be necessary to use captions and subtitles
together: for example, if an important sound effect is used in the audio
track, that sound can be conveyed through a single sound-effect caption
placed near the a subtitle, as shown in the image below.

![A frame of video showing a sound-effect caption positioned above a
subtitle.](cc_sub_together.png)
