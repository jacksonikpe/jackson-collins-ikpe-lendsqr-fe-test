import { ReactComponent as Switchorganization } from "../../assets/img/switch-organization-logo.svg";
import { ReactComponent as Dashboard } from "../../assets/img/dashboard-icon.svg";
import { ReactComponent as Users } from "../../assets/img/user-img.svg";
import { ReactComponent as Guarantors } from "../../assets/img/garantors-icon.svg";
import { ReactComponent as Loans } from "../../assets/img/loans-img.svg";
import { ReactComponent as Savings } from "../../assets/img/savings-icon.svg";
import { ReactComponent as DecisionModel } from "../../assets/img/decision-model-icon.svg";
import { ReactComponent as LoanRequest } from "../../assets/img/loan-request-icon.svg";
import { ReactComponent as Whitelist } from "../../assets/img/whitelist-icon.svg";
import { ReactComponent as Karma } from "../../assets/img/karma-icon.svg";
import { ReactComponent as Organization } from "../../assets/img/organization-icon.svg";
import { ReactComponent as LoanProducts } from "../../assets/img/loanProducts-icon.svg";
import { ReactComponent as SavingsProducts } from "../../assets/img/savings-products-icon.svg";
import { ReactComponent as Feesandcharges } from "../../assets/img/feesandcharges.svg";
import { ReactComponent as Transactions } from "../../assets/img/transaction-icon.svg";
import { ReactComponent as Services } from "../../assets/img/services-icon.svg";
import { ReactComponent as ServicesAccount } from "../../assets/img/serviceAccount-img.svg";
import { ReactComponent as Settlements } from "../../assets/img/settlement-img.svg";
import { ReactComponent as Reports } from "../../assets/img/reports-img.svg";
import { ReactComponent as Preferences } from "../../assets/img/prefrences-icon.svg";
import { ReactComponent as FeesAndPricing } from "../../assets/img/feesandpricing-icon.svg";
import { ReactComponent as AuditLogs } from "../../assets/img/auditLogs-icons.svg";

import "./sidebar.style.scss";

const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <div className="menu">
        <ul>
          <li style={{ marginBottom: "3rem" }}>
            <button className="menuButton switch">
              <Switchorganization />
              <span className="menuText">Switch Organization</span>
            </button>
          </li>
          <li>
            <button className="menuButton">
              <Dashboard />
              <span className="menuText">Dashboard</span>
            </button>
          </li>
          <h6 className="menuHeaders">CUSTOMERS</h6>
          <li className="selected">
            <button className="menuButton">
              <Users />
              <span className="menuText">Users</span>
            </button>
          </li>
          <li>
            <button className="menuButton">
              <Guarantors />
              <span className="menuText">Guarantors</span>
            </button>
          </li>
          <li>
            <button className="menuButton">
              <Loans />
              <span className="menuText">Loans</span>
            </button>
          </li>
          <li>
            <button className="menuButton">
              <DecisionModel />
              <span className="menuText">Decision Models</span>
            </button>
          </li>
          <li>
            <button className="menuButton">
              <Savings />
              <span className="menuText">Savings</span>
            </button>
          </li>
          <li>
            <button className="menuButton">
              <LoanRequest />
              <span className="menuText">Loan Requests</span>
            </button>
          </li>
          <li>
            <button className="menuButton">
              <Whitelist />
              <span className="menuText">Whitelist</span>
            </button>
          </li>
          <li>
            <button className="menuButton">
              <Karma />
              <span className="menuText">Karma</span>
            </button>
          </li>
          <h6 className="menuHeaders">BUSINESSES</h6>
          <li>
            <button className="menuButton">
              <Organization />
              <span className="menuText">Organization</span>
            </button>
          </li>
          <li>
            <button className="menuButton">
              <LoanProducts />
              <span className="menuText">Loan Products</span>
            </button>
          </li>
          <li>
            <button className="menuButton">
              <SavingsProducts />
              <span className="menuText">Savings Products</span>
            </button>
          </li>
          <li>
            <button className="menuButton">
              <Feesandcharges />
              <span className="menuText">Fees and Charges</span>
            </button>
          </li>
          <li>
            <button className="menuButton">
              <Transactions />
              <span className="menuText">Transactions</span>
            </button>
          </li>
          <li>
            <button className="menuButton">
              <Services />
              <span className="menuText">Services</span>
            </button>
          </li>
          <li>
            <button className="menuButton">
              <ServicesAccount />
              <span className="menuText">Service Account</span>
            </button>
          </li>
          <li>
            <button className="menuButton">
              <Settlements />
              <span className="menuText">Settlements</span>
            </button>
          </li>
          <li>
            <button className="menuButton">
              <Reports />
              <span className="menuText">Reports</span>
            </button>
          </li>
          <h6 className="menuHeaders">SETTINGS</h6>
          <li>
            <button className="menuButton">
              <Preferences />
              <span className="menuText">Preferences</span>
            </button>
          </li>
          <li>
            <button className="menuButton">
              <FeesAndPricing />
              <span className="menuText">Fees and Pricing</span>
            </button>
          </li>
          <li>
            <button className="menuButton">
              <AuditLogs />
              <span className="menuText">Audit Logs</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
//sidebar component
