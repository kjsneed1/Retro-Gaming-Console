# Retro Console Gallery Project

## CIS131 - Keaton Sneed

**GitHub Link:** <https://github.com/kjsneed1/Retro-Gaming-Console>

---

This site makes a request to an API to get a list of retro gaming consoles. It starts off by creating a new XMLHttpRequest. Then I add an event listener on load to populate the data visually when the request is made. When the load button is clicked, I run the 'open' method on the request, to set the method and URL. Then I run the send method on the request itself. Once the request is run, it checks that the status is correct, and then parses the response body. Then, a 'card' is added to the UI for each console returned. Then the summary is updated with the total number of consoles, as well as the oldest and newest console returned from the API. The oldest and newest are calculated by iterating through the list and setting comparing the previously set oldest and newest consoles to the current console in the iteration.
