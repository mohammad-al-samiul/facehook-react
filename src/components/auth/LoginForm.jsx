import { useForm } from "react-hook-form";
import { Field } from "../common/Field";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";
export const LoginForm = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: "saadh392@mail.com",
      password: "bestPassw0rd",
    },
  });

  const submitForm = async (formData) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        formData
      );

      if (res.status === 200) {
        const { token, user } = res.data;
        if (token) {
          const authToken = token.token;
          const refreshToken = token.refreshToken;
          setAuth({ user, authToken, refreshToken });
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
      setError("root.random", {
        type: "random",
        message: `User with email ${formData.email} is not found!`,
      });
    }
  };

  return (
    <div className="card">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      >
        <Field label="Email" error={errors.email}>
          <input
            {...register("email", { required: "Email ID is required!" })}
            type="email"
            name="email"
            className={`auth-input ${errors.email ? "border-red-500" : ""}`}
          />
        </Field>
        <Field label={"Password"} error={errors.password}>
          <input
            {...register("password", {
              required: "Password is required!",
              minLength: {
                value: 8,
                message: "Your password must be at least 8 characters",
              },
            })}
            className={`auth-input ${errors.password ? "border-red-500" : ""}`}
            name="password"
            type="password"
            id="password"
          />
        </Field>

        <button
          className="cursor-pointer auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Login
        </button>
      </form>
      <div className="py-4 lg:py-6">
        <p className="text-center text-xs text-gray-600/95 lg:text-sm">
          Don’t have account?
          <Link
            to={"/register"}
            className="text-white transition-all hover:text-lwsGreen hover:underline"
            href="/registration.html"
          >
            Create New
          </Link>
        </p>
      </div>
    </div>
  );
};
