# 4 Must-Have Tools for Developing on Windows

> This post was originally made for [Dev.to](https://dev.to/jonosellier/4-must-have-tools-for-developing-on-windows-3eg8)

No I am not talking about *those* apps, the ones everyone probably already has installed. The VSCodes, the VIMs, the Postmans. Nor am I talking about any of those environments that you only use because that's what you are developing for, no Node or Deno here, not even Docker. But you should totally try them all out if you haven't.

## Notepads
[Notepads](https://www.notepadsapp.com/) is a Windows App developed by a Microsoft Employee. That being said, it is not endorsed by Microsoft. It is simply a more refined version of Notepad. It has tabs, it renders markdown, it has a dark mode and ligature support. It can't open files greater than 1MB but the point of this is to open smaller files for quick editing, anything larger than 100 lines and I'd want a more full-fledged editor with highlighting and so on. It can also be launched from the terminal, just like Notepad. I use this for when the .25s VSCode takes to launch is too long or as a persistent clipboard or as an alternative to Sticky Notes.

![](https://static.wixstatic.com/media/0fcd80_f13c96da960d491fa8862087ad614ce4~mv2.png/v1/fill/w_588,h_450,al_c,q_85,usm_0.66_1.00_0.01/1.webp)
*Image from the Notepads website*

## A good monospace font
I am going to come out and say that [Fira Code](https://github.com/tonsky/FiraCode) is the move here because it has excellent ligature support, making multi-characater operators feel like the single operator they are. I know other fonts have ligature support too but Fira's just seems to be the most natural to me. It also has excellent support for differentiation between `Il1|` and `oO0` which is an objective plus to the font. The font height is also good for readability at various sizes.

Note that you can use any of the points I made about Fira Code and apply it to any monospace font to find the right one for you.

Matej Latin has an excellent [article](https://betterwebtype.com/articles/2020/02/13/5-monospaced-fonts-with-cool-coding-ligatures/) on what makes a good font for coding. He also includes diagrams with his work that illustrate what I said about character differentiation.

## Windows Terminal
I don't care if you have a terminal. Ditch it. [Windows Terminal](https://github.com/microsoft/terminal) is very likely the future of the Windows built in terminal and it is frankly excellent. I use my terminal all day at work and I have only wanted exactly 2 features from it:

1. Clickable link support
2. Quake-style hide and show

I am well aware there are terminals that can do both of these things (like the terminal in VSCode, *cough cough* Microsoft 😐) but those are minor. I like that you can set up many different shells, including WSL, Powershell, and even CMD (but why would you use CMD?). Add in launch arguments as one of the items and you could set up automatic SSHing to some other machine as a keyboard shortcut or new tab item. 

Speaking of shortcuts, you can customize them in any way you see fit too. I have some set up to change tabs based on keystrokes I have hooked up to three finger swipes on my track pad to change tabs in full screen mode.

## Powerline
Now that you have an awesome terminal and an awesome font, you can install the single greatest tool here: Powerline. Powerline takes your Powershell prompt and brings it to the 21st century.

![](https://www.hanselman.com/blog/content/binary/Windows-Live-Writer/63963d6f2af3_12BCC/image_e2447ddd-416e-4036-9584-e728455e6d9d.png)
*Image from Scott Hanselman*

Integrated git info, last command exit code indication, shortening directories to have Unix-style `~` for Home, all makes it an objective improvement to stock Powershell. This tool is so good, Microsoft put up a [guide to install](https://docs.microsoft.com/en-us/windows/terminal/tutorials/powerline-setup) it. 

## Conclusion
Developing on Windows can be so much better if you give your setup some love.  It might not be as powerful as Linux (although WSL kind-of means it is but that's another story). The point is, it sure is catching up and I am glad Microsoft has embraced their platform for [developers](https://tenor.com/sR1j.gif).

#### What is your favorite tool for developing on Windows?
Let me know in the [comments on Dev.to](https://dev.to/jonosellier/4-must-have-tools-for-developing-on-windows-3eg8)!
