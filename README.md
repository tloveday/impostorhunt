`python3 -m http.server`

# Impostor Hunt
[View live project here:] (https://tloveday.github.io/impostorhunt/)

Inspired by Twitch Streamer "Warwick Zero" and the game "Among Us" Imposter Hunt utilises both the main game dynamic of Among Us and that of traditional memory games. 

This is the second of four Mile Stone Projects, and to date the most difficult and on occasion mind melting project I have ever faced.

The brief was to build an interactive front-end site that responds to users' actions, allowing them to actively engage with data, alter the way the site displays the information to achieve their preferred goals.


## Mock Up??
! [alt text] (img.jpg)

## User Experince
### New User
- Have Fun playing a memory game which adds added win and loss goals.
- Improve memory.
- Find information about the streamer "Warwick Zero".

### Returning User
- Beat previous time completing the hide and seek esque challenge.
- Beat previous vote count in completing the hide and seek esque challenge.
- Improve memory
- Find the social media for the streamer "Warwick Zero".

## Design
### Colour schemes
The Colour Scheme of the game is inspired by the Among Us' main colour schemes with all character colours taken from the hexadecimal colour palate. 
### Typography 
"Press Start 2P" - Imposter Hunt features similar font styling to the game 'Among Us' and stylistic for the game- it is used sparingly in headers for the overall page and all Game Start/Over notices.

"Playfair Display SC" - is a complimentary font to "Press Start 2P" and is clear easier to read when proving the user with information about number of votes (clicks made) cast and the time remaining.

### Imagery
All imagery is inspired by Among US and has been recreated and drawn by the Myself. The Impostor character is completely custom and created off the look of the Streamer Warwick Zero. These are technically fan art.

### Audio
Audio is downloaded from the Official [Voicey:] (https://www.voicy.network/official-soundboards/games/among-us#) soundboard. The effects selected match with areas of the game, both Victory and Defeat are in the same seelection. The Sound on Game Start comes from the reporting of a body in the game, Matched is the same effect used when players commit votes in Amoung US, the Flip sound comes from the in game message sound.
### Languages Used
HTML
CSS
Javascript

## Frameworks used
- [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the wire frames for design.
- [Bootstrap 4.4.1:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
- [Font Awesome:](https://fontawesome.com/)
    - Font awesome was used for the social media images found in the projects footer.
- [favconit:] (http://faviconit.com/en)
    - Favconit was used to build and code the favcons that feature on the project.
- [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
- [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
- [Google Fonts:](https://fonts.google.com/)
    - Google Fonts provided the code for the fonts used throughout the project.
- [Procreate:] (https://procreate.art/) 
    - Procreate was used to create the visuals for the art used throughout the project.


## Testing
HTML was directly imput into (https://validator.w3.org/) and no warnings or errors were shown.
CSS was directly imput into (https://jigsaw.w3.org/css-validator/) with results showing no warnings or errors. 

### User goals
Each Goal has been met in my opinion.

### Further Testing
Website was tested on a variety of browsers including Google Chrome, Safari, Firefox, And Edge.
The website was viewed on a variety of devices including desktop, laptop and mobile on both iOS and Android.

The Website was provided to friends and family and used on stream by both Warwick Zero and his mod team Vhler in order to obtain unbiased review and feedback on user experience from both the streamer and their chat. Reviews were generally positive with the community on a whole posting scores and times into the chat following play. Some bugs were found speciifically of users using iOS devices and the brower Safari.

### Further Development
With more time, confidence in my abilities and better understanding of Javascript I would liked to have added "Game Over" screens for Victory and Defeat upon winning or losing the game.

## Bugs

I found early bugs in using Safari for the game. The cards came pre-flipped and would flip the image across the Y axis as used in the transition this was corrected by hiding the backface of the card face. Bugs have continued to be a problem in Safari particularly for users using iOS devices with the card flip providing glitch like graphics. This is an issue which due to my limited experince has been impossible to solve.

Building the card flip function.
When adding the initial code all cards would turn face, without the need for a click. Which is counterproductive to the game. I've tried Jquery and could get the action to work but due to insecurities on jQuery knowledge I opted to write in plain javascipt.

Through discussion with peers I came across the problem, the mistake and have made and the attempted.

Following the addition of the shuffle cards function in the script.js file the game would match the old card placements with the new and often incorrect matches. This has been corrected by having the javascript file write the new positions into the 'cards' data attribute as it writes the cards shuffled face image into the DOM.

Throughout the build I continualy noticed that the game could be 'hacked' by users double-clicking on individual cards, this regisered the card as card2 and therefore a match in the game. this was corrected by adding a return out of the cardFlip function if the card contained the class 'visible'.

## Images

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Media
-   All Images were created by the developer.

### Acknowledgements

-  My Mentor for continuous helpful feedback.

-  Tutor support at Code Institute for their support.

- My family for thier continual feedback and honest critique, thier support and love (Even Liwsi and your sleepless nights).

- The Streamer Warwick Zero (https//:www.twitch.tv/warwickzero) and his community for their constant feedback, brutally honest critique and ever ending support that brought me out of dark thoughts. 

### Final Thoughts
This project has been one of the hardest tests I've ever experienced. I have sat through hours of youtube tutorials, on top of multiple re-watches of the entire module leading into the project. I have spent days looking at singular problems with no way forward, at several points during the process I have considered quitting the course completely due to the negative impact it was having on my mental health and personal  well-being. Whilst this may not be perfect or complete as I orginally wanted and intended it is the best that I can currently provide with my limited experince in Javascript. 