import { use, useState } from "react";
import CountBox from "./CountBox";
import Container from "./Container";
import Card from "./Card";
import { CircleX } from "lucide-react";
import { toast } from "react-toastify";

const IssuesManagement = ({ initialPromise }) => {
  const initialData = use(initialPromise);

  const [taskStatus, setTaskStatus] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleAddToStatus = (issue) => {
    const isExist = taskStatus.find((task) => task.id === issue.id);
    if (isExist) {
      return toast.error("All Ready Exist!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    const newTaskStatus = [...taskStatus, issue];
    setTaskStatus(newTaskStatus);
  };

  const handleCompleteTask = (task) => {
    toast.success("Complete Task", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    const remaining = taskStatus.filter((t) => t.id !== task.id);
    setTaskStatus(remaining);

    const newResolved = [...resolved, task];
    setResolved(newResolved);
  };

  const handleResolvedRemove = (r) => {
    toast.error("Resolved Remove...", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    const remaining = resolved.filter((remove) => remove.id !== r.id);
    setResolved(remaining);
  };
  return (
    <div>
      {/* state */}
      <CountBox resolved={resolved.length} taskStatus={taskStatus.length} />

      <Container>
        <section className="grid grid-cols-12 gap-3">
          <section className="col-span-8">
            <h3 className="text-2xl font-bold my-4">Customer Tickets</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {initialData.map((issue) => (
                <Card
                  handleAddToStatus={handleAddToStatus}
                  key={issue.id}
                  issue={issue}
                />
              ))}
            </div>
          </section>

          <section className="col-span-4 space-y-4">
            {/* task status */}
            <div className="bg-white p-3 rounded-md">
              <h3 className="text-xl font-semibold mb-3">Task Status</h3>

              {taskStatus.length === 0 && "No Task in Progress"}

              {taskStatus.map((task) => (
                <div
                  key={task.id}
                  className="bg-white p-2 rounded-md mb-2 shadow-lg"
                >
                  <span className="font-semibold">{task.title}</span>
                  <button
                    onClick={() => handleCompleteTask(task)}
                    className=" w-full mt-3 btn px-3 py-1 bg-green-500 text-white rounded-md"
                  >
                    Complete
                  </button>
                </div>
              ))}
            </div>

            {/* resolved task */}
            <div className="bg-white p-3 rounded-md">
              <h3 className="text-xl font-semibold mb-3">Resolved Task</h3>

              {resolved.length === 0 && "No Resolved Tasks"}

              {resolved.map((r) => (
                <div
                  key={r.id}
                  className="bg-green-50 p-2 rounded-md mb-2 shadow-lg"
                >
                  <h4 className="font-semibold">{r.title}</h4>
                  <div className="mt-1 flex justify-between items-center">
                    <p className="text-green-500 font-semibold">
                      <i className="fa-solid fa-check"></i> Completed
                    </p>
                    <p
                      onClick={() => handleResolvedRemove(r)}
                      className="text-gray-500 cursor-pointer hover:text-red-500 ease-in-out duration-300"
                    >
                      <CircleX size={30} />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </Container>
    </div>
  );
};

export default IssuesManagement;
