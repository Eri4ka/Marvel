import ErrorMessaage from "../errorMessage/ErrorMessage";
import { useNavigate, useLocation } from 'react-router-dom';

const Page404 = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        if (location.key !== "default") {
          navigate(-1);
        } else {
          navigate("/");
        }
      };

    return (
        <div>
            <ErrorMessaage />
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exists</p>
            <div style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} onClick={handleClick}>Back to main page</div>
        </div>
    )
}

export default Page404;