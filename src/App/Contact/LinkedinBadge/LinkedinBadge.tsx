import { useEffect } from "react";

function LinkedinBadge() {
  var script = document.createElement('script');
  script.setAttribute('src','https://platform.linkedin.com/badges/js/profile.js');
  script.innerHTML = `
    async: true
    defer: true  
    type: "text/javascript"
  `;
  document.body.appendChild(script);

  return <>
    <div 
      className="badge-base LI-profile-badge" 
      data-locale="en_US" 
      data-size="medium" 
      data-theme="light" 
      data-type="HORIZONTAL" 
      data-vanity="elijah-nguyen-106768178" 
      data-version="v1"
    >
      <a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/elijah-nguyen-106768178?trk=profile-badge">Elijah Nguyen</a>
    </div>
  </>
}

export default LinkedinBadge;