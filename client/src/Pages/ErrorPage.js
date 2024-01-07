import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components"

function ErrorPage() {
  return (
<Wrapper>
<section className="page_404">
	<div className="error_container ">
		<div className="wrapper">
		<div className="four_zero_four_bg">
			<h1 className="text-center">404</h1>
		</div>
		<div className="contant_box_404">
		<h3 className="h2 text-center">
		Look like you're lost
		</h3>
		<p className='text-center'>the page you are looking for not avaible!</p>
		<NavLink to="/" className="link_404 text-center">
        Go to Home
        </NavLink>
	</div>
		</div>
	</div>
</section>
</Wrapper>
  )
}

export default ErrorPage;
const Wrapper = styled.footer`
width: 100%;
min-height: 100%;
display: flex;
justify-content: center;
align-items: center;

.page_404 {
  background: transparent;
  .error_container{
    width: 100%;
    .wrapper{
      display:flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .text-center{
      text-align: center;
    }
    .four_zero_four_bg h1 {
      font-size: 80px;
    }
    
    .four_zero_four_bg h3 {
      font-size: 80px;
    }
    
    .link_404 {
      color: #fff;
      padding: 10px 20px;
      background: #39ac31;
      margin: 10px 0;
      width: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
    }
    
    .link_404:hover{
        color: #fff;
        text-decoration: underline;
    }
    .contant_box_404 {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    
  }
}


`