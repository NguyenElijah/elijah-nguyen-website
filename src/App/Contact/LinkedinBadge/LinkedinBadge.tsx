import { useEffect } from "react";

function LinkedinBadge() {
  const LinkedinStyleUrl = 'https://platform.linkedin.com/badges/js/profile.js';

  useEffect(() => {
    const script = document.createElement('script');

    script.src = LinkedinStyleUrl;
    script.async = true;
    script.defer = true;
    script.type = "text/javascript";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [LinkedinStyleUrl]);

  return <>
    <div 
      className="badge-base LI-profile-badge" 
      data-locale="en_US" 
      data-size="large" 
      data-theme="light" 
      data-type="HORIZONTAL"
      data-vanity="elijah-nguyen-106768178" 
      data-version="v1">
    </div>          
  </>
}

export default LinkedinBadge;