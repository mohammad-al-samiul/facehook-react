import Avatar1 from "../../assets/images/avatars/avatar_1.png";
import EditIcon from "../../assets/icons/edit.svg";
import { useRef } from "react";
import useAxios from "../../hooks/useAxios";
import { useProfile } from "../../hooks/useProfile";
import { actions } from "../../actions";

export const ProfileImage = () => {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();
  const handleFileInput = (e) => {
    e.preventDefault();
    imageFileRef.current.addEventListener("change", updateImageDisplay);
    imageFileRef.current.click();
  };
  const updateImageDisplay = async () => {
    try {
      const formData = new FormData();
      for (const file of imageFileRef.current.files) {
        formData.append("avatar", file);
      }
      const res = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
          state?.user?.id
        }/avatar`,
        formData
      );
      console.log(res.data);
      if (res.status == 200) {
        dispatch({ type: actions.profile.IMAGE_UPDATED, data: res.data });
      }
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };
  const imageFileRef = useRef();
  return (
    <div className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
      <img
        className="max-w-full rounded-full"
        src={`${import.meta.env.VITE_SERVER_BASE_URL}/${state?.user?.avatar}`}
        alt="sumit saha"
      />

      <form>
        <button
          onClick={handleFileInput}
          className=" cursor-pointer flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
        >
          <img src={EditIcon} alt="Edit" />
        </button>
        <input type="file" name="file" id="file" ref={imageFileRef} hidden />
      </form>
    </div>
  );
};
