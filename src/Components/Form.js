import axios from 'axios'
import config from '../config'
import Login from "./Login";
import Logout from "./Logout";
const Form = (props) => {

  const addJob = (e) => {
    e.preventDefault();
    let target = e.target;
    var values = {
      companyName: target.companyName.value,
      jobTitle: target.jobTitle.value,
      jobDescription: target.jobDescription.value,
      inputStar: target.inputStar.checked 
    };
    const { companyName, jobTitle, jobDescription, inputStar } = values;
    console.log(values)
    axios
      .post(
        `${config.API_URL}/job-board/add-job`,
        {
          companyName,
          jobTitle,
          jobDescription,
          inputStar,
        },
        { withCredentials: true }
      )
      .then((result) => {
        Array.from(document.querySelectorAll("input")).forEach((input) => {
          input.value = "";
          if (input.type === "checkbox" && input.id === "inputStar") {
            input.checked = false;
          }
        });
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
  };

  if (props.isAuthenticated) {
    return (
      <>
        <form onSubmit={addJob}>
        <input type="checkbox" id="inputStar" />
          <input type="text" placeholder="Company Name" name="companyName" />
          <input type="text" placeholder="Job Title" name = "jobTitle" />
          <input type="text" placeholder="Location" />
          <input type="text" placeholder="URL" />
          <textarea type="text" placeholder="Job Description" name="jobDescription" />
          <div className="buttons">
            <button>Save Job</button>
            <a href="https://job-toast.herokuapp.com/job-board" target="_blank">
              <button>Open Job Board</button>
            </a>
          </div>
        </form>
        <Logout setIsAuthenticated={props.setIsAuthenticated}/>
      </>
    );
  } else {
    return <Login setIsAuthenticated={props.setIsAuthenticated}></Login>;
  }
};

export default Form;
