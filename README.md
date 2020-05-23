# CeeGee - A Video Production Graphics Generator

## Purpose

A [Character Generator](https://en.wikipedia.org/wiki/Character_generator) (or "CG") is a system that does graphics overlays on live video. These devices are typically powerful and [quite expensive](https://www.bhphotovideo.com/c/buy/Titlers-Character-Generators/ci/1966/N/4028759390).  CeeGee provides a very lightweight CG system based on simple HTML templates, controlled via command line, and output over HDMI.

This is currently a **toy project** and really not designed for production video workflows, although feel free to give it a go, YMMV.

## To Use

CeeGee was built with a primary use-case in mind, although adjacent creative uses are certainly possible.

1) Run on a [Raspberry Pi](https://www.amazon.com/CanaKit-Raspberry-4GB-Starter-Kit/dp/B07V5JTMV9/?tag=clear0e4-20)
2) Output over HDMI to a video switcher, in my case the [BlackMagic ATEM Mini Switcher](https://www.amazon.com/Blackmagic-Design-ATEM-Mini-Switcher/dp/B07XZKRDLB?tag=clear0e4-20), ideally one with a chroma keyer feature.
3) SSH into the Pi, launch CeeGee, and use the interactive CLI to change templates live.

### Installing

```
Installation instructions coming soon...
```

### Templates

Templates can be any web-page content. Uses include:
* Greenscreen background with lower-third banners
* Splashpage for intro/outro
* Display a live Twitter or comments feed on top of a video stream

New templates are installed under `ceegee/templates/` directory.

## Contributing

For any feedback or contributions, please use GitHub Issues and Pull Requests.

**Please make templates** One of the best ways to contribute is to build an HTML template designed for CeeGee.  I am not a designer, so great graphical experiences are welcome additions!

Some potential directions for future development:

1) Expose a web-based interface for selecting templates (instead of just a CLI-style interface)


## License

[MIT License](LICENSE.md)
