# First crackme

## Author
mietek1528

## Description
It's easy.

## Language
.NET

## Upload Date
04/27/2022

## Platform
Windows

## Difficulty
2

## Quality
4.2

## Arch
x86-64

## Solution
Right of the bat the executable tells us that the exe is obfuscated. [de4dot](https://github.com/de4dot/de4dot), although not in development anymore, will easily produce a cleaner exe with many less redundant xor operations.

To use `de4dot` you'll need some older version of .NET, Core 3.1 works. Build the project with `dotnet build` and in the directory **./Debug/net<some_version>/** you'll see the `de4dot` executable. Popup a terminal in that directory and deobfuscate the crackme, `de4dot --help` will help finding the right command (look at the last lines from the output).

Once cleaned, we could make a project out of it to remove the still redundant methods that got left in there. dotPeek has got a function that lets the user export an assembly (dll/exe) to an project 😏.

The only thing that's left, aside from figuring out the password, is tracing the method that's comparing our input with some other value based on `char[] char_0`. Doing so should lead us to the last method which is really doing its job and removing the other methods, that are supposed to confuse us??, and also the proxies. Heck, since this is our project we could even delete the class Module, the same class with the only clearly weird name `DoLove`. We need to know what the last method, in this case `GetPassword(char[])` is returning, understanding the operations it does is redundant although great c# practice.

Now put a WriteLine in there, by now the code should be sufficient to put it into an online compiler (such as [SharpLab](https://sharplab.io/) or [OnlineGdb](https://onlinegdb.com/online_csharp_compiler)) and see the password of this crackme.

By now we should've learned that obfuscators of this level and any level are useless, security by obscurity is a big nothing against a persistent threats. Put your code on a server and make the user interact with a webpage instead of trusting him all of the data.

## Answer
T8h92cxq
