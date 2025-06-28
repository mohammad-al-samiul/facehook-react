import { useEffect } from "react";
import { useProfile } from "../hooks/useProfile";

import { useAuth } from "../hooks/useAuth";
import { actions } from "../actions";
import useAxios from "../hooks/useAxios";
import { ProfileInfo } from "../components/profile/ProfileInfo";

export const ProfilePage = () => {
  const { state, dispatch } = useProfile();
  const { auth } = useAuth();
  const { api } = useAxios();

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    const fetchProfile = async () => {
      try {
        const res = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );

        if (res.status == 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED,
            data: res.data,
          });
        }
      } catch (error) {
        console.log(error);
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };
    fetchProfile();
  }, []);

  return (
    <div>
      welcome to {state?.user?.firstName}
      <ProfileInfo />
    </div>
  );
};
