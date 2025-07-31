// import axios from "axios";
// import { toast } from "react-hot-toast";
// import { useTaskContext } from "../hooks/contextHook";
// import StatusBadge from "./StatusBadge";

// const TaskCard = ({ task:{_id,title,description,date,status},onHandleEdit }) =>  {
    
//     const { deleteTask } = useTaskContext();
//      const handleDelete=async(taskId)=>{
//         try {
//           const response = await axios.delete(`http://localhost:3000/api/tasks/delete/${taskId}`, {
//             withCredentials: true,
//           });
//           deleteTask(taskId);
//           console.log("response ",response);
//          toast.success(response.data.message || 'Task deleted successfully!');
//         } catch (error) {
//           console.error("Error deleting task:", error);
//         }
//       }

// return (

//   <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition cursor-pointer">
//     <div className="flex justify-between items-start">
//       <div className="flex items-center gap-2">
//         <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">
//           🎨
//         </div>
//         <h3 className="text-lg font-semibold">{title}</h3>
//       </div>
//       <div className="flex justify-between gap-4"> 
//      <button className="text-gray-400 hover:text-yellow-400 text-xl" onClick={()=>onHandleEdit({_id,title,description,date,status})}>✎</button>
//       <button className="text-red-800 hover:text-red-500 text-[25px]" onClick={()=>handleDelete(_id)}>🗑</button>
//       </div>

       
//     </div>
//     <p className="text-sm text-gray-500 mt-2">{description}</p>
//     <div className="flex justify-between items-center mt-4">
//       <span className="text-sm text-gray-400">{date}</span>
//       <StatusBadge status={status} />
//     </div>
//   </div>
// )
// }
// export default TaskCard;


import axios from "axios";
import { toast } from "react-hot-toast";
import { useTaskContext } from "../hooks/contextHook";
import StatusBadge from "./StatusBadge";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ task: { _id, title, description, date, status }, onHandleEdit }) => {
  const { deleteTask } = useTaskContext();
  const navigate = useNavigate();

  const handleDelete = async (taskId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/tasks/delete/${taskId}`, {
        withCredentials: true,
      });
      deleteTask(taskId);
      toast.success(response.data.message || "Task deleted successfully!");
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const goToDetails = () => {
    navigate(`/task/${_id}`);
  };

  return (
    <div
      onClick={goToDetails}
      className="bg-white p-4 rounded-xl shadow hover:shadow-md transition cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">
            🎨
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className="flex justify-between gap-4">
          <button
            className="text-gray-400 hover:text-yellow-400 text-xl cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              onHandleEdit({ _id, title, description, date, status });
            }}
          >
            ✎
          </button>
          <button
            className="text-red-800 hover:text-red-500 text-[25px] cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(_id);
            }}
          >
            🗑
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-400">{date}</span>
        <StatusBadge status={status} />
      </div>
    </div>
  );
};

export default TaskCard;
