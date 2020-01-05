# Sascha Gogolin Portfolio

<br/>

## Table Of Contents

- General Information
- Demo
- Wireframe Mockups
- Technologies
- UI
- UX
- Accessibility
- Challenges
- Features
- Testing
- Version control
- Deployment
- Credits

<br/>

## General Information

### Code Institute Coding Bootcamp - Interactive Frontend Development Milestone Project

As a trader and trading instructor I've noticed that there is a severe lack of modern web-based risk management calculators available on the web.

The caculators that currently are available look old, outdated and lack a good combination of metrics.

I therefore decided to create a website dedicated to risk management in trading including one of the most important metrics which is the risk of ruin.

On top of understanding and knowing ones risk of ruin as a trader, it is important to also be aware of the probability to experience a certain amount of drawdown or a number of consecutive losses and wins in a row, which increases the traders tolerance for variance. I chose to include both those metrics in the calculator output as well.

Ultimately, the calculator is not meant to be a standalone website, but rather integrated into trading education website as a section on risk.

For the purpose of this project I added the necessary content and information, explaining why risk management is important and how to use the calculator.

<br/>

## Demo

A live demo of the website can be found [here](https://3pu.github.io/risky-business/).

<br/>

## Wireframe Mockups

<table>
   <tr>
    <td>Introduction Page - Large Screen <img src="https://raw.githubusercontent.com/3PU/risky-business/master/assets/images/wireframes/wireframe_calcpage_largescreen.png" alt="Wireframe Mockup Introduction Page - Large Screen" style="width: 200px;"/></td>
    <td>Introduction Page - Small Screen <img src="https://raw.githubusercontent.com/3PU/risky-business/master/assets/images/wireframes/wireframe_calcpage_largescreen.png" alt="Wireframe Mockup Introduction Page - Small Screen" style="width: 200px;"/></td>
    <td>Calculator Page - Large Screen <img src="https://raw.githubusercontent.com/3PU/risky-business/master/assets/images/wireframes/wireframe_calcpage_largescreen.png" alt="Wireframe Mockup Calculator Page - Large Screen" style="width: 200px;"/></td>
    <td>Calculator Page - Small Screen <img src="https://raw.githubusercontent.com/3PU/risky-business/master/assets/images/wireframes/wireframe_calcpage_largescreen.png" alt="Wireframe Mockup Calculator Page - Small Screen" style="width: 200px;"/></td>
    </tr>
</table>

<br/>

## Technologies

- HTML
- CSS
- Bootstrap CSS 4.4.1
- Bootstrap JS 4.3.1
- FontAwesome 4.7.0
- jQuery 4.3.1
- Popper 1.14.7

<br/>

## UI

### Colors & Layout

My goal was to create a clean, yet effective UI. By using a black background and light blue/grey text colors I achieved a high contrast that is pleasing to the viewers eye without being 'too much'.
In order to make the UI slightly more interesting, I added a skewed background divider, using a subtle grey color. I also tried giving each section and the risk calculator as much real estate on the page as possible.
Instead of using a standard/old-style way of a calculator where the user manually enters values and the presses a 'calculate' button to receive the calculations, I decided to use sliders that update the calculations upon each input directly, making the website and calculator feel more alive and engaging.

### Responsiveness

The website has been built with a mobile-first approach and is highly responsive. This is achieved by using bootstrap and custom-written css.

On screens above 768px:

- Text and image within each section are set to inline.
- On-hover tooltips are available in the calculator dashboard to explain each metric.
- Slider-thumbs in the calculator are smaller in order to achieve a more minimalistic/professional look.

On screens below 768px;

- Text and image within each section are set to block.
- Tooltips are replaced with small text below the metric to explain them as 'hover' is not an option on touchscreen devices.
- Slider-thumbs in the calculator increase in size to make it easier to use on touchscreen devices.
- Calculator metrics and sliders are set to block instead of inline so they do not get too small.

<br/>

## UX

The goal of the website is to help the user understand why risk management in trading is important, to explain the different risk metrics briefly one by one and to help the user calculate their own risk metrics based on their own trading statistics.
I initially added a toggler-navigation to the top left of the website, but once I added the accordion-dropdown function to each section, the toggler-navigation became obsolete because when one section is expanded, all others collapse, leaving the user with a compressed vertical view at all times on medium to large screen sizes.

### User Stories

As a new user to the website...

1. I intuitiviely want to understand how to use the navigation and calculator without receiving instructions. This is for example achieved by using up/down arrows on the compressed sections and sliders in the calculator which immediately should activate the learned in behavior to press/adjust them.
2. I want to receive clear and short explanations of why risk control is important and what each metric mentioned on the site means and why I need to pay attention to them as a trader.
3. I want to be able to quickly understand how to use the calculator without having to know exactly how to enter the different values manually.

As a returning user to the website, I want to keep using the calculator as my risk metrics will change frequently because my trading statistics as a trader will fluctuate over time.

<br/>

## Accessibility

To increase accessibility of the website, ALT attributes have been added to all images and ‘sr-only’ attributes have been added to the top navigation bar, social links in the footer and to the progress bars on the skill page to allow screen readers to capture and reproduce the data/information presented.

<br/>

## Challenges

One of the main challenges I faced in the beginning of the project was to design and adjust the size/position of the background images used in the larger screen size version in a way so it would stay clear of the content as much as possible.

For smaller screen sizes below 768px the main challenge was to find a way to keep the ‘notebook’ feeling alive and avoid the text content from blurring with the background whilst providing the user with a clear orientation without using up too much ‘real estate’.

This was achieved by removing the background and paperclip imges on all pages entirely, replacing the top navigation bar with a nav-toggler menu and keeping the 'Shadows Into Light Two' font for the headings on all pages.

<br/>

## Features

### Existing Features

The background image provides viewers using larger screens a navigation orientation as the text written by the hand/pen image reflects the current page that’s loaded (i.e. about, work history, etc.).

Viewers on smaller screens will instead be presented with a orientation label at the top of the screen below the main logo since the background image is hidden on smaller screens.

Subtle hovering effects (color transition and scale transform) were added to the navbar, social link items and photography thumbnails. A soft transition effect was added to the toggler/menu window on smaller screen sizes below 768px.

### Features Left To Implement

I’d like to add a portfolio page in the future where I can present all of my future projects.

Since I for this project wanted every page to only reflect accurate information of me, my skills and work history, at this stage, I decided not to add a portfolio page linking to 'fake’ projects.

<br/>

## Testing

The site was created using a mobile-first approach and ongoing testing of the responsiveness thus became a crucial part of the testing process to ensure the site is presented as intended on all screen sizes.

Testing was also performed across multiple browsers such as Chrome, Safari, Internet Explorer, Edge and Firefox to ensure responsiveness and compatibility.

The majority of responsiveness and functionality testing was performed during development using the developer tools in Google Chrome and towards the end of the project also live on a high-resolution screen (iMac) and iPhone 7 plus.

I cross-checked and tested all links on every single page (navbar, nav-toggler menu and social links) to ensure that they all work as intended.

Furthermore, the code of each page and stylesheet has been checked for errors using a HTML and CSS validator tool.

During the testing process, I on purpose introduced broken image links to ensure the ALT attributes loaded and showed correctly.

All social links in the footer along with all photos in the photography section will be opened in new tabs using ‘target=”_blank”’, something my testing of all applicable links confirmed to be working as intended.

All fields in the contact form have the ‘required’ attribute to ensure no field is left blank before submitting and it’s not possible to submit the contact form without entering a valid email address, something I tested as well.

During testing towards the end of the project, I deployed the site via GitHub pages, loaded it live on mobile devices such as iPhone plus 7 and encountered multiple errors that the Google Chrome developer tool had not revealed.

For example, a feature that was working correctly in the ‘iPhone view’ of the developer tools but not on a real life device was the nav-toggler menu. In order to be able to address and fix this, I had to create a new test repository, working live with a deployed version back and forth via GitHub pages in order to be able to re-load the site many times on a live iPhone 7 plus.

Except a minor background/image overlap on iPad screen sizes, there are no obvious errors that have been left unattended/unfixed.

I let family members and friends test the website with the toggler-navigation and the majority of users never used the toggler-navigation because the accordion-dropdown function added to each section left the user with a compressed vertical view at all times.

On tablets and smartphones, the same behavior stood out (i.e. viewers never used the toggler-navigation) because scrolling on a touchscreen is so fast.

<br/>

## Versioning Control

GitHub is used for version control. The site is hosted on GitHub pages and deployed/updated via the master branch upon every new commit.

<br/>

## Deployment

GitHub is used for version control. The site is hosted on GitHub pages and deployed/updated via the master branch upon every new commit.

<br/>

## Credits

### Content

All content on the website except the below mentioned graphics and elements have been written, coded and designed by me.

### Media

The original ‘hand/pen’ background image was taken from PurePNG [here](https://purepng.com/photo/11086/objects-pen-on-hand) and the paperclip image from HiClipart [here](https://www.hiclipart.com/free-transparent-background-png-clipart-qysrn).

### Acknowledgements

The css nav-toggler menu code was found on this [page](https://codepen.io/maxpelic/pen/arpgmE) and significantly modified to fit the styling and design of the page.