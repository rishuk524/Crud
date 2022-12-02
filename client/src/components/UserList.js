
import axios from "axios";
import toast from "react-hot-toast";

const UserList = ({ userData, fetchUsersData, BASE_URL }) => {
  const handleEdit = async (user) => {
    try {
      const username = prompt("Enter new name");
      const useremail = prompt("Enter new email");

      if (!username || !useremail) {
        toast.error("Please enter both name and email");
      } else {
        const resp = await axios.put(`${BASE_URL}/edituser/${user._id}`, {
          name: username,
          email: useremail,
        });

        if (resp.data.success) {
          toast.success("User edited successfully");
          fetchUsersData();
        }
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleDelete = async (userId) => {
    try {
      const resp = await axios.delete(`${BASE_URL}/deleteuser/${userId}`);

      if (resp.data.success) {
        toast.success("User deleted successfully");
        fetchUsersData();
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            All Users
          </h1>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Name
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Email
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Edit
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="bg-lime-300 text-white">
              {userData &&
                userData.map((user) => (
                  <tr>
                    <td className="px-4 py-3">{user.name}</td>
                    <td className="px-4 py-3">{user.email}</td>
                    <td className="px-4 py-3">
                      <button
                        className="hover:text-green-500"
                        onClick={() => handleEdit(user)}
                      >
                        Edit
                      </button>
                    </td>
                    <td className="px-4 py-3 text-lg text-white">
                      <button
                        className="hover:text-red-500"
                        onClick={() => handleDelete(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default UserList