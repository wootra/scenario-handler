# ScenarioHandler ( on development )

ScenarioHelper is a library that helps to transition from one card to the other card without coding much.
It will maximize the re-usability of the templates, minimize coding.
instead of React coding, we will use json like object definition to create/modify a new UI look.
ScenarioHelper take advantage of Redux.

SCENARIO_GROUP : a group of scenario. simply an object of [string]: Scenario pairs.
SCENARIO : a group of relation among Scens. one SCENARIO can have multiple SCENS.
SCEN : a combination of UI template and event triggers.
TEMPLATE : ui definitions
EVENT_TRIGGER : event trigger

SCENARIO_GROUP : Object.<string, Scenario>

```js
{
  Card1: Scenario1,
  Card2: Scenario2,
}
```

SCENARIO : {activeScen: function(data, prevScen, nextScen):Scen, scens: [Scen]}

```js
{
  activeScen: activeScenState => Scen,
  scens: [Scen],
}
```

SCEN : {template: Element, eventTriggers: [EventTrigger]}

```js
{
  template: myTemplate,
  eventTriggers: [
    myEventTrigger1,
    myEventTrigger2
  ]
}
```

EventTrigger: {ui: object, event: ScenarioEvent}

```js
{
  ui: {
    text: "My-Text", //basically depending on your template,
    label: data => parseLabel(data), // if the content is function, run function with card's data (usually from network, but depending on redux state)
  },
  event: new ScenarioMoveScenEvent( // event
    EventActions.MOVE_PAGE,
    new MoveScenValue(
      Scens.MyScen2,
      TransitioningEffects.FLIP
    )
}
```

Template : {ReactElement}

```jsx
// myScenario.js
import ScenarioHandler from "scenario-handler";
...
const scenario1 = new ScenarioHandler.Scenario(...);
const scenario2 = new ScenarioHandler.Scenario(...);
const scenarioGroup={
  Card1: scenario1,
  Card2: scenario2,
}
export const myScenario = new ScenarioHandler.ScenarioHelper(scenarioGroup);
// ScenTemplate.jsx
import React, {useDispatch} from "react";
import ScenarioHandler from "scenario-handler";
import {myScenario} from "./myScenario.js";

export const ScenTemplate = props => {
  const dispatch = useDispatch();
  const {eventTriggers, runEvent} = ScenarioHandler.useScenario(myScenario, props.scenName, dispatch);

  return (
    <div>
      <h1>page 1</h1>
      <p>
        {
          eventTriggers.map((trigger,idx)=>{ //this.getEventTriggers returns the array of handledEventTrigger
            return (
              <Button
                onClick={()=>runEvent(idx)}
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
```
