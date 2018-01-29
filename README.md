# Finnder like Tinder
BrickHack4 - Finnder Like Tinder: users will "smash" or "pass" on foods and will determine where they will want to eat it in. 
# Team Members
* Brett Patterson
* Isabella Sturm
* Jahongir Amirkulov 
* Karthik Iyer


# Project Layout
- Sign-in: possibly use Facebook sign-in
- Profile:
    - Preferences: food categories
    - Willing to experiment? 
    - Distance willing to travel for food
- Restaurant Preview
    - Preview photo
    - Name of restauant and maybe distance from location
    - Rating
    * Smash or Pass buttons (maybe when you smash, you save the restaurant to profile or have a Smash page *
- Select Restaurant Page
    - Photo gallery
    - Reviews and ratings
    - Menu
    - Website Link
    - if possible can they order online? / phone number
    - any other info
    * Smash or Pass buttons *

Zomato API Key: 1027d5a8e746a4bf1dbc87c98fc6dc0c
Google API Key: AIzaSyC4251SJyy4ClZ7NWsumqqG1c0zpui0ViU 

# TODO
* Fix the "Object object" issue when extracting data

# New Process Flow
index.html (getLocation of user)
--> redirects to browser.html, uses preview.js to populate page
    --> preview page click --> redirects to the full restaurant page
    --> swipe right should store smashed restaurants for later views in 'session'
    --> swipe left just moves the index of results

# Where We Left Off 1/28/18
- getLocation results in array of "object":"Object"
- can't convert address or city or zip to long and lat coordinates, so now just relying 
    on getting user's coordinates from device
- need to work on:
    - integrating the locate.js into index.html
    - integrating browser.html and preview.js
    - make the full restaurant page when clicked
- would like to have:
    - login (requires database)
    - ability to select all restaurants within a distance radius not just in a city
    - filter more specifically : types of cuisine, price, rating, etc..
    
