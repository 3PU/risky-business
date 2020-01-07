# Risky Business

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
    <td>Introduction Page - Large Screen <img src="https://raw.githubusercontent.com/3PU/risky-business/master/assets/images/wireframes/wireframe_introductionpage_largescreen.png" alt="Wireframe Mockup Introduction Page - Large Screen" style="width: 200px;"/></td>
    <td>Introduction Page - Small Screen <img src="https://raw.githubusercontent.com/3PU/risky-business/master/assets/images/wireframes/wireframe_introductionpage_smallscreen.png" alt="Wireframe Mockup Introduction Page - Small Screen" style="width: 200px;"/></td>
    <td>Calculator Page - Large Screen <img src="https://raw.githubusercontent.com/3PU/risky-business/master/assets/images/wireframes/wireframe_calcpage_largescreen.png" alt="Wireframe Mockup Calculator Page - Large Screen" style="width: 200px;"/></td>
    <td>Calculator Page - Small Screen <img src="https://raw.githubusercontent.com/3PU/risky-business/master/assets/images/wireframes/wireframe_calcpage_smallscreen.png" alt="Wireframe Mockup Calculator Page - Small Screen" style="width: 200px;"/></td>
    </tr>
</table>

<br/>

## Technologies

- HTML
- CSS
- Javascript
- Bootstrap CSS 4.4.1
- Bootstrap JS 4.3.1
- FontAwesome 4.7.0
- jQuery 4.3.1
- Popper 1.14.7
- Github (version control, remote repository and hosting)

**NOTE:** jQuery and popper.js were importet and used for the tooltips. I decided to use jQuery for the accordion but not for the calculator dashboard in order to show my skills in both areas for the purpose of this project and assesment.

<br/>

## UI

### Colors & Layout

My goal was to create a clean, yet effective UI. By using a black background and light blue/grey text colors I achieved a high contrast that is pleasing to the viewers eye without being 'too much'.
In order to make the UI slightly more interesting, I added a skewed background divider, using a subtle grey color. I also tried giving each section and the risk calculator as much real estate on the page as possible.
Instead of using a standard/old-style way of a calculator where the user manually enters values and the presses a 'calculate' button to receive the calculations, I decided to use sliders that update the calculations upon each input directly, making the website and calculator feel more alive and engaging.

### Responsiveness

The website has been built with a mobile-first approach and is highly responsive. This is achieved by using bootstrap and custom-written css media queries (for more details see testing section).

<br/>

## UX

The goal of the website is to help the user understand why risk management in trading is important, to explain the different risk metrics briefly one by one and to help the user calculate their own risk metrics based on their own trading statistics.
I initially added a toggler-navigation to the top left of the website, but once I added the accordion-dropdown function to each section, the toggler-navigation became obsolete because when one section is expanded, all others collapse, leaving the user with a compressed vertical view at all times on medium to large screen sizes.

### User Stories

**As a new user to the website...**

1. I intuitiviely want to understand how to use the navigation and calculator without receiving instructions.
2. I want to receive clear and short explanations of why risk control is important and what each metric/output mentioned on the site means and why I need to pay attention to them as a trader.
3. I want to be able to quickly understand how to use the calculator without having to know exactly how to enter the different values manually.

**As a returning user to the website...**

1. I want to keep using the calculator as my risk metrics will change frequently because my trading statistics as a trader will fluctuate over time.

<br/>

## Accessibility

To increase accessibility of the website, ALT attributes have been added to all images and ‘sr-only’ attributes have been added to the tooltip navigation icons, allowing screen readers to capture and reproduce the information presented.

<br/>

## Challenges

- I tried to refactor the accordion.js code using a function to iterate through the headlines and siblings/childs. But I got stuck on this for too long, so for now, based on my current skill set and time available for this project, I had to revert back to the most simple way of creating the desired feature.
- During testing across multiple browsers, I realized that the sliders did not display correctly in Microsoft Edge. It took me a long time to figure out why, but eventually I solved it by styling the ms-track, ms-filler-upper and ms-filler-lower elements.
- I have realized that I still do too few commits. I need to further break down my work into smaller steps in to increase the # of commits in case something goes wrong and work needs to be recovered. This is something I'll make sure to implement immediately, starting with the next project.

