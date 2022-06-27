import React from 'react'
export default function Signup(){
    return(
        <React.Fragment>
            <br />
	<br />
	<br />
	<div class="container" >
		<div class="row">
		<div class="col-md-3">
					
		</div> 
        <div class="col-md-6 main">
					
			<form action="/signup" method="post">
					
			<h1> Employee Record </h1>
            <br />
							
			<input class="box" type="text" name="name" id="name"
			placeholder="First Name" required /><br /><br />

            <input class="box" type="text" name="name" id="name"
			placeholder="Last Name" required /><br /><br />

            <input class="box" type="text" name="name" id="name"
			placeholder="Job occupation" required /><br /><br />
							
			<input class="box" type="email" name="email" id="email"
			placeholder="E-Mail " required /><br /><br />
							
			<input class="box" type="text" name="phone" id="phone"
			placeholder="Phone Number " required/><br /><br />
						<br />
                     
			<input class="col-sm-6"  type="submit" id="submitDetails"
			name="submitDetails" value="Submit" /><br />
   
			</form>
            </div>
				
				
		<div class="col-md-3">
		</div>
				
	</div>
	</div>
</React.Fragment>)
}