# EventBus

## Install
```js
yarn add @moeui/event-bus 

// or 

npm i @moeui/event-bus
```

## Use

``` HTML
/* A组件*/
import {eventBus} from '@moeui/event-bus'

eventBus.on('name', handle)
```

``` HTML
/* B组件*/
import {eventBus} from '@moeui/event-bus'

eventBus.emit('name', ...args)
```