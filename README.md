# angular-8t3kmd

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-8t3kmd)

## Note on the project update
This project has been updated to the latest packages in line with NG version 11.

These libs were not updated:
- "bootstrap"
- "core-js"
- "popper.js"

## Todo's
I've left TODO's & Notes in the project as extra enhancements that could be made and to point stuff out.

## Routing
I'm using hash routing strategy for quick auto reload.
As the Push Strategy doesn't load the parameterised routes on refresh (like a server would).

## Further Enhancements
To further enhance this project we could:
- Create a data store/source for the weather data.
- Create a startup service which would pre fetch the weather data and store it in the data store.
- Make the weather card dumb, and pass it it's weatherObject (just need to make sure when we add or remove zipCodes that all the cards aren't refreshed).
