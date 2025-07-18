import { useState } from "react"
import { useNavigate } from "react-router";

const Login = () => {

    const [formData, setFormData] = useState({ email: "", pass: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const { email, pass } = formData;
        if (!email || !pass) {
            setError("Please enter both email and password.");
            return;
        }

        // Handle login logic here (e.g., API call)
        console.log("Logging in with:", formData);
        navigate('/home')

        // Reset or navigate
        setError("");
    };

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-xl bg-white">
            <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
            {error && <p className="text-red-500 mb-3">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Email</label>
                    <input type="email" className="w-full p-2 border rounded" name="email" id="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="mb-6">
                    <label className="block mb-1 font-medium">Password</label>
                    <input type="password" className="w-full p-2 border rounded" name="pass" id="pass" value={formData.pass} onChange={handleChange} />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login
