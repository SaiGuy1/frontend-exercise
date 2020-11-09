import React, {Component} from 'react'
import './Header.css';


// developing project without using useState and React Hooks. 
// Can be easily adjusted if necessary

class Header extends Component {
    render() {
        return(
             <header id="blog-header">
                Talk Therapy Blog
             </header>
        )
    }
}

export default Header;