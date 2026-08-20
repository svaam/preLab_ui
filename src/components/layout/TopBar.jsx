import { site } from "../../lib/catalog";
import { Icon } from "../../lib/icons";

export function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__contact">
          <a href={`tel:${site.phone.replace(/\s/g, "")}`}>
            <Icon name="phone" size={14} label="Phone" />
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`}>
            <Icon name="mail" size={14} label="Email" />
            {site.email}
          </a>
        </div>
        <span className="topbar__note">B2B supply for labs, institutes, hospitals &amp; colleges</span>
      </div>
    </div>
  );
}