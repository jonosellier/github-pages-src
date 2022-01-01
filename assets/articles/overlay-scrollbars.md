# Easy Overlay Scrollbars with Reactive Design

> This post was originally made for [Dev.to](https://dev.to/jonosellier/easy-overlay-scrollbars-variable-width-1mbh)

---

## Why even use overlay scrollbars?

Overlay scrollbars are great because they don't affect the width of the content as they appear and disappear. When I discovered this trick, I was specifically looking to solve the problem of content reflow as a page went from `<100vh` to `>100vh`. The other nice thing with overlay scrollbars is that they can more seamlessly get out of the way when you aren't using them.

## Great, how do I do it?

With `overflow: overlay`. Seems too easy right? Well it's Chromium only (so Edge, Brave, Chrome) so it can't be your only overflow option. Ideally, you want to wrap it in `@supports(overflow: overlay)` with a fallback to `auto` or `scroll`. This is what it looks like on Windows without any further styling:

![What overly scrollbars look like on Windows without any further styling](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0xkn4h9pnciunqn7d7ut.png)

You'll notice that the scrollbars literally _just_ go over the content. We'll need to make the scrollbars look a bit better:
* Transparent background so we can see the content it overlays
* Semitransparent scrollbar for the same reason
* Small enough it doesn't get in the way
* Big enough for a mouse to click and grab (because our grandfathers deserve to scroll how they're used to)

So all we have to do is use some scrollbar CSS (which is supported on Chromium too) to make it look a bit better...

Apply the following CSS...

```CSS
body {
  overflow: overlay;
}

*::-webkit-scrollbar {
  display: block;
  width: 16px;
}

*::-webkit-scrollbar-button {
  display: none;
}

*::-webkit-scrollbar-track {
  background-color: #00000000;
}

*::-webkit-scrollbar-track-piece {
  background-color: #00000000;
}

*::-webkit-scrollbar-thumb {
  background-color: #00000040;
  border: 1px solid #ffffff40;
  border-radius: 24px;
}
```
...and we get this:

![The scrollbar in a usable but imperfect form](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gybf24srysqcavn4h28d.png)

You'll see that the scrollbar is wide enough to grab with a mouse (it's as wide as it is on Windows, `16px`) but a bit too wide as a pure indicator. Those last 2 points are important but seem to be a bit contradictory. We could make the scrollbar get bigger on hover but you need to hit that small target before it gets bigger so you might as well keep it small. Unless we...

## (Ab)use shadows to make things more usable

If we set the shadow behind the scrollbar to be some solid inset shadow and a large, transparent border, then we can make the bar itself transparent, so the only thing we see is the inset shadow, that is smaller than the bar itself due to the border.

```CSS
*::-webkit-scrollbar-thumb {
  background-color: #00000000;
  border: 5px solid transparent;
  border-radius: 24px;
  box-shadow: 4px 0px 0px 4px #00000040 inset;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #00000040;
  border: 0px solid transparent;
  box-shadow: none;
}
```

The result we get is a bar that looks 6px wide but is really 16px:
![A small scrollbar](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e5ddfqpheqd83asns6lx.png)

And when we hover near the "smaller bar" (within 5px), it looks just the same as before with the same pointer target size since the element itself is not any smaller.

Now if we extract that color to a CSS variable we can go further!

## Going even further

We gotta extract that scrollbar color to a variable, let's call it `--scrollbar-color`.

Then let's add a few more CSS rules to change this scrollbar color based on whether or not the page/element is focused. This is the new CSS that uses variables and `:hover`, etc. selectors:

```CSS
* {
  --scrollbar-color: #00000000;
}

*:hover, *:focus, *:focus-within {
  --scrollbar-color: #00000040 !important;
}

*::-webkit-scrollbar-thumb {
  background-color: #00000000;
  border: 5px solid transparent;
  border-radius: 24px;
  box-shadow: 4px 0px 0px 4px var(--scrollbar-color) inset;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: var(--scrollbar-color);
  border: 0px solid transparent;
  box-shadow: none;
}
```

This will make your scrollbar invisible unless you hover over the element (or page).

But what if we want it to look like a mobile phone's indicator that disappears unless we are currently scrolling? Well for that we finally need JavaScript

## Finally needing JavaScript

We got pretty far with CSS but it's time to listen for events, scroll events. Below we add a class to `body` whenever we are currently scrolling. 

```JavaScript
var barTimeout;

document.body.onscroll = () => {
  if(barTimeout){
    clearTimeout(barTimeout); //clear to reset
  }
  barTimeout = setTimeout(() => {
    document.body.classList.remove('scrolling');
  }, 500); //0.5s delay
  document.body.classList.add('scrolling');
};
```

Then we adjust our CSS a little to instead change the `--scrollbar-color` on `body.scrolling`:

```CSS
body {
  --scrollbar-color: #00000000;
}

body.scrolling {
  --scrollbar-color: #00000040 !important;
}
```

## Final touches for production

Just make sure to wrap all this CSS in `@supports(overflow: overlay)` and so on! It will work in this current state on [79% of browsers we want to target\*](https://caniuse.com/css-overflow-overlay) but we need to support Safari and Firefox still!

> \* Since we are emulating mobile device scrollbars, we can only look at desktop browsers

## The final product

Available on JSFiddle with hover effect [here](https://jsfiddle.net/fhb4k15o/48/) and scroll effect [here](https://jsfiddle.net/fhb4k15o/50/)

---------

## Let me know if this helps you out in any way! 🚀
