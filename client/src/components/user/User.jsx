import { useNavigate } from "react-router-dom";
import style from "./User.module.css";
import axios from "axios";

export default function User({ data, userLoader, setUserLoader }) {
  const navigate = useNavigate();
  function handleDelete(id) {
    const formData = new FormData();
    formData.append("active_user", "false");
    axios
      .put("http://localhost:3000/vartotojai/" + id, formData)
      .then((resp) => setUserLoader(!userLoader));
  }

  return (
    <tr>
      <td>
        {data.name} {data.surname}
      </td>
      <td>{data.email}</td>
      <td>{data.party_name}</td>
      <td>{new Date(data.created_at).toLocaleDateString()}</td>
      <td className={style.manage_user}>
        <button
          className="btn btn-info"
          onClick={() => navigate("/vartotojai/" + data._id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.12em"
            height="1.12em"
            viewBox="0 0 576 512"
          >
            <path
              fill="black"
              d="m402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0m162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2M384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5"
            />
          </svg>
        </button>
        <button
          className="btn btn-warning"
          onClick={() => handleDelete(data._id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2rem"
            height="1.2rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
}
