import { Bio } from "./Bio";
import { MyPost } from "./MyPost";
import { ProfileImage } from "./ProfileImage";

export const ProfileInfo = () => {
  return (
    <div>
      <main className="mx-auto max-w-[1020px] py-8">
        <div className="container">
          <div className="flex flex-col items-center py-8 text-center">
            <ProfileImage />
            <div>
              <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
                Sumit Saha
              </h3>
              <p className="leading-[231%] lg:text-lg">sumitsaha@gmail.com</p>
            </div>
            <Bio />
          </div>
          <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Posts</h4>
          <MyPost />
        </div>
      </main>
    </div>
  );
};
