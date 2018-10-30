import React from 'react'
import PropTypes from 'prop-types'
import cv from '../pdfs/rayfokcv.pdf'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-empire"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Raymond Fok</h1>
                <p>Hi. Researcher, coder, and foodie. Nice to meet you.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('research')}}>Research</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('blog')}}>Blog</a></li>
                <li><a href={cv} target='_blank'>CV</a></li>
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li> */}
            </ul>
        </nav>
        <ul className="icons">
            <li><a href="https://twitter.com/" className="icon fa-twitter" target="_blank" rel="noopener noreferrer"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/raymond.fok.75" className="icon fa-facebook" target="_blank" rel="noopener noreferrer"><span className="label">Facebook</span></a></li>
            <li><a href="https://github.com/rayfok" className="icon fa-github" target="_blank" rel="noopener noreferrer"><span className="label">GitHub</span></a></li>
            <li><a href="https://www.linkedin.com/in/raymond-fok/" className="icon fa-linkedin" target="_blank" rel="noopener noreferrer"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://scholar.google.com/citations?user=j238omAAAAAJ" className="icon fa-google" target="_blank" rel="noopener noreferrer"><span className="label">Google Scholar</span></a></li>
        </ul>
        <span id="email">rayfok@umich.edu</span>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
