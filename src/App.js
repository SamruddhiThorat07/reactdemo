import * as React from "react";

const JobPreviewItem = ({ icon, label, value }) => (
  <div className="job-preview-item">
    <div className="job-preview-label">
      <img src={icon} alt="" className="job-preview-icon" />
      <div className="job-preview-text">{label}</div>
    </div>
    <div className="job-preview-value">{value}</div>
  </div>
);

const SkillBadge = ({ icon, skill }) => (
  <div className="skill-badge">
    <img src={icon} alt="" className="skill-icon" />
    <div className="skill-name">{skill}</div>
  </div>
);

const InfoItem = ({ label, value }) => (
  <div className="info-item">
    <div className="info-label">{label}</div>
    <div className="info-value">{value}</div>
  </div>
);

function MyComponent() {
  const jobPreviewItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/763d2c9e1343b10b91f3515675d63b674f5db056e47965255bdd0d921f25136a?apiKey=818aac2e915345b89dcb7c80bb502cc5&", label: "Applicants", value: "400" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/799f788605a03e16cac90a139f7b6ee6592d965b1da9d4b33151641944d7a51b?apiKey=818aac2e915345b89dcb7c80bb502cc5&", label: "Matches", value: "100" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ffcf34c9784ce5638d907279f31f5164fb6e890233a4b9cbb71056df726450a8?apiKey=818aac2e915345b89dcb7c80bb502cc5&", label: "Messages", value: "147" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ac801def6fe573b78b950c1629c9a6e9bb65cb77c9eb8f3a639d120e9565c0a?apiKey=818aac2e915345b89dcb7c80bb502cc5&", label: "Views", value: "800" }
  ];

  const skillsRequired = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/485a922d2e7f8051ff1414b8c3d93960d3c768f0ac128a6e70a6090330544d2b?apiKey=818aac2e915345b89dcb7c80bb502cc5&", skill: "Figma" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3eec25456b5bbb4cbbb2583a05b060cf296b8aad0eb8adc9f423eefd3500f9d?apiKey=818aac2e915345b89dcb7c80bb502cc5&", skill: "Adobe Illustrator" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e87b0b9463d82b767224e66708fe5b357b2d33f1519f0856b438b60aad05b6a?apiKey=818aac2e915345b89dcb7c80bb502cc5&", skill: "Adobe XD" }
  ];

  const jobInfo = [
    { label: "Company size", value: "1k - 2k Employees" },
    { label: "Type", value: "Private" },
    { label: "Sector", value: "Information Technology, Infrastructure" },
    { label: "Funding", value: "Bootstrapped" },
    { label: "Founded In", value: "2019" },
    { label: "Founded By", value: (
      <>
        <a href="https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Scott+Farquhar&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgGn2U5_lv-iJKoEW9GGV3oQ_U1KzHM3grBvdDJw8AP9jrnXyCRK6qNSYCb3jHdJP2aGUh_HIEtaCjacARkKoOWECb-5Ob0Mv9e_MI4c_vMY8PVDZWA6-OO6yqvbV1TIRgm4P4FtNTbK6rHh3ojk0CXz_ZgaKdVf6VpRiXhZ7YUAy8LzI5HMyryDEBGhju5Ama_FvECG7_qGa4tSKw7XIbHa99s9btrbgRBy-6z85_2p6BPYPhA%3D%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAXoECDYQAw" target="_blank" rel="noopener noreferrer">Scott Farquhar</a>,{" "}
        <a href="https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Mike+Cannon-Brookes&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgJsvrQUWPOKZ8iETJQdvnbU2UFD7BVWUbHmvxqkn_X6fnbX-LLuIjmm9FYDOCdLoN8dDFvHE1HsZUhT6XIGTrbZRGGDIDstquY_yluK6YQX1NkHtmo0wsp8wVD7ouAbjfDvaQHjO4Iyd2AKnCQbPH8-Ah5otgNPwHcJ39HScqiWv6SVxYRXUiznwfdbns6uKnydurua8JyyTlcxFT3lPFMTAfAAzqy-x0DxflUh6aHFtCEgFOChGuNdxmDlND1wruAK7SbM%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAnoECDYQBA" target="_blank" rel="noopener noreferrer">Mike Cannon-Brookes</a>
      </>
    ) }
  ];

  return (
    <>
      <header className="header">
        <div className="logo">Logo</div>
        <nav className="main-nav">
          <div className="nav-item active">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1e3b408547ef03c865257d0980905eb901586dda7e61099422a6cead6267828?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="" className="nav-icon" />
            <div className="nav-text">Jobs</div>
          </div>
          <div className="nav-item">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9933f52e9328c177180664dbc20a4ec5a7f904a01053644fde2a74a4cd77084?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="" className="nav-icon" />
            <div className="nav-text">Messages</div>
          </div>
          <div className="nav-item">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a9eeb37e186417dd6d50eeba4e946a97452c66ea7afd0d2d92671c38c59314e?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="" className="nav-icon" />
            <div className="nav-text">Payments</div>
          </div>
          <div className="nav-item">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4078043aeeee3c4b236a823d1c802793459fb003d9aa04cc418eb2f1ea20f3e8?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="" className="nav-icon" />
            <div className="nav-text">Application</div>
          </div>
        </nav>
        <div className="user-menu">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/367ed6f107b5ed3ffba25a6d886f9b4e58fdaedb76dd42d2b9ebf0c4387e9561?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="User avatar" className="user-avatar" />
          <div className="notification-icons">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ba421d868a00d7b906f876e3cd74995b014f6e2d8c3d7f49d7c53e3cce6471d?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="Notification" className="notification-icon" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5243645185fdd5e3b78109c12728fdc6d6e038af1fe4c32c7e7d418913a707cf?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="Settings" className="settings-icon" />
          </div>
        </div>
      </header>

      <nav className="sub-nav">
        <div className="sub-nav-item active">Job preview</div>
        <div className="sub-nav-item">Applicants</div>
        <div className="sub-nav-item">Match</div>
        <div className="sub-nav-item">Messages</div>
      </nav>

      <main className="main-content">
        <section className="job-details">
          <div className="job-header">
            <h1 className="job-title">Senior Product Designer</h1>
            <div className="job-meta">
              <div className="job-posted">posted 2 days ago</div>
              <div className="job-status">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8bb268de65fc493223c279eb7d351af6a3d0099e41b00576edfdd89075010a8?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="" className="status-icon" />
                <div className="status-text">Open</div>
              </div>
            </div>
          </div>
          <div className="job-location-salary">
            <div className="job-location">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f47964ad9ba9e2c9f04293936dadcd2897a6df96032aedee0bd79761951b132?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="" className="location-icon" />
              <div className="location-text">Delaware, USA</div>
            </div>
            <div className="job-salary">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7886679e7eea391ef57ac84a5180ba7ae61193038d9f58f38e9f2724cc5c5f73?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="" className="salary-icon" />
              <div className="salary-text">$300k-$400k</div>
            </div>
          </div>
          <div className="job-requirements">
            <div className="skills-section">
              <h2 className="section-title">Skills Required</h2>
              {skillsRequired.map((skill, index) => (
                <SkillBadge key={index} icon={skill.icon} skill={skill.skill} />
              ))}
            </div>
            <div className="language-section">
              <h2 className="section-title">Preferred Language</h2>
              <div className="language">English</div>
            </div>
            <div className="job-type-section">
              <h2 className="section-title">Type</h2>
              <div className="job-type">Full time</div>
            </div>
            <div className="experience-section">
              <h2 className="section-title">Years of Experience</h2>
              <div className="experience">3+ Years of Experience</div>
            </div>
          </div>
          <div className="job-description">
            <h2 className="section-title">About the job</h2>
            <p className="description-text">
              1. Handle the UI/UX research design
              <br />
              2. Work on researching on latest web applications designs & <br />
              trends
              <br />
              3. Work on conceptualizing and visualizing
              <br />
              4. Work on creating graphics content and other graphic related<br />
               works
              <br />
              Benefits:
              <ul><li>Health insurance</li><li>Provident Fund</li></ul>
              
              Schedule:
              <ul><li>Day shift</li></ul>
              Supplemental pay types:
              <ul><li>Performance bonus</li></ul>
              
            </p>
          </div>
          <div className="company-info">
            <div className="company-header">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/263bd40f8317ce206707ca1acc3e49aedbfc147e224410ac613ba8f7f977824f?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="Atlassian logo" className="company-logo" />
              <div className="company-name">Atlassian</div>
            </div>
            <button className="follow-button">Follow</button>
          </div>
          {jobInfo.map((item, index) => (
            <InfoItem key={index} label={item.label} value={item.value} />
          ))}
          <div className="report-link">Report this listing</div>
        </section>
        <aside className="job-actions">
          <div className="action-buttons">
            <button className="delete-button">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/242c65b879c8f08ca8677c94d94f3e970fb7be32885b99bbf43175887074dba8?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="" className="button-icon" />
              Delete job
            </button>
            <button className="edit-button">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b2f80b165d32d8708ac5831230cc2902d2a600921b1c446850cac9c3c1adeba?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="" className="button-icon" />
              Edit job
            </button>
          </div>
          {jobPreviewItems.map((item, index) => (
            <JobPreviewItem key={index} icon={item.icon} label={item.label} value={item.value} />
          ))}
          <div className="testimonial">
            <p className="quote">"A quote from a Atlassian."</p>
            <div className="author">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f5d68abbe5bbad2dd8b54803242b45b16d36a625d990b7ce820d3b2939e2726?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="Testimonial author" className="author-image" />
              <div className="author-info">
                <div className="author-name">Name</div>
                <div className="author-description">Description</div>
              </div>
            </div>
          </div>
        </aside>
      </main>

      <style jsx>{`
        .header {
          box-shadow: 0 4px 4px 0 rgba(217, 217, 217, 0.1);
          background-color: #fff;
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          padding: 26px 40px;
        }
        @media (max-width: 991px) {
          .header {
            padding: 20px;
          }
        }
        .logo {
          background-color: #e7e7e7;
          color: #dc4a2d;
          padding: 9px 28px;
          font: 700 20px Poppins, sans-serif;
        }
        @media (max-width: 991px) {
          .logo {
            padding: 9px 20px;
          }
        }
        .main-nav {
          display: flex;
          gap: 19px;
          font-size: 20px;
          font-weight: 400;
        }
        @media (max-width: 991px) {
          .main-nav {
            flex-wrap: wrap;
          }
        }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #b0b0b0;
        }
        .nav-item.active {
          border-radius: 49px;
          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
          border: 2px solid rgba(252, 180, 165, 1);
          background-color: #dc4a2d;
          color: #fff;
          padding: 14px 15px;
        }
        .nav-icon {
          width: 24px;
          height: 24px;
        }
        .nav-text {
          font-family: Poppins, sans-serif;
        }
        .user-menu {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .user-avatar {
          width: 32px;
          height: 32px;
        }
        .notification-icons {
          display: flex;
          gap: 6px;
        }
        .notification-icon,
        .settings-icon {
          width: 20px;
          height: 20px;
        }
        .sub-nav {
          border: 1px solid #e7e7e7;
          background-color: #fff;
          display: flex;
          padding: 21px 80px 2px;
          font-size: 20px;
          color: #888;
        }
        @media (max-width: 991px) {
          .sub-nav {
            padding: 21px 20px 2px;
          }
        }
        .sub-nav-item {
          margin-right: 20px;
          font-family: Poppins, sans-serif;
        }
        .sub-nav-item.active {
          color: #dc4a2d;
          position: relative;
        }
        .sub-nav-item.active::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 0;
          width: 65px;
          height: 2px;
          background-color: #dc4a2d;
        }
        .main-content {
          display: flex;
          padding: 0 80px;
        }
        @media (max-width: 991px) {
          .main-content {
            flex-direction: column;
            padding: 0 20px;
          }
        }
        .job-details {
          flex: 1;
          padding-right: 20px;
        }
        .job-header {
          margin-bottom: 24px;
        }
        .job-title {
          color: #3d3d3d;
          font: 700 35px Poppins, sans-serif;
          margin-bottom: 10px;
        }
        .job-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
        }
        .job-posted {
          color: #888;
        }
        .job-status {
          display: flex;
          align-items: center;
          gap: 4px;
          border-radius: 9999px;
          border: 1px solid #abef6;
          background-color: #ecfdf3;
          color: #067647;
          font-weight: 500;
          padding: 2px 8px;
        }
        .status-icon {
          width: 8px;
          height: 8px;
        }
        .job-location-salary {
          display: flex;
          justify-content: space-between;
          margin-bottom: 56px;
          font-size: 20px;
          color: #5d5d5d;
        }
        .job-location,
        .job-salary {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .location-icon,
        .salary-icon {
          width: 24px;
          height: 24px;
        }
        .job-requirements {
          display: flex;
          justify-content: space-between;
          margin-bottom: 57px;
        }
        .section-title {
          color: #6e6d6d;
          font: 400 14px Poppins, sans-serif;
          margin-bottom: 8px;
        }
        .skill-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          border-radius: 6px;
          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.08) inset;
          border: 1px solid #d0d5dd;
          background-color: #fff;
          padding: 4px 6px;
          margin-bottom: 8px;
        }
        .skill-icon {
          width: 16px;
          height: 16px;
        }
        .skill-name {
          font: 400 12px Poppins, sans-serif;
          color: #344054;
        }
        .language,
        .job-type,
        .experience {
          color: #3d3d3d;
          font: 400 16px Poppins, sans-serif;
        }
        .job-description {
          margin-bottom: 40px;
        }
        .description-text {
          color: #3d3d3d;
          font: 400 16px/28px Poppins, -apple-system, Roboto, Helvetica, sans-serif;
        }
        .company-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 26px;
        }
        .company-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .company-logo {
          width: 40px;
          height: 40px;
        }
        .company-name {
          font: 400 20px Poppins, sans-serif;
          color: #4f4f4f;
        }
        .follow-button {
          border-radius: 8px;
          background-color: #e0ebf9;
          color: #003788;
          font: 700 11px/150% Poppins, -apple-system, Roboto, Helvetica, sans-serif;
          padding: 5px 15px;
          border: none;
          cursor: pointer;
        }
        .info-item {
          display: flex;
          flex-direction: column;
          margin-bottom: 24px;
        }
        .info-label {
          color: #6e6d6d;
          font: 400 14px Poppins, sans-serif;
        }
        .info-value {
          color: #3d3d3d;
          font: 400 16px Poppins, sans-serif;
          margin-top: 8px;
        }
        .report-link {
          color: #b0b0b0;
          text-decoration: underline;
          font: 400 12px Poppins, sans-serif;
          margin-top: 27px;
        }
        .job-actions {
          width: 300px;
          padding-left: 24px;
        }
        @media (max-width: 991px) {
          .job-actions {
            width: 100%;
            padding-left: 0;
            margin-top: 40px;
          }
        }
        .action-buttons {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
        }
        .delete-button,
        .edit-button {
          display: flex;
          align-items: center;
          gap: 10px;
          border-radius: 8px;
          font: 400 16px Poppins, sans-serif;
          padding: 12px 24px;
          border: none;
          cursor: pointer;
        }
        .delete-button {
          border: 1px solid #dc4a2d;
          background-color: #fef4f2;
          color: #dc4a2d;
        }
        .edit-button {
          border: 2px solid #fed3ca;
          background-color: #dc4a2d;
          color: #fff;
        }
        .button-icon {
          width: 20px;
          height: 20px;
        }
        .job-preview-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-bottom: 1px solid #e7e7e7;
        }
        .job-preview-label {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .job-preview-icon {
          width: 20px;
          height: 20px;
        }
        .job-preview-text {
          font: 400 16px Poppins, sans-serif;
          color: #4f4f4f;
        }
        .job-preview-value {
          font: 400 20px Poppins, sans-serif;
          color: #3d3d3d;
        }
        .testimonial {
          margin-top: 40px;
          padding: 32px;
          border-radius: 12px;
          box-shadow: -4px 8px 20px 0 rgba(0, 0, 0, 0.1);
          border: 1px solid #f7f7f7;
          background-color: #fff;
        }
        .quote {
          color: #000;
          font: 500 20px/150% Poppins, sans-serif;
          margin-bottom: 48px;
        }
        .author {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .author-image {
          width: 45px;
          height: 45px;
          border-radius: 50%;
        }
        .author-info {
          display: flex;
          flex-direction: column;
        }
        .author-name {
          color: #000;
          font: 500 16px Poppins, sans-serif;
        }
        .author-description {
          color: #828282;
          font: 500 16px Poppins, sans-serif;
        }
      `}</style>
    </>
  );
}

export default MyComponent;