<br/>

## Features

### Existing Features

- Dark background and light colored fonts provide a strong but visually appealing design.
- The use of accordion-style dropdown sections removes the need of a specific top- or toggler-navigation (see testing for more details). Every time a section is opened, all other sections are collapsed.
- Calculator dashboard with multiple sliders for adjusting metrics used to calculate the risk parameters. The reason I chose to use sliders instead of input fields was to reduce the amount of potential user errors and amount of code needed (limit/control input formats). Another reason for using sliders instead of input fields also was to make the calculator more user friendly and create a positive user experience as sliders are both easier but also more fun to use in my opinion.
- Tooltips in the calculator dashboard explaining each value/metric further.
- Simple footer was added with a copyright symbol, year and title of the website.

### Features Left To Implement

- Even though no navigation was implemented based on the results of the testing (see testing section for more details), I'm thinking about potentially adding a floating 'back to top' button that is displayed at the bottom of the page on smaller devices, allowing the user to quickly get back up to the top of the page without having to scroll all the way manually.

- I would like to refactor the accordion.js code.

- I would like to make the accordion-transitions smoother and more visually appealing.

- The calculations currently performed by the calculator are very basic placeholder calculations and only serve to prove functionality. The current calculations are not the final calculations needed for the correct output of the risk metrics. The true calculations needed are very complex and the mathematician I have spoken to who is willing to help me to write the calculations was unfortunately unavailable during the time of my milestone project.
Once he is available I will add the correct calculations to the calculator as I plan to implement and use this calculator on a trading education website that already is live.

<br/>

## Testing

### Responsive design:

The site was created using a mobile-first approach and is highly responsive. Testing of the responsiveness thus became a crucial part of the testing process to ensure the site is presented as intended on all screen sizes.

Initial testing of responsiveness was performed using the developer tools in Google Chrome and towards the end of the project also live on a surface pro 4, iPhone 5, iPhone 7 Plus and iPhone X.

Towards the end, I used a service/tool called Reposinator (see testing tools for details & link) to do final checks on multiple screen sizes.

One major problem that stood out immediately on mobile devices was the size of the slider-thumbs which was too small to be easily selected with a finger. I therefore introduces a media query that increased the slider-thumb size on screens small than 768px.

Another error I encountered was an overflow of the image outside the section div which was caused by a min-width setting I initially had added. I fixed this by replacing the min-width setting with a height: 100% and width: auto setting.

Below is a short summary of the key features of the responsive design.

**On screens above 768px:**

- Text and image within each section are set to inline.
- On-hover tooltips are available in the calculator dashboard to explain each metric.
- Slider-thumbs in the calculator are smaller in order to achieve a more minimalistic/professional look.

**On screens below 768px:**

- Text and image within each section are set to block.
- Tooltips are replaced with small text below the metric to explain them as 'hover' is not an option on touchscreen devices.
- Slider-thumbs in the calculator increase in size to make it easier to use on touchscreen devices.
- Calculator metrics and sliders are set to block instead of inline so they do not get too small.

### Browser Compability

Browser compability testing was performed across multiple browsers such as Chrome, Safari, Internet Explorer, Edge and Firefox to ensure responsiveness, compatibility and transitions used.

During this phase of testing, I noticed that the calculator-sliders did not reflect the correct styling in Microsoft Edge which I addressed (see challenges above for more details).

I also, on purpose introduced broken image links to ensure the ALT attributes loaded and showed correctly in all browsers.

During testing towards the end of the project, I deployed the site via GitHub pages, loaded it live on mobile devices such as iPhone 7 Plus and iPhone X. No errors were observed.

### Navigation & Section Accordion

I let family members and friends test the website on both a stationary computer and smartphone with the initial toggler-navigation menu in place.

