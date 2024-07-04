import * as React from "react";

const JobDetail = ({ title, postedDate, isOpen, location, salary, skills, language, jobType, experience, description, companyName, companySize, companyType, companySector, companyFunding, companyFoundedYear, companyFounders }) => (
  <div className="job-detail">
    <div className="job-header">
      <h1 className="job-title">{title}</h1>
      <div className="job-meta">
        <span className="posted-date">{postedDate}</span>
        {isOpen && (
          <span className="job-status">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb6a9bc64d9cb149150c637fa1952b4d475bd7d78ee72634c36072d6439a3283?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="" className="status-icon" />
            <span className="status-text">Open</span>
          </span>
        )}
      </div>
    </div>
    <div className="job-location-salary">
      <div className="location">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/54e26e79c78dfbc762855d407891062620011515c7c65d190a22ee44ee75d00b?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="" className="location-icon" />
        <span className="location-text">{location}</span>
      </div>
      <div className="salary">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ba6f31a61e4a30256aba7b235a0e0e191baa497e0a1b88898c9949529016dba?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="" className="salary-icon" />
        <span className="salary-text">{salary}</span>
      </div>
    </div>
    <div className="job-details-grid">
      <div className="skills-section">
        <h2 className="section-title">Skills Required</h2>
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.icon} alt="" className="skill-icon" />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
      <div className="language-section">
        <h2 className="section-title">Preferred Language</h2>
        <p className="z">{language}</p>
      </div>
      <div className="job-type-section">
        <h2 className="section-title">Type</h2>
        <p className="">{jobType}</p>
      </div>
      <div className="experience-section">
        <h2 className="section-title">Years of Experience</h2>
        <p className="experience-z">{experience}</p>
      </div>
    </div>
    <section className="job-description">
      <h2 className="section-title">About the job</h2>
      <p className="description-text">{description}</p>
    </section>
    <div className="company-info">
      <div className="company-header">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/03210e4a2fb2102c3114e74f8d8e4e6b44ff185098dfc32ed83a5e34ddf82478?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt={companyName} className="company-logo" />
        <h2 className="company-name">{companyName}</h2>
      </div>
      <button className="follow-button">Follow</button>
    </div>
    <div className="company-details">
      <div className="detail-item">
        <h3 className="detail-title">Company size</h3>
        <p className="detail-text">{companySize}</p>
      </div>
      <div className="detail-item">
        <h3 className="detail-title">Type</h3>
        <p className="detail-text">{companyType}</p>
      </div>
    </div>
    <div className="company-details">
      <div className="detail-item">
        <h3 className="detail-title">Sector</h3>
        <p className="detail-text">{companySector}</p>
      </div>
      <div className="detail-item">
        <h3 className="detail-title">Funding</h3>
        <p className="detail-text">{companyFunding}</p>
      </div>
    </div>
    <div className="company-details">
      <div className="detail-item">
        <h3 className="detail-title">Founded In</h3>
        <p className="detail-text">{companyFoundedYear}</p>
      </div>
      <div className="detail-item">
        <h3 className="detail-title">Founded By</h3>
        <p className="detail-text">
          {companyFounders.map((founder, index) => (
            <React.Fragment key={index}>
              {index > 0 && ", "}
              <a href={founder.link} target="_blank" rel="noopener noreferrer">{founder.name}</a>
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
    <p className="report-link">Report this listing</p>
  </div>
);

const JobActions = ({ applicants, matches, messages, views }) => (
  <div className="job-actions">
    <div className="action-buttons">
      <button className="delete-button">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a20977487264abeb1fe5ce07a375fa98552f74f9ca8641187ba538fe4fd41b5?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="" className="button-icon" />
        Delete job
      </button>
      <button className="edit-button">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d53752965dab031ea31f1ff4280413dfdabba19e15774278a85b22cf571e7db?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="" className="button-icon" />
        Edit job
      </button>
    </div>
    <div className="job-stats">
      <div className="stat-item">
        <div className="stat-label">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/694c9e5de397271baffc36260d8f099da28cdb6d30bbe9c5fd6314e37c7191d0?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="" className="stat-icon" />
          <span>Applicants</span>
        </div>
        <span className="stat-value">{applicants}</span>
      </div>
      <div className="stat-item">
        <div className="stat-label">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/57215f69027baeb036b9bb3b1235c74449b35cc7b53004b4b0421a1520b4682b?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="" className="stat-icon" />
          <span>Matches</span>
        </div>
        <span className="stat-value">{matches}</span>
      </div>
      <div className="stat-item">
        <div className="stat-label">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef6a45a2f56b05376a15bf58888d60ffca6e1af01593f36c7ec87c862b644208?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="" className="stat-icon" />
          <span>Messages</span>
        </div>
        <span className="stat-value">{messages}</span>
      </div>
      <div className="stat-item">
        <div className="stat-label">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/88e77a815d442295466e04d70159d3fd8b9de94ee9930c2fe01ff5c3adc3e4c9?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="" className="stat-icon" />
          <span>Views</span>
        </div>
        <span className="stat-value">{views}</span>
      </div>
    </div>
    <blockquote className="company-quote">"A quote from a Atlassian."</blockquote>
    <div className="testimonial">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/22a691244e92eff32e2137846129301df2b92b60c8f235bcf5972fa681370666?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="" className="testimonial-image" />
      <div className="testimonial-content">
        <h3 className="testimonial-name">Name</h3>
        <p className="testimonial-description">Description</p>
      </div>
    </div>
  </div>
);

const Header = () => (
  <header className="main-header">
    <div className="logo">Logo</div>
    <nav className="main-nav">
      <div className="nav-item active">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1e3b408547ef03c865257d0980905eb901586dda7e61099422a6cead6267828?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="" className="nav-icon" />
        <span className="nav-text">Jobs</span>
      </div>
      <div className="nav-item">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9933f52e9328c177180664dbc20a4ec5a7f904a01053644fde2a74a4cd77084?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="" className="nav-icon" />
        <span className="nav-text">Messages</span>
      </div>
      <div className="nav-item">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a9eeb37e186417dd6d50eeba4e946a97452c66ea7afd0d2d92671c38c59314e?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="" className="nav-icon" />
        <span className="nav-text">Payments</span>
      </div>
      <div className="nav-item">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4078043aeeee3c4b236a823d1c802793459fb003d9aa04cc418eb2f1ea20f3e8?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="" className="nav-icon" />
        <span className="nav-text">Application</span>
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
);

const JobTabs = () => (
  <nav className="job-tabs">
    <a href="#preview" className="tab-item active">Job preview</a>
    <a href="#applicants" className="tab-item">Applicants</a>
    <a href="#match" className="tab-item">Match</a>
    <a href="#messages" className="tab-item">Messages</a>
  </nav>
);

function MyComponent() {
  const jobData = {
    title: "Senior Product Designer",
    postedDate: "posted 2 days ago",
    isOpen: true,
    location: "Delaware, USA",
    salary: "$300k-$400k",
    skills: [
      { name: "Figma", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d739b3eaab11d0222d1f91f9f3259f66d8a5c290314c3c82c265c3eb6a11ee02?apiKey=818aac2e915345b89dcb7c80bb502cc5&" },
      { name: "Adobe Illustrator", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6256d422b46f75a054ed508ebd06b94deb7be12a6aaa573aac67e97c81e149cc?apiKey=818aac2e915345b89dcb7c80bb502cc5&" },
      { name: "Adobe XD", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb1dba8347bf66ab9edcf57127bf06b9cf617f4e5a83d4db2a3fca07e7958d55?apiKey=818aac2e915345b89dcb7c80bb502cc5&" }
    ],
    language: "English",
    jobType: "Full time",
    experience: "3+ Years of Experience",
    description: `1. Handle the UI/UX research design
2. Work on researching on latest web applications designs & trends
3. Work on conceptualizing and visualizing
4. Work on creating graphics content and other graphic related works

Benefits:
Health insurance
Provident Fund

Schedule:
Day shift

Supplemental pay types:
Performance bonus
Yearly bonus

Work Location: In person`,
    companyName: "Atlassian",
    companySize: "1k - 2k Employees",
    companyType: "Private",
    companySector: "Information Technology, Infrastructure",
    companyFunding: "Bootstrapped",
    companyFoundedYear: "2019",
    companyFounders: [
      { name: "Scott Farquhar", link: "https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Scott+Farquhar&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgGn2U5_lv-iJKoEW9GGV3oQ_U1KzHM3grBvdDJw8AP9jrnXyCRK6qNSYCb3jHdJP2aGUh_HIEtaCjacARkKoOWECb-5Ob0Mv9e_MI4c_vMY8PVDZWA6-OO6yqvbV1TIRgm4P4FtNTbK6rHh3ojk0CXz_ZgaKdVf6VpRiXhZ7YUAy8LzI5HMyryDEBGhju5Ama_FvECG7_qGa4tSKw7XIbHa99s9btrbgRBy-6z85_2p6BPYPhA%3D%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAXoECDYQAw" },
      { name: "Mike Cannon-Brookes", link: "https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Mike+Cannon-Brookes&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgJsvrQUWPOKZ8iETJQdvnbU2UFD7BVWUbHmvxqkn_X6fnbX-LLuIjmm9FYDOCdLoN8dDFvHE1HsZUhT6XIGTrbZRGGDIDstquY_yluK6YQX1NkHtmo0wsp8wVD7ouAbjfDvaQHjO4Iyd2AKnCQbPH8-Ah5otgNPwHcJ39HScqiWv6SVxYRXUiznwfdbns6uKnydurua8JyyTlcxFT3lPFMTAfAAzqy-x0DxflUh6aHFtCEgFOChGuNdxmDlND1wruAK7SbM%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAnoECDYQBA" }
    ]
  };

  const jobStats = {
    applicants: 400,
    matches: 100,
    messages: 147,
    views: 800
  };

  return (
    <>
      <Header />
      <main className="content-wrapper">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fce3cea4a38cd1826540822981866b21cbe75485b9c1332f8cf92660554dd321?apiKey=818aac2e915345b89dcb7c80bb502cc5&" alt="" className="background-image" />
        <div className="content-container">
          <JobTabs />
          <div className="job-content">
            <JobDetail {...jobData} />
            <JobActions {...jobStats} />
          </div>
        </div>
      </main>
      <style jsx>{`
        .main-header {
          background-color: #fff;
          box-shadow: 0 4px 4px 0 rgba(217, 217, 217, 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 21px 32px;
          z-index: 10;
        }
        .logo {
          background-color: #e7e7e7;
          color: #dc4a2d;
          font-weight: 700;
          font-size: 20px;
          padding: 9px 26px;
        }
        .main-nav {
          display: flex;
          gap: 19px;
          font-size: 20px;
        }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #b0b0b0;
        }
        .nav-item.active {
          background-color: #dc4a2d;
          border: 2px solid #fcb4a5;
          border-radius: 49px;
          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
          color: #fff;
          padding: 14px 15px;
        }
        .nav-icon {
          width: 24px;
          height: 24px;
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
        .content-wrapper {
          position: relative;
          min-height: 1291px;
          margin-top: -7px;
          padding-top: 7px;
        }
        .background-image {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
        .content-container {
          position: relative;
          background-color: #fff;
          border: 1px solid #e7e7e7;
          display: flex;
          flex-direction: column;
          padding: 21px 80px 2px;
        }
        .job-tabs {
          display: flex;
          gap: 20px;
          margin-left: 20px;
          font-size: 20px;
          color: #888;
        }
        .tab-item {
          text-decoration: none;
          color: inherit;
        }
        .tab-item.active {
          color: #dc4a2d;
        }
        .job-content {
          display: flex;
          gap: 20px;
          justify-content: space-between;
          padding: 0 12px 0 80px;
        }
        .job-detail {
          flex: 1;
        }
        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .job-title {
          color: #3d3d3d;
          font-size: 35px;
          font-weight: 700;
        }
        .job-meta {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .posted-date {
          color: #888;
          font-size: 14px;
        }
        .job-status {
          display: flex;
          align-items: center;
          gap: 4px;
          background-color: #ecfdf3;
          border: 1px solid #abef6;
          border-radius: 9999px;
          color: #067647;
          font-size: 12px;
          font-weight: 500;
          padding: 2px 8px 2px 6px;
        }
        .status-icon {
          width: 8px;
          height: 8px;
        }
        .job-location-salary {
          display: flex;
          justify-content: space-between;
          margin-top: 24px;
          font-size: 20px;
          color: #5d5d5d;
        }
        .location,
        .salary {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .location-icon,
        .salary-icon {
          width: 24px;
          height: 24px;
        }
        .job-details-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 56px;
        }
        .section-title {
          color: #6e6d6d;
          font-size: 14px;
          margin-bottom: 8px;
        }
          .skills-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

        .skill-item{
          display: flex;
          align-items: center;
          gap: 4px;
          background-color: #fff;
          border: 1px solid #d0d5dd;
          border-radius: 6px;
          box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.08) inset;
          color: #344054;
          font-size: 12px;
          padding: 4px 6px;
          margin-bottom: 8px;
        }
        .skill-icon {
          width: 16px;
          height: 16px;
        }
        .job-description {
          margin-top: 57px;
        }
        .description-text {
          color: #3d3d3d;
          font-size: 16px;
          line-height: 28px;
          white-space: pre-line;
        }
        .company-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 97px;
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
          color: #4f4f4f;
          font-size: 20px;
        }
        .follow-button {
          color: #003788;
          font-size: 11px;
          font-weight: 700;
        }
        .company-details {
          display: flex;
          justify-content: space-between;
          margin-top: 26px;
        }
        .detail-item {
          display: flex;
          flex-direction: column;
        }
        .detail-title {
          color: #6e6d6d;
          font-size: 14px;
        }
        .detail-text {
          color: #3d3d3d;
          font-size: 16px;
          margin-top: 8px;
        }
        .report-link {
          color: #b0b0b0;
          font-size: 12px;
          text-decoration: underline;
          margin-top: 27px;
        }
        .job-actions {
          width: 300px;
        }
        .action-buttons {
          display: flex;
          gap: 16px;
          margin-top: 17px;
        }
        .delete-button,
        .edit-button {
          display: flex;
          align-items: center;
          gap: 10px;
          border-radius: 8px;
          font-size: 16px;
          padding: 12px 24px;
        }
        .delete-button {
          background-color: #fef4f2;
          border: 1px solid #dc4a2d;
          color: #dc4a2d;
        }
        .edit-button {
          background-color: #dc4a2d;
          border: 2px solid #fed3ca;
          color: #fff;
        }
        .button-icon {
          width: 20px;
          height: 20px;
        }
        .job-stats {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 24px;
        }
        .stat-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
        }
        .stat-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 16px;
          color: #4f4f4f;
        }
        .stat-icon {
          width: 20px;
          height: 20px;
        }
        .stat-value {
          color: #3d3d3d;
          font-size: 20px;
        }
        .company-quote {
          color: #000;
          font-size: 20px;
          font-weight: 500;
          line-height: 150%;
          margin-top: 77px;
        }
        .testimonial {
          display: flex;
          gap: 16px;
          margin-top: 50px;
        }
        .testimonial-image {
          width: 45px;
          height: 45px;
          border-radius: 50%;
        }
        .testimonial-content {
          display: flex;
          flex-direction: column;
        }
        .testimonial-name {
          color: #000;
          font-size: 16px;
          font-weight: 500;
        }
        .testimonial-description {
          color: #828282;
          font-size: 16px;
        }
        @media (max-width: 991px) {
          .main-header {
            flex-wrap: wrap;
            padding: 0 20px;
          }
          .logo {
            padding: 0 20px;
          }
          .main-nav {
            flex-wrap: wrap;
          }
          .content-container {
            padding: 21px 20px 2px;
          }
          .job-tabs {
            flex-wrap: wrap;
          }
          .job-content {
            flex-direction: column;
            padding: 0 20px;
          }
          .job-details-grid {
            grid-template-columns: 1fr;
          }
          .company-info {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .company-details {
            flex-direction: column;
            gap: 20px;
          }
          .job-actions {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default MyComponent;
