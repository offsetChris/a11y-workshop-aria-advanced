# A11y-workshop-advanced-aria 

* aria-live &ndash; when and how to use effectively
* aria-live and role similarities
* aria-haspopup &ndash; what it means and how to use
* aria-expanded &ndash; what it means and where to use
* aria-controls &ndash; basic meaning and implementation


Some basics about each topic listed and a few live examples. More will be added in the future! 

If I've overlooked something or you want to suggest an update please submit an issue or contact me with specifics. 

There are some outlying questions that need to be answered: 
* What specific use cases require aria-haspopup? 
* What happens when using aria-haspopup and aria-expanded together? Aria-expanded describes state, aria-haspopup seems to not have anything to do with state, but could have inherited properties? 
* More detail on aria-owns, especially using multiple ID references - what are common use cases? 
* General browser support issues for aria-live
* General browser support issues for aria-haspopup="[role]"


## Helpful examples:
[WAI-ARIA-Practices 1.1 Alert example](https://www.w3.org/TR/wai-aria-practices-1.1/examples/alert/alert.html)
[WAI-ARIA-Practices 1.1 Accordion Example using aria-owns](https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html)