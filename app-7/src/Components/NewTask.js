import React, { Component } from 'react';

// class NewTask extends Component {
//   constructor(props) {
//     super(props);

//     // this.state = {
//     //   listArray: []
//     // };
//   }

//   handleUpdateList() {

//   }

//   render(props) {
//     return (
//       <div>
//         <input type="text" onChange={e => props.update(e)} />
//         <button>Add</button>
//       </div>
//     );
//   }
// }

const NewTask = props => {
  return <button onClick={() => props.update()}>Add</button>;
};

export default NewTask;
