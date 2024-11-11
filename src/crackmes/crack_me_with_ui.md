# Crack me with ui

## Author
yxupy

## Description
My First Crack me. Really Easy.

## Language
.NET

## Upload date
05/22/2022

## Platform
Windows

## Difficulty
1

## Quality
3.1

## Arch
x86-64

## Solution
Opening the downloaded zip only shows us lots of Bunifu dlls, a library of custom made UI components for WinForms, a config and a pdb file and lastly the holy executable.

On Linux you can just use `strings` against it, but the password is not evident enough. We need a decompiler, pick your favorite, anything will do.

Once the exe is imported we can see that in `Form1` class there's a method which has got lots of if/else ifs. But only 1 branch stands out by calling the `Lol` method which on *Ctrl+RClick* we'll see it opens `Form2` and hides the current formulary. Checking the hardcoded string against the applications will lead us to the finish writing *Thanks For Cracking This!*.
