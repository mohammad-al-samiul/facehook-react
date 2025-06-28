import { useEffect, useState } from "react";
import EditIcon from "../../assets/icons/edit.svg";
import useAxios from "../../hooks/useAxios";
import { useProfile } from "../../hooks/useProfile";
import CheckIcon from "../../assets/icons/check.svg";
import { actions } from "../../actions";

export const Bio = () => {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();
  const [bio, setBio] = useState(state?.user?.bio);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setBio(state?.user?.bio);
  }, [state?.user?.bio]);

  console.log({ bio });
  const handleBioEdit = async () => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    try {
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${state?.user?.id}`,
        { bio }
      );

      if (response.status === 200) {
        dispatch({
          type: actions.profile.USER_DATA_EDITED,
          data: response.data,
        });
      }
      setEditMode(false);
    } catch (err) {
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: err.message,
      });
    }
  };

  return (
    <div className="mt-4 flex items-start gap-2 lg:mt-6">
      <div className="flex-1">
        {!editMode ? (
          <>
            <p className="leading-[188%] text-gray-400 lg:text-lg">
              {state?.user?.bio}
            </p>
          </>
        ) : (
          <>
            <textarea
              value={bio}
              className='p-2 className="leading-[188%] text-gray-400 lg:text-lg rounded-md'
              rows={4}
              cols={55}
              onChange={(e) => setBio(e.target.value)}
            />
          </>
        )}
      </div>

      <button className="flex-center h-7 w-7 rounded-full">
        {!editMode ? (
          <>
            <img onClick={() => setEditMode(true)} src={EditIcon} alt="Edit" />
          </>
        ) : (
          <>
            <img onClick={handleBioEdit} src={CheckIcon} alt="Check" />
          </>
        )}
      </button>
    </div>
  );
};
