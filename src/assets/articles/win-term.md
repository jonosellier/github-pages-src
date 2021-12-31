# Things you might not know about Windows Terminal

> This article was originally made for [Dev.to](https://dev.to/jonosellier/things-you-might-not-know-about-windows-terminal-ma2)

With Microsoft announcing that Windows Terminal will be the [new default terminal](https://www.theverge.com/2021/12/15/22837218/microsoft-windows-terminal-default-windows-11-changes), I wanted to take the time to share some of the things you might not know about the new default.

## Launch anything

You can configure Windows Terminal with various profiles that let you launch into any program you want. 

Say you needed to remote into a machine super often. Setting up a profile with `ssh user@hostname` puts you right into that machine with a `Ctrl` + `Shift` + `<number>` keystroke. The same can be done for WSL containers or REPLs. I literally use my Node REPL profile daily for quickly transforming objects or making quick calculations. 


## Launch Anywhere

You can also set your starting directory so you can have shortcuts to open a new tab in any directory you choose. I use this to quickly get between my main projects.

## Launch as anyone

This is more of a hacky workaround for the PowerShell "Run as different user" option but as long as you have an SSH server running you can SSH into your own system as another user. Simply run `ssh [domain\]username@localhost` and you're able to log in (as admin)! If you find yourself doing this often, put it in a profile since it's no different to any other SSH command.

![The feature we are trying to emulate](https://content.spiceworksstatic.com/service.community/p/post_images/0000350437/5c93d00b/attached_image/Untitled.png)

*The feature we are trying to emulate*

## Have a terminal that looks like it's been updated since the 90s

Windows Terminal supports ligatures and [Nerd Fonts](https://www.nerdfonts.com/) so installing one of those opens the door to alternative prompts like [Oh My Posh](https://ohmyposh.dev) that gives you inline Git info, privilege level and so on. I have mentioned this before and go into greater detail on [another post](https://dev.to/jonosellier/4-must-have-tools-for-developing-on-windows-3eg8) but it's worth mentioning again because it's so good. 

### Bonus modernization features you should install anyways

- [Terminal Icons](https://github.com/devblackops/Terminal-Icons) makes your `ls` a bit prettier and more useful. 

- [Change Tab Completion](https://tech.ligthartnet.nl/powershell-tab-completion/) so you can see all arguments and options available to you. You can also bind `UpArrow` and `DownArrow` to `HistorySearchForward` and `HistorySearchBackward` in the same way to cycle the history of commands starting with what you typed.
