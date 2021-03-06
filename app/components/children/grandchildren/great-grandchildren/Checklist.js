import React, {Component} from "react";
import FlatButton from 'material-ui/FlatButton';

class Checklist extends Component {
	handleClick(event) {
    	// prevents default submission
  	  	event.preventDefault();
  	  	// clears input fields
  	  	var inputs = document.getElementsByTagName("input");
		for(var i = 0; i < inputs.length; i++) {
    		if(inputs[i].type == "checkbox") {
        		inputs[i].checked = false; 
    		}  
		}
	}
		
    render() {
		return (
			
            <div className="checklistDiv ">
                <h3 >Checklist (Optional)</h3>
                
                <p>Click to place an X if the category is ruled out.</p>
                <div >
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th id="left">Category 1</th> 
                                <th>Category 2</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> Red </td>
                                <td className="cell">
                                    <div className="pretty plain o-danger smooth a-jelly">
                                        <input type="checkbox" /> 
                                            <label><i className="g-mdi" data-icon="clear"></i> </label>
                                    </div>
                                </td> 
                                <td className="cell">
                                    <div className="pretty plain o-danger smooth a-jelly">
                                        <input type="checkbox" /> 
                                            <label><i className="g-mdi" data-icon="clear"></i> </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td> Blue </td>
                                <td className="cell">
                                    <div className="pretty plain o-danger smooth a-jelly">
                                        <input type="checkbox" /> 
                                        <label><i className="g-mdi" data-icon="clear"></i> </label>
                                    </div>
                                </td> 
                                <td className="cell">
                                    <div className="pretty plain o-danger smooth a-jelly">
                                        <input type="checkbox" /> 
                                        <label><i className="g-mdi" data-icon="clear"></i> </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td> Green </td>
                                <td className="cell">
                                    <div className="pretty plain o-danger smooth a-jelly">
                                        <input type="checkbox" /> 
                                        <label><i className="g-mdi" data-icon="clear"></i> </label>
                                    </div>
                                </td>
                                <td className="cell">
                                    <div className="pretty plain o-danger smooth a-jelly">
                                        <input type="checkbox" /> 
                                        <label><i className="g-mdi" data-icon="clear"></i> </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td> Satellite </td>
                                <td className="cell">
                                    <div className="pretty plain o-danger smooth a-jelly">
                                        <input type="checkbox" /> 
                                        <label><i className="g-mdi" data-icon="clear"></i> </label>
                                    </div>
                                </td> 
                                <td className="cell">
                                    <div className="pretty plain o-danger smooth a-jelly">
                                        <input type="checkbox" /> 
                                        <label><i className="g-mdi" data-icon="clear"></i> </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td> Sun </td>
                                <td className="cell">
                                    <div className="pretty plain o-danger smooth a-jelly">
                                        <input type="checkbox" /> 
                                        <label><i className="g-mdi" data-icon="clear"></i> </label>
                                    </div>
                                </td> 
                                <td className="cell">
                                    <div className="pretty plain o-danger smooth a-jelly">
                                        <input type="checkbox" /> 
                                        <label><i className="g-mdi" data-icon="clear"></i> </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td> Alien </td>
                                <td className="cell">
                                    <div className="pretty plain o-danger smooth a-jelly">
                                        <input type="checkbox" /> 
                                        <label><i className="g-mdi" data-icon="clear"></i> </label>
                                    </div>
                                </td> 
                                <td className="cell">
                                    <div className="pretty plain o-danger smooth a-jelly">
                                        <input type="checkbox" /> 
                                        <label><i className="g-mdi" data-icon="clear"></i> </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td> Big </td>
                                <td className="cell">
                                    <div className="pretty plain o-danger smooth a-jelly">
                                        <input type="checkbox" /> 
                                        <label><i className="g-mdi" data-icon="clear"></i> </label>
                                    </div>
                                </td> 
                                <td className="cell">
                                    <div className="pretty plain o-danger smooth a-jelly">
                                        <input type="checkbox" /> 
                                        <label><i className="g-mdi" data-icon="clear"></i> </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td> Small </td>
                                <td className="cell">
                                    <div className="pretty plain o-danger smooth a-jelly">
                                        <input type="checkbox" /> 
                                        <label><i className="g-mdi" data-icon="clear"></i> </label>
                                    </div>
                                </td> 
                                <td className="cell">
                                    <div className="pretty plain o-danger smooth a-jelly">
                                        <input type="checkbox" /> 
                                        <label><i className="g-mdi" data-icon="clear"></i> </label>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <FlatButton label="Reset Table" onClick={this.handleClick} />
                </div>
            </div>		
		);
	}
};

export default Checklist;

