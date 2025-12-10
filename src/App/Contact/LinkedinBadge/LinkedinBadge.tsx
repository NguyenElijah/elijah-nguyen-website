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

  const LinkedinBadgeUrl = 'https://badges.linkedin.com/profile?locale=en_US&badgetype=HORIZONTAL&badgetheme=light&uid=48445&version=v1&maxsize=large&trk=profile-badge&vanityname=elijah-nguyen-106768178';

  useEffect(() => {
    const script = document.createElement('script');

    script.src = LinkedinBadgeUrl;
    script.type = "text/html";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [LinkedinBadgeUrl]);

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