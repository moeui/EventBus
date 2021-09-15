# EventBus

## Install
```js
yarn add @moeui/EventBus 

// or 

npm i @moeui/EventBus
```

## Use

``` HTML
/* A组件*/
import {eventBus} from '@moeui/EventBus'

eventBus.on('name', handle)
```

``` HTML
/* B组件*/
import {eventBus} from '@moeui/EventBus'

eventBus.emit('name', ...args)
```