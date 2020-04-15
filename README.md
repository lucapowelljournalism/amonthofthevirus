# amonthofthevirus

Objective: Create a Twitter-based interactive that allows users to see the changing responses to Covid over-time AND in different regions.

-   User inputs hashtags, dates, places, language
-   Outputs the tweets
-   Goal of the output is to give the user a bird view of social media users' 'minds' via Twitter, related to COVID-19

Pseudo-code

1) Design a layout that is intuitive. Layout should encourage users to test multiple hashtags. Users should feel like their curiosity is rewarded. Moving throughout the interactive should be easy, not confusing, ideally.
1.1) Simplify CSS and Media Queries (Leo workin on this)
  \##LEO== CSS MASTER##
  To-do: Decide on mobile-friendly layout.
  Later: Styling rewarding results? (fly in tweets, etc.)
  MAYBE: Change date input to a slider

2) Create a database (CSV) of tweets from  Twitter's API that sorts tweets by these columns. ##Luca working on this
  Header Row: Hashtag, date, Geo_code(we just want country?), Tweet_Content, username
    \- Hashtag: Our basic idea is to use 5 hashtags only. But with Twitter API we can hopefully scrape more hashtags, from any time period. This means we will have two plans:
      \- Plan 1: 5 hashtags, already scraped.
      \- Plan 2: 10, 15 hashtags, from a broader time period. This plan depends on Luca learning how to scrape Twitter! He has a developer key though already, just needs to learn :)
    \- Date: Day only!
    \- Geocode: I think country is good enough, since we have a world map as our background.
    \- Tweet_content == Tweet_Content
    \- username == username

3) Display tweets corresponding to user inputs. ##Leo and Luca
  a) Select the correct tweets from the database
  b) give them to the browser in some kind of format (could be images, more likely it could be our own 'fake' tweet css)
  3) display the Tweet
    \- either on the map (if we have geocode!)
    \- Below the map (while we don't have geocode)
