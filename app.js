// TODO
// // create App compnent
// var App = () => (
//     <div>
//     </div>
// );

// var Milk = () => {
//     <li>Milk</li>
// }

// var Eggs = () => {
//     <li>Eggs</li>
    
// }
// //1. Create a component
// //2. render it to the screen 
// var GroceryList = () => (
//     <ul id="GroceryList">

        
//     </ul>
// );
// ReactDOM.render(<GroceryList />, document.getElementById("app"));
// render app component to app div in .html
// ReactDOM.render(componentInstance, DOMElement);


// ReactDOM.render(<Milk />, document.getElementById("GroceryList"));
// // class  extends Component { … }


// var App = function App() {
//     return React.createElement("ul", {id: 'groceryList'}, "Grocery List");
//   };


// var reactElementUl = React.createElement(
//     'ul', {
//         id: 'GroceryList'
//     },
//         React.createElement('li', {id: 'li1'},'tacos'),
//         React.createElement('li', {id: 'li2'},'burritos')
// );

// var ToDoList = (props) => (
//     var onListItemClick = (event) => {
//         console.log('I got clicked');
//     };

//     return (
//     <ul>
//         <li onClick={onListItemClick}>{props.todos[0]}</li>
//         <li>{props.todos[1]}</li>
//         <li>{props.todos[2]}</li>
//     </ul>
//     );
// };

// var App = () => (
// <div>
//     <h2>My Todo List</h2>
//     <ToDoList todos={todoItems}/> // Here we are creating an instance of the `TodoList` component
// </div>
// );
// var todoItems = ['Learn React', 'Crush Recast.ly', 'Maybe sleep'];

// var TodoList = (props) => {

// // This function will be called when the first `<li>` below is clicked on
// // Notice that event handling functions receive an `event` object
// // We want to define it where it has access to `props`

//     var onListItemClick = (event) => {
//         console.log('I got clicked');
//     };

//     // Because we used curly braces with this arrow function
//     // we have to write an explicit `return` statement
//     return (
//         <ul>
//         <li onClick={onListItemClick}>{props.todos[0]}</li>
//         <li>{props.todos[1]}</li>
//         <li>{props.todos[2]}</li>
//         </ul>
//     );
// }

class TodoListItem extends React.Component {

    // A `constructor` method is expected on all ES6 classes
    // When React instantiates the component,
    // it will pass `props` to the constructor
    constructor(props) {
      // Equivalent to ES5's React.Component.call(this, props)
      super(props);
      this.state = {
        done: false,
        bolded: false
      };
    }

    onListItemClick() {
        this.setState({
          done: !this.state.done
        });
    }
    onMouseOver() {
        this.setState({
            bolded: !this.state.bolded
        });
    }
  
    // Every class component must have a `render` method
    // Stateless functional components are pretty much just this method
    render() {

        var style = {
            textDecoration: this.state.done ? 'line-through' : 'none',
            fontWeight: this.state.bolded ? 'bold' : 'none'
        };
  
      // `props` is no longer passed as an argument,
      // but instead accessed with `this.props`
      return (
        <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
      );
  
    }
  
  }
var toDoListArr = ['Learn React', 'Crush Recast.ly', 'Maybe sleep', 'sleep all sunday', 'eat pizza']

var TodoList = (props) => (
    <ul>
        {props.todos.map(todo =>
        <TodoListItem todo={todo} />
        )}
    </ul>
);

var App = () => (
<div>
    <h2>My Todo List</h2>
    <TodoList todos={toDoListArr}/> // Here we are creating an instance of the `TodoList` component
</div>
);


ReactDOM.render(<App />, document.getElementById('myGroceryList'));
