# ScenarioHandler ( on development )

ScenarioHelper is a library that helps to transition from one card to the other card without coding much.
It will maximize the re-usability of the templates, minimize coding.
instead of React coding, we will use json like object definition to create/modify a new UI look.
ScenarioHelper take advantage of Redux.

CARD : a base wrapper the scenario will handle
PAGE : a combination of UI template and event triggers. one CARD can have multiple pages.
TEMPLATE : ui definitions
EVENT_TRIGGER : event trigger

CARD :

```js
{
  [Pages.MyPage1] : PageSample1
  [Pages.MyPage3] : PageSample2
}
```

Page :

```js
{
   template: myTemplate,
   eventTriggers: [
     myEventTrigger1,
     myEventTrigger2
   ]
}
```

EventTrigger:

```js
{
  ui: {
    text: "My-Text", //basically depending on your template,
    label: data => parseLabel(data), // if the content is function, run function with card's data (usually from network, but depending on redux state)
  },
  event: new ScenarioMovePageEvent( // event
    EventActions.MOVE_PAGE,
    new MovePageValue(
      Pages.MyPage2,
      TransitioningEffects.FLIP
    )
}
```

Template :

```js
export class MyTemplate extends ScenarioTemplate {
  construct(props){
    super(Pages.MyPage1);
  }
  render(){
    return (
      <div>
        <h1>page 1</h1>
        <p>
          {
            this.getEventTriggers().map((trigger,idx)=>{ //this.getEventTriggers returns the array of handledEventTrigger
              return (
                <Button
                  onClick={()=>this.runEvent(idx)}
                  aria-label={triger.ui.label}
                >
                  {trigger.ui.text}
                </Button>
              );
            });
          }

        </p>
      </div>
    );
  }
}
```
