import { ReactComponent as ProfileImg } from "../../assets/img/userDetailImg.svg";
import { ReactComponent as Star } from "../../assets/img/star-icon.svg";
import { ReactComponent as EmptyStar } from "../../assets/img/emptyStarIcon.svg";
import { ReactComponent as Divider } from "../../assets/img/dividerIcons.svg";
import "./userDetailsInfo.style.scss";

const UserDetails = () => {
  return (
    <div className="userDetailsContainer">
      <div className="userDetailsHeader">
        <h2>User Details</h2>
        <span style={{ display: "flex" }}>
          <button className="userButton blacklist">Blacklist User</button>
          <button className="userButton activate">Activate User</button>
        </span>
      </div>
      <div className="userDetailsInfoNavigation">
        <div className="details">
          <div className="profileImg">
            <ProfileImg />
          </div>
          <div className="identification">
            <h3 className="name">Grace Effiom</h3>
            <p className="id">LSQFf587g90</p>
          </div>
          <div className="divider">
            <Divider />
          </div>
          <div className="userTier">
            <p className="text">User's Tier</p>
            <div className="stars">
              <span>
                <Star />
              </span>
              <span>
                <EmptyStar />
              </span>
              <span>
                <EmptyStar />
              </span>
            </div>
          </div>
          <div className="divider">
            <Divider />
          </div>
          <div className="amount">
            <p className="fig">200,000.00</p>
            <p className="bankdetails">9912345678/providus Bank</p>
          </div>
        </div>
        <nav className="navigation">
          <ul>
            <li className="active">General Details</li>
            <li>Documents</li>
            <li>Bank Details</li>
            <li>Loans</li>
            <li>Savings</li>
            <li>App and System</li>
          </ul>
        </nav>
      </div>
      <div className="userDetailsBody">
        <h3 className="InfoHeader">Personal Information</h3>
        <div className="row">
          <div className="col">
            <p className="infoTitle">FULL NAME</p>
            <p className="info">Grace Effiom</p>
          </div>
          <div className="col">
            <p className="infoTitle">PHONE NUMBER</p>
            <p className="info">07060780922</p>
          </div>
          <div className="col">
            <p className="infoTitle">EMAIL ADDRESS</p>
            <p className="info">grace@gmail.com</p>
          </div>
          <div className="col">
            <p className="infoTitle">BVN</p>
            <p className="info">07060780922</p>
          </div>
          <div className="col">
            <p className="infoTitle">GENDER</p>
            <p className="info">Female</p>
          </div>
          <div className="col">
            <p className="infoTitle">MARITAL STATUS</p>
            <p className="info">Single</p>
          </div>
          <div className="col">
            <p className="infoTitle">CHILDREN</p>
            <p className="info">None</p>
          </div>
          <div className="col">
            <p className="infoTitle">TYPE OF RESIDENCE</p>
            <p className="info">Parent's Apartment</p>
          </div>
        </div>
        <hr
          style={{
            width: "100%",
            color: "#213F7D",
            margin: "1.5rem 0 3rem 0",
          }}
        />
        <h3 className="InfoHeader">Education and Employment</h3>
        <div className="row">
          <div className="col">
            <p className="infoTitle">LEVEL OF EDUCATION</p>
            <p className="info">B.Sc</p>
          </div>
          <div className="col">
            <p className="infoTitle">EMPLOYMENT STATUS</p>
            <p className="info">Employed</p>
          </div>
          <div className="col">
            <p className="infoTitle">SECTOR OF EMPLOYMENT</p>
            <p className="info">FinTech</p>
          </div>
          <div className="col">
            <p className="infoTitle">DURATION OF EMPLOYMENT</p>
            <p className="info">2 years</p>
          </div>
          <div className="col">
            <p className="infoTitle">OFFICE EMAIL</p>
            <p className="info">grace@lendsqr.com</p>
          </div>
          <div className="col">
            <p className="infoTitle">MONTHLY INCOME</p>
            <p className="info">200,000.00-400,000.00</p>
          </div>
          <div className="col">
            <p className="infoTitle">LOAN REPAYMENT</p>
            <p className="info">40,000</p>
          </div>
        </div>
        <hr
          style={{
            width: "100%",
            color: "#213F7D",
            margin: "1.5rem 0 3rem 0",
          }}
        />
        <h3 className="InfoHeader">Socials</h3>
        <div className="row">
          <div className="col">
            <p className="infoTitle">TWITTER</p>
            <p className="info">@grace_effiom</p>
          </div>
          <div className="col">
            <p className="infoTitle">FACEBOOK</p>
            <p className="info">Grace Effiom</p>
          </div>
          <div className="col">
            <p className="infoTitle">INSTAGRAM</p>
            <p className="info">@grace_effiom</p>
          </div>
        </div>
        <hr
          style={{
            width: "100%",
            color: "#213F7D",
            margin: "1.5rem 0 3rem 0",
          }}
        />
        <h3 className="InfoHeader">Guarantor</h3>
        <div className="row">
          <div className="col">
            <p className="infoTitle">FULL NAME</p>
            <p className="info">Debby Ogana</p>
          </div>
          <div className="col">
            <p className="infoTitle">PHONE NUMBER</p>
            <p className="info">07060780922</p>
          </div>
          <div className="col">
            <p className="infoTitle">EMAIL ADDRESS</p>
            <p className="info">debby@gmail.com</p>
          </div>
          <div className="col">
            <p className="infoTitle">RELATIONSHIP</p>
            <p className="info">Sister</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
