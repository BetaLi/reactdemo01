import React,{Component} from 'react';
import Remarkable from 'remarkable';

class MarkdownEdit extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: 'type some *text* here..'
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({value: e.target.value,});
    }
    getRawMarkup(e){
        const md = new Remarkable();
        return { __html: md.render(this.state.value) };
    }
    render(){
        return (
            <div>
                <h1>Input</h1>
                <input type="text" onChange={this.handleChange} value={this.state.value}/>
                <h1>Output</h1>
                <div
                    className="content"
                    dangerouslySetInnerHTML={this.getRawMarkup}
                />
            </div>
        )
    }
}

export default MarkdownEdit;