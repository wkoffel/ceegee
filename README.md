# CeeGee - A Video Production Graphics Generator

## Purpose

A [Character Generator](https://en.wikipedia.org/wiki/Character_generator) (or "CG") is a system that does graphics overlays on live video. These devices are typically powerful and [quite expensive](https://www.bhphotovideo.com/c/buy/Titlers-Character-Generators/ci/1966/N/4028759390).  CeeGee provides a very lightweight CG system based on simple HTML templates, controlled via command line, and output over HDMI.

This is currently a **toy project** and really not designed for production video workflows, although feel free to give it a go, YMMV.  If you are doing this in serious environments, you'll probably want something like [CasparCG](http://casparcg.com/), which will not run on a Raspberry Pi (lack of modern OpenGL version and Intel-only), but is professional-grade software.

## To Use

CeeGee was built with a primary use-case in mind, although adjacent creative uses are certainly possible.

1) Run on a [Raspberry Pi](https://www.amazon.com/CanaKit-Raspberry-4GB-Starter-Kit/dp/B07V5JTMV9/?tag=clear0e4-20)
2) Output over HDMI to a video switcher, in my case the [BlackMagic ATEM Mini Switcher](https://www.amazon.com/Blackmagic-Design-ATEM-Mini-Switcher/dp/B07XZKRDLB?tag=clear0e4-20), ideally one with a chroma keyer feature.
3) SSH into the Pi, launch CeeGee, and use the interactive CLI to change templates live.

### Installing

On a Raspberry Pi, first make sure it's fully up to date:
```
sudo apt update
sudo apt full-upgrade
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
nvm install 14
sudo apt install yarn
```

Some recommended extras:
1. To stop the screen from blanking, `sudo apt-get install xscreensaver`, then in the screensaver desktop preference pane, _Disable Screensaver_
2. To remove black overscan bars from HDMI output, edit /boot/config.txt

Then install CeeGee:

```
git clone https://github.com/wkoffel/ceegee
cd ceegee
yarn install  
```

Finally, connect the Pi HDMI output to an HDMI switcher, login via SSH and run:

```
rpi$ cd ceegee
rpi$ DISPLAY=:0.0 yarn start
```

You may see MESA-LOADER warnings, a [known bug](https://github.com/RPi-Distro/repo/issues/89) in the RPi OpenGL distro.  They are annoying but harmless.

### Templates

Templates can be any web-page content. Uses include:
* Greenscreen background with lower-third banners
* Splashpage for intro/outro
* Display a live Twitter or comments feed on top of a video stream

New templates are installed under `ceegee/templates/` directory.

## Contributing Templates

For any feedback, discussion or contributions, please use GitHub Issues and Pull Requests.

**Please make templates** One of the best ways to contribute is to build an HTML template designed for CeeGee.  I am not a designer, so great graphical experiences are welcome additions!


## Development

I typically developer and test on macOS, deploy to Raspberry Pi.  The following should mostly get a dev environment running on macOS:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
nvm install 14
brew install yarn
git clone https://github.com/wkoffel/ceegee
cd ceegee
yarn install
yarn start
```

Some potential directions for future development:

* Expose a web-based interface for selecting templates (instead of just a CLI-style interface)


## License

[MIT License](LICENSE.md)
