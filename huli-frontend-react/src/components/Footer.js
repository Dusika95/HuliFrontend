const date= new Date().getFullYear();

export default function Footer() {

    return (
          <div id="footer">
            <p>©Huli Team {date}</p>
          </div>
    )
  }