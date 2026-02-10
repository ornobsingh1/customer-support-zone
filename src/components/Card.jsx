const Card = ({ issue, handleAddToStatus }) => {
  const { id, title, description, customer, priority, status, createdAt } =
    issue;

  return (
    <div onClick={()=> handleAddToStatus(issue)} className="card bg-base-100 shadow-sm cursor-pointer">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">{title}</h2>
          <div
            className={`badge badge-outline ${
              status === "Open"
                ? "bg-green-200 text-green-600"
                : "bg-yellow-200 text-yellow-600"
            }`}
          >
            {" "}
            <i className="fa-solid fa-circle"></i>
            {status}
          </div>
        </div>
        <p className="text-gray-600">{description}</p>
        <div className="flex justify-between items-center">
          <div className="card-actions">
            <div className="text-gray-600">#{id}</div>
            <div
              className={`font-semibold ${priority === "High" ? "text-red-500" : priority === "Medium" ? "text-yellow-500" : "text-green-500"}`}
            >
              {priority} Priority
            </div>
          </div>
          <div className="card-actions">
            <div className="text-gray-600 font-semibold">{customer}</div>
            <div className="text-gray-600">
              <i className="fa-regular fa-calendar"></i> {createdAt}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
