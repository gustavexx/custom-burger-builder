import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showsideDrawer: false

    }
    sideDrawerClosedHandler = () => {
        this.setState({ showsideDrawer: false })

    }

    sideDrawerToggleHandler = () =>{
        this.setState((prevState,props)=>{
            return {
                showsideDrawer:!prevState.showsideDrawer
            }
        }); 
    
    }

    render() {
        return (
            <Aux>
                <Toolbar 
                    drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    closed={this.sideDrawerClosedHandler}
                    open={this.state.showsideDrawer}
                />
                <div>SideDrawer,BackDrop</div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }

};
export default Layout;