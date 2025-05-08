import React from 'react'

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <p>&copy; {new Date().getFullYear()} Gracias por visitarnos!</p>

      <div>
       <p>Contactanos!</p> 
            <div>
                <a href=""><img src="src/assets/img/iconos/icons8-whatsapp-48.png" alt="whatapp" /></a>

                <a href=""><img src="src/assets/img/iconos/instagram.png" alt="instagram" /></a>

                <a href=""><img src="src/assets/img/iconos/facebook.png" alt="facebook" /></a>

            </div>

          
      
      </div>
    </footer>
  )
}

export default Footer
