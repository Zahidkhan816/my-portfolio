import React from 'react'

const Footer = () => {
  return (
   <div>
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="copyright-box">
            {/* <p className="copyright">© Copyright <strong>DevFolio</strong>. All Rights Reserved</p> */}
            <div className="credits">
              {/*
        All the links in the footer should remain intact.
        You can delete the links only if you purchased the pro version.
        Licensing information: https://bootstrapmade.com/license/
        Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=DevFolio
      */}
              Designed by <a href="https://bootstrapmade.com/">Alphanite Softs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>{/* End  Footer */}
</div>

  )
}

export default Footer