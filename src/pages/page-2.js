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
      <input type="submit" value="Send Message" />
    </form>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