On the stationary computer, none of users actually used the toggler-navigation because the accordion-dropdown function is set to only have one section open at a time. When one section is open, all others are collapsed.

This ensures that the vertical page size is kept compressed at all times. According to the testers the intuitive use of the section open/collapse feature made the toggler-navigation obsolete.

On tablets and smartphones, the same behavior stood out (i.e. viewers never used the toggler-navigation) because scrolling on a touchscreen was both easy and fast.

I performed substancial testing of the accordion feature. No functionality errors were observed but the initial slow transition speed made the section open and collapse, followed by a slow transition of the content. This was fixed by increasing the transition speed.

### Calculator dashboard

Each slider of the calculator does not have an effect on each output. For example, the payoff ratio slider does not have any effect on the max drawdown probability or the probability of seing X consequtive losses/wins in a row, whilst the win rate and number of trades sliders have an effect on all outputs.

The functionality of the calculator and each slider was tested manually on multiple devices by me, family members and friends and no errors were observed.

The javascript code was checked using a javascript validator (see testing tools below).

### User Stories

**I intuitiviely want to understand how to use the navigation and calculator without receiving instructions.**

This is achieved by using up/down arrows (fontawesome chevron icon) on the compressed sections and using sliders in the calculator which should have an intuitive effectu upon the user and trigger the learned in behavior to use these to interact with the site without the need of any explanation (see testing section for more details).

**I want to receive clear and short explanations of why risk control is important and what each metric/output mentioned on the site means and why I need to pay attention to them as a trader.**

This is achieved through the eplanatory text in each section and by using tooltips and tips/hints.

On screen sizes above 768px, tooltip icons 'i' are provided behind each metric/output which display a tooltip with further explanation upon mouse hover.

On screen sizes below 768px, text snippets are provided within parentheses below each metric/outpit whith further explanation.

**I want to be able to quickly understand how to use the calculator without having to know exactly how to enter the different values manually.**

This is achieved via a short text below the calculator headline that explains how to use the calculator. This, along with the tooltips should provide a sufficient walkthrough of the elements and the calculator metrics/outputs (see calculator dashboard testing above for more details).

### Testing Tools

The responsivness and all code has been checked for errors using a HTML, CSS, JavaScript validation tool and a responsiveness tester:

- [W3C, HTML Validation](https://validator.w3.org/)
- [W3C, CSS Validation](https://jigsaw.w3.org/css-validator/)
- [JSHint, Javascript Validation](https://jshint.com/)
- [Responsinator](https://www.responsinator.com/)

<br/>

## Deployment

The project is stored in a GitHub  [repository](https://github.com/3PU/risky-business) and hosted via the master branch on GitHub Pages.

To do this follow these steps:

1. When logged into GitHub, navigate to the repository you want to host/publish. For this project, click [here](https://github.com/3PU/risky-business).
2. Click on 'Settings' to the far right in navigation menu below your repository name.
3. Scroll down to 'GitHub Pages' and select 'master branch' as the **source**.
4. Click **save**.

If you do want to clone this repository in order to run the code locally on your machine, follow these steps:

1. When logged into GitHub, navigate to the repository you want to clone. For this project, click [here](https://github.com/3PU/risky-business).
2. Click on the **'Clone or download'** button which should be displayed above and to the right of the repository files.
3. You are presented with a HTTPs address. Copy this address by pressing the button to the right of the address.
4. Open your terminal.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type **'git clone'** and then paste the URL you copied.
7. Press **Enter** and your local clone will be created.

<br/>

## Credits

### Content

All of the text content on the website was written by me.

### Media

The images used accross the page were obtained from [Pexels](https://www.pexels.com/), [Pixabay.com](https://pixabay.com/) & [Google Images](https://images.google.com/).

### Acknowledgements

- I got the idea for the skewed divider background from this [page](https://codepen.io/chilliconcode/pen/epQORa), which I modified to fit the styling and design of the page.

- Big thank you to my Code Institute Mentor Brian M. for his invaluable support and guidance throughout this project.

### Disclaimer

The content of this website is for educational purposes only.