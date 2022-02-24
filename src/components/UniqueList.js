import React from "react";

class UniqueList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      pro: '',
    };
  }
  
  addItem = () => {
  this.setState({cart: [...this.state.cart, this.state.pro.trim()]})
  }

  removeItem = () => {
    this.setState({cart: this.state.cart.filter((x) => x !== this.state.pro.trim())})
  }
  
  acceptitem = (e) => {
    this.setState({pro: e.target.value })
  }
  
  clear = (e) => {
  this.setState({cart: []})
  }
  
  
  render() {
    return (
      <>
        <div>
          <input
            className="item-input"
            type="text"
            value={this.state.pro}
            onChange={this.acceptitem}
            onKeyDown={e => e.key === 'Enter' && this.acceptitem(e)}
          />
          <input
            className="add-button"
            type="button"
            value= "Add Item"
            onClick={this.addItem}
          />
          <input
            className="remove-button"
            type="button"
            value="Remove Item"
            onClick={this.removeItem}
          />
          <input
            className="clear-button"
            type="button"
            value="Clear Items"
            onClick={this.clear}
          />
        </div>
        <ul className="items">
          {this.state.cart.map(item => <li>{item}</li>)}
        </ul>
      </>
    );
  }
}

export default UniqueList;