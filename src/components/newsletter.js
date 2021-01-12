

import React from 'react';
import { Button } from 'reactstrap';


function Newsletter(props) {

    return (
<div class="text-center newsLetter">

<h3>Join Our Newsletter</h3>
<p>For the top liked gallery submissions and more!</p>

<div className="d-flex justify-content-center">
  <input type="email" className="form-control w-50" placeholder="Enter email" />
  <button className="btn w-25 form-control">Join</button>
</div>
<small className="form-text text-muted ">We'll never share your email with anyone else.</small>
</div>
    );
}

export default Newsletter;
