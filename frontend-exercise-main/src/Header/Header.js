import React, {Component} from 'react'
import './Header.css';


// developing project without using useState and React Hooks. 
// Can be easily adjusted if necessary

class Header extends Component {
    render() {
        return(
            <div class="blog-header">
                <h2 class="blog-title">Talk Therapy Blog</h2>
            </div>
        )
    }
}

export default Header;