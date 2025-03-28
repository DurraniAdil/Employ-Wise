import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);
  const [editForm, setEditForm] = useState({ first_name: "", last_name: "", email: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users?page=1");
      setUsers(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  const handleEditClick = (user) => {
    setEditingUser(user.id);
    setEditForm({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
    });
    setMessage("");
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://reqres.in/api/users/${editingUser}`, editForm);
      setMessage("User updated successfully!");
      setEditingUser(null);
      fetchUsers(); // Refresh user list
    } catch (error) {
      console.error("Error updating user:", error);
      setMessage("Failed to update user.");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      setMessage("User deleted successfully!");
      setUsers(users.filter(user => user.id !== id)); 
    } catch (error) {
      console.error("Error deleting user:", error);
      setMessage("Failed to delete user.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2>Users List</h2>
      <button className="btn btn-danger mb-3" onClick={handleLogout}>
        Logout
      </button>
      {message && <p className="text-success">{message}</p>}
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <img src={user.avatar} alt={user.first_name} width="50" />
                </td>
                <td>{user.first_name} {user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  <button className="btn btn-primary btn-sm me-2" onClick={() => handleEditClick(user)}>
                    Edit
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Edit User Form */}
      {editingUser && (
        <div className="mt-4">
          <h3>Edit User</h3>
          <form onSubmit={handleEditSubmit}>
            <div className="mb-3">
              <label>First Name:</label>
              <input type="text" className="form-control" name="first_name" value={editForm.first_name} onChange={handleEditChange} required />
            </div>
            <div className="mb-3">
              <label>Last Name:</label>
              <input type="text" className="form-control" name="last_name" value={editForm.last_name} onChange={handleEditChange} required />
            </div>
            <div className="mb-3">
              <label>Email:</label>
              <input type="email" className="form-control" name="email" value={editForm.email} onChange={handleEditChange} required />
            </div>
            <button type="submit" className="btn btn-success">Save Changes</button>
            <button type="button" className="btn btn-secondary ms-2" onClick={() => setEditingUser(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Users;
