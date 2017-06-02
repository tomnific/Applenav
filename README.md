# Applenav
A near perfect (and customizable) replica of [Apple's](http://www.apple.com) navigation bar for Bootstrap.


## Installation
1) Install [Bootstrap](http://getbootstrap.com/) and set up your navigation bar <br>
2) Set up your navbar as `navbar-inverse` ***Note:*** it MUST be `navbar-inverse` <br>
3) Clone this repository <br>
4) Put the `applnav` folder into the folder where your site's resources are <br>
5) Add this line ***After*** the Bootstrap CSS import, but ***Before*** your custom CSS import in the `<head>` section:
```HTML
<link href="YourResourcesPath/applenav/applenav.css" rel="stylesheet">
```
6) Then, add this line ***After*** the Bootstrap JavaScript import, but ***Before*** your custom JavaScript import in the `<body>` section:
```HTML
<script src="YourResourcesPath/applenav/applenav.js"></script>
```


## Customization
Create your own CSS file, and edit the navbar just like you would the stock Bootstrap navbar. <br>
If you need to know what properties of what class to edit, you can look at the `applenav.css` and `applenav.js` files. <br>
***NOTE:*** Do NOT directly edit the `applenav.css` and `applenav.js` files. You can do all the customization you need from your own CSS files. <br>


## Known Issues / Differences From The Orginal
* On mobile, the dropdown animation is too fast.
  * This is an issue with Bootstrap. Changing animation speeds results in a choppy animation. 
  
  
## License
Applenav is licensed with the MIT License, which is reproduced in the [LICENSE](https://github.com/TheTomMetzger/Applenav/blob/master/LICENSE) file. Attribution is technically required, and very much appreciated.


## Contact
I enjoy seeing how others use my code! If your site uses Applenav, I'd love to check it out - you can send me a link at these places: <br> <br>
Twitter:<br>
[@TheTomMetzger](http://www.twitter.com/thetommetzger) <br>
<br>
Email:<br>
[Tom@Southernerd.us](mailto:tom@southernerd.us)
