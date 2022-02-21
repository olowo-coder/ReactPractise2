import React from "react";

export default class OrderedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrow: true,
      words: [],
      text: "",
    };
  }
  
  direction = () => {
    console.log(this.state.arrow)
  this.setState({arrow: !this.state.arrow});
    
    if(this.state.arrow){
     this.state.words.sort().reverse();
    }
    else{
     this.state.words.sort();
    }
    
  }
  
  addWord = (word) => {
  
    if(this.state.arrow){
        console.log('reverse initial:');
        console.log(this.state.words)
     this.setState({words: [...this.state.words, word].sort().reverse()});
     console.log('reverse final:' + this.state.words);
     console.log(this.state.words);
     this.setState({text: ""});   


    }
    else{
        console.log('sort initial:');
        console.log(this.state.words)
    this.setState({words: [...this.state.words, word].sort()});   
    console.log('sort final:' + this.state.words);
     console.log(this.state.words)
     this.setState({text: ""});   

}
  }
  
  clear = () => {
  this.setState({words: []});
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
}
    
  render() {
    return (
      <>
        <input className="add-item" onChange={this.handleChange} value={this.state.text} onKeyDown={e => e.key === 'Enter' && this.addWord(e.target.value)} />
        
        <button onClick={this.direction} className="sort-direction">{this.state.arrow ? '⬆️': '⬇️'} </button>
        <button onClick={this.clear} className="clear-list">️🆑</button>
        <ul className="items-list">
            {this.state.arrow ? this.state.words.sort().reverse().map((val) => <li>{val}</li>) : this.state.words.sort().map((val) => <li>{val}</li>)}
        </ul>
      </>
    );
  }
}
