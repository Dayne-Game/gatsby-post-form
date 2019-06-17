import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>

    <form method="post" action="POST" data-netlify="true" name="contact">
      <input type="hidden" name="form-name" value="contact" />
      <input type="text" name="name" id="name" required />
      <input type="text" name="email" id="email" required />
      <textarea name="message" id="message" rows="4" required />
      <input className="button" type="submit" value="Send Message" />
    </form>
    <div className="container">

    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

var submit = document.querySelector('.button');

submit.addEventListener('click', function () {
  var url = `https://api.netlify.com/api/v1/sites/53584846-197f-4690-8d85-500c0416a0f2/submissions?access_token=5053a6449d46f1e3dff720ce0ae3d79884118d8886bd3589bf518537f12f5017`
  showData(url);
})

function showData(url) {
  fetch(url)
    .then(response => response.json())
    .then(date => {
      console.log(data);
      let container = document.querySelector(".container");
      let result = data.data
        .map(x => {
          return `
            <h1>${x.Name}</h1>
            <h3>${x.Email}</h3>
            <br/>
            <p>${x.Message}</p>
          `
        }).join("");
      container.innerHTML = result;
    });
}


export default SecondPage
