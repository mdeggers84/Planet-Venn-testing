import React from 'react';
import { Row, Col } from 'react-grid-system';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import UserIcon from 'material-ui/svg-icons/action/account-circle';
import {cyan500} from 'material-ui/styles/colors';
import { Link } from "react-router";

import Auth from '../utils/Auth';
import GameSpace from './children/GameSpace';
import Footer from './children/Footer';
import Score from './children/Score';

class DashboardPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        secretData: '', // we may need to use update to avoid overwriting secretData
        hideSourceOnDrag: true
    };
    this.handleHideSourceClick = this.handleHideSourceClick.bind(this);
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message
        });
      }
    });
    xhr.send();
  }

  handleHideSourceClick() {
    this.setState({
      hideSourceOnDrag: !this.state.hideSourceOnDrag
    });
  }

  render() {
    const { hideSourceOnDrag } = this.state;
    return (
      <div>
    
        <nav> 
            <Row>
                <Col sm={5}>
                    <Score />
                </Col>
            
                <Col sm={2}>
                    <Link to="/"><h1 id="logo">Planet Venn</h1></Link>
                </Col>
                
                <Col sm={3} />

                <Col sm={2}>
                    <IconMenu 
                    iconButtonElement={<IconButton><UserIcon color={cyan500} /></IconButton>}
                    anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                    targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                    >
                        <MenuItem primaryText="Scores" />
                        <Link to="/logout"><MenuItem primaryText="Sign Out" /></Link>
                    </IconMenu>
                </Col>
            </Row>
        </nav>

        <GameSpace hideSourceOnDrag={hideSourceOnDrag} />
        
        <Footer />

      </div>
    );
  }
}

export default DashboardPage;

