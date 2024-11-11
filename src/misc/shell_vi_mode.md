# Bash' superpowers
If you''ve got here then it either means that Google finally ranked up my webpage or that you're a die hardcore vim motions f\*ckboy. Either way this is going to be awesome.

## Prologue
I like vim motions and for a while now I've figured out that bash does so much more by default than expected. Such things are delete the command, delete by word, navigate to start and end of the command.
But even after using and forgetting some keybinds I''ve never figured out that those keybinds can be changed, and not lightly as in remapping `Ctrl+X` to, let's say, `Ctrl+L`. These changes are massive as in the emacs and vi camps, and that's exactly what's going on.
Bash got emacs and vi users covered. As a neovim, I use neovim btw, user that''s awesome. Now I won''t have to remember emacs keybinds and go and just use the motions I'm already familiar with.

## The change
It freakishly easy to switch between them, just hawk tuah and execute this:
```bash
set -o vi
```

That's all it takes and now you have super motions available!

## The bad
Alright I get it, you cool with vim* motions. However it's not all rainbow and sunshine. Some things are not as straight forward as in vi, some keybinds and behaviours are not the same and finding them requires to read a man (various maybe).

## The good
It's almost all as you rember, the lead key is `ESC` which enters normal mode in which you can do pretty much anything as you remember.

### j|k
While in normal mode, navigate the history if you're on a single line such as
```bash
echo Hello World
```

When it encounters a more than a single line you''ll navigate that text as if it's a file, but the boundaries are determined by the history and not executed commands boundaries.

### h|l
Seems to work as you''d expect. However it doesn''t do anything more special like [j and k](#jk)

### ESC
Enter normal mode

### i
Enter insert mode when in normal mode only.

### v
Enter visual mode when in normal mode only. `V` for line visual.

That's about it, everything else is motions and maybe a mistype that leads to a new discovery.

## The "oh shoot!"
Emacs mode seems to be widely more used than vi mode and, to some extend, some plugins (referring to zsh-autocomplete) might not work as in emacs mode.
And there's also vi != vim. Some things are just not available.

## Glossary
https://www.gnu.org/software/bash/manual/bash.html#Readline-vi-Mode
