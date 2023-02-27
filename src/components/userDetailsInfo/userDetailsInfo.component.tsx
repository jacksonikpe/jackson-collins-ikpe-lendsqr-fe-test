import { useContext } from "react";
import usersContext from "../../context/usersContext";
import { ReactComponent as ProfileImg } from "../../assets/img/userDetailImg.svg";
import { ReactComponent as Star } from "../../assets/img/star-icon.svg";
import { ReactComponent as EmptyStar } from "../../assets/img/emptyStarIcon.svg";
import { ReactComponent as Divider } from "../../assets/img/dividerIcons.svg";
import "./userDetailsInfo.style.scss";

const UserDetails = () => {
  const { user } = useContext(usersContext);
  const {
    profile: { firstName, lastName, phoneNumber, bvn, gender, avatar },
    education: {
      level,
      employmentStatus,
      officeEmail,
      duration,
      sector,
      monthlyIncome,
      loanRepayment,
    },
    socials: { twitter, instagram, facebook },
    guarantor,
    id,
    accountBalance,
    accountNumber,
    email,
  } = user;
  return (
    <div className="userDetailsContainer">
      <div className="userDetailsHeader">
        <h2>User Details</h2>
        <span className="userButtonGroup">
          <button className="userButton blacklist">Blacklist User</button>
          <button className="userButton activate">Activate User</button>
        </span>
      </div>
      <div className="userDetailsInfoNavigation">
        <div className="details">
          <div className="profileName"></div>
          {avatar ? (
            <img src={avatar} alt="profile" />
          ) : (
            <div className="profileImg">
              <ProfileImg />
            </div>
          )}
          <div className="identification">
            <h3 className="name">{`${firstName} ${lastName}`}</h3>
            <p className="id">{id}</p>
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
            <p className="fig">{accountBalance}</p>
            <p className="bankdetails">{accountNumber}/providus Bank</p>
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
            <p className="info">{`${firstName} ${lastName}`}</p>
          </div>
          <div className="col">
            <p className="infoTitle">PHONE NUMBER</p>
            <p className="info">{phoneNumber}</p>
          </div>
          <div className="col">
            <p className="infoTitle">EMAIL ADDRESS</p>
            <p className="info" style={{ wordWrap: "break-word" }}>
              {email}
            </p>
          </div>
          <div className="col">
            <p className="infoTitle">BVN</p>
            <p className="info">{bvn}</p>
          </div>
          <div className="col">
            <p className="infoTitle">GENDER</p>
            <p className="info">{gender}</p>
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
            <p className="info">{level}</p>
          </div>
          <div className="col">
            <p className="infoTitle">EMPLOYMENT STATUS</p>
            <p className="info">{employmentStatus}</p>
          </div>
          <div className="col">
            <p className="infoTitle">SECTOR OF EMPLOYMENT</p>
            <p className="info">{sector}</p>
          </div>
          <div className="col">
            <p className="infoTitle">DURATION OF EMPLOYMENT</p>
            <p className="info">{duration}</p>
          </div>
          <div className="col">
            <p className="infoTitle">OFFICE EMAIL</p>
            <p className="info" style={{ wordWrap: "break-word" }}>
              {officeEmail}
            </p>
          </div>
          <div className="col">
            <p className="infoTitle">MONTHLY INCOME</p>
            <p className="info">
              {monthlyIncome[0]}-{monthlyIncome[1]}
            </p>
          </div>
          <div className="col">
            <p className="infoTitle">LOAN REPAYMENT</p>
            <p className="info">{loanRepayment}</p>
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
            <p className="info">{twitter}</p>
          </div>
          <div className="col">
            <p className="infoTitle">FACEBOOK</p>
            <p className="info">{facebook}</p>
          </div>
          <div className="col">
            <p className="infoTitle">INSTAGRAM</p>
            <p className="info">{instagram}</p>
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
            <p className="info">{`${guarantor.firstName} ${guarantor.lastName}`}</p>
          </div>
          <div className="col">
            <p className="infoTitle">PHONE NUMBER</p>
            <p className="info">{phoneNumber}</p>
          </div>
          <div className="col">
            <p className="infoTitle">ADDRESS</p>
            <p className="info">{guarantor.address}</p>
          </div>
          <div className="col">
            <p className="infoTitle">GENDER</p>
            <p className="info">{guarantor.gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
