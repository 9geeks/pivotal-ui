# Lists

## Installation & Usage

#### React
`npm install pui-react-lists --save`

#### CSS Only
`npm install pui-css-lists --save`

## Description

## Examples

```jsx
::title=Breadcrumb
<div>
    <BreadcrumbList>
      <ListItem><a href="/">Home</a></ListItem>
      <ListItem><a href="/react.html">React</a></ListItem>
      <ListItem className="current"><span>Lists</span></ListItem>
    </BreadcrumbList>
</div>
```

```jsx
::title=Draggable
<div>
    <DraggableList className="my-list-class" innerClassName="my-item-class">
      <DraggableListItem>
        Get me out of here!
      </DraggableListItem>
    
      <DraggableListItem>
        LOL
      </DraggableListItem>
    
      <DraggableListItem>
        Can't stop
      </DraggableListItem>
    
      <DraggableListItem>
       Get me out of here!
      </DraggableListItem>
    
      <DraggableListItem>
       LOL
      </DraggableListItem>
    
      <DraggableListItem>
       Can't stop
      </DraggableListItem>
    </DraggableList>
</div>
```

```html
::title=Breadcrumb CSS
::description=The `.list-breadcrumb` can be used to provide additional page navigation. Breadcrumbs use their own monospace font-family.
<ul class="list-breadcrumb">
  <li>
    <a href="http://google.com">Parent</a>
  </li>
  <li>
    <a href="http://google.com">Child</a>
  </li>
  <li class="current">
    <span>Current Page</span>
  </li>
</ul>
```

```jsx
::title=Inline
<div>
    <InlineList>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </InlineList>
</div>
```    

```jsx
::title=Ordered
<div>
    <OrderedList>
     <ListItem>Item 1</ListItem>
     <ListItem>Item 2</ListItem>
     <ListItem>Item 3</ListItem>
    </OrderedList>
</div>
```

```jsx
::title=Ordered Unstyled List
<OrderedList unstyled>
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
  <ListItem>Item 3</ListItem>
</OrderedList>
```

```jsx
::title=Unordered
<div>
    <UnorderedList>
      <ListItem>feep</ListItem>
      <ListItem>fop</ListItem>
      <ListItem>meep</ListItem>
    </UnorderedList>
</div>
```

## Props

Property | Required | Type | Default | Description
---------|----------|------|---------|------------
className | no | String  |       | Classname of the list
unstyled  | no | Boolean | false | Whether to style the list
divider   | no | Boolean | false | Whether to include a divider between items