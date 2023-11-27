import React from "react";

function Footer() {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto pl-5 pr-5 py-16 flex flex-col gap-20">
        <div className="text-white flex flex-col gap-5">
          <div className="flex gap-12">
            <img src="svgs/svg1.svg" alt="" className="w-12 h-12" />
            <img src="svgs/svg2.svg" alt="" className="w-12 h-12" />
            <img src="svgs/svg3.svg" alt="" className="w-12 h-12" />
            <img src="svgs/svg4.svg" alt="" className="w-12 h-12" />
          </div>
          <p className="text-xs">
            © 2016 - 2022 Guccio Gucci S.p.A. - All rights reserved. SIAE
            LICENCE # 2294/I/1936 and 5647/I/1936
          </p>
        </div>

        <div>
          <svg
            viewBox="0 0 1312 220"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 104.57C0 44.8817 47.7192 0 111.198 0C137.048 0 159.565 7.14969 180.162 21.426C191.548 29.3368 196.801 35.3334 196.801 42.5984V77.4244H196.547C179.028 35.8408 147.277 9.96344 111.198 9.96344C68.2 9.96344 36.5878 49.8865 36.5878 104.709C36.5878 159.923 68.7092 198.831 112.98 198.831C140.357 198.831 164.68 180.08 164.68 160.707V136.998C164.68 126.803 160.584 118.639 153.155 114.303V114.049H208.442V114.303C201.013 118.639 196.917 126.803 196.917 136.998V165.066C196.917 172.977 191.548 181.649 173.752 192.096C154.937 203.19 132.674 209.187 110.273 209.187C47.3489 209.14 0 164.259 0 104.57ZM360.347 189.375C346.392 177.774 338.593 161.837 338.593 141.933V29.3369C338.593 19.1428 334.497 10.9783 327.069 6.64232V6.38862H382.355V6.64232C374.927 10.9783 370.83 19.1428 370.83 29.3369V137.09C370.83 154.434 376.199 168.087 386.058 178.028C397.328 189.375 414.338 196.017 435.443 196.271C474.739 196.663 500.195 173.692 500.195 140.157V29.3369C500.195 19.1428 496.099 10.9783 488.67 6.64232V6.38862H521.44V6.64232C514.011 10.9783 509.915 19.1428 509.915 29.3369V140.296C509.915 181.349 476.521 209.163 426.094 209.163C397.444 209.14 375.436 201.76 360.347 189.375ZM632.522 104.709C632.522 44.9047 680.241 0 743.72 0C769.431 0 792.088 7.14969 812.684 21.426C824.07 29.3368 829.323 35.3334 829.323 42.5984V77.4244H829.069C811.55 35.8408 779.799 9.96344 743.073 9.96344C700.722 9.96344 669.11 49.8865 669.11 104.709C669.11 159.3 700.722 199.085 744.345 199.085C779.545 199.085 812.8 173.323 834.438 130.609H834.692L829.948 166.819C829.046 173.715 824.07 179.965 812.684 187.853C792.088 202.129 769.431 209.14 743.72 209.14C679.478 208.887 632.522 164.259 632.522 104.709ZM944.872 104.709C944.872 44.9047 992.592 0 1056.07 0C1081.78 0 1104.44 7.14969 1125.03 21.426C1136.42 29.3368 1141.67 35.3334 1141.67 42.5984V77.4244H1141.42C1123.9 35.8408 1092.15 9.96344 1055.42 9.96344C1013.07 9.96344 981.46 49.8865 981.46 104.709C981.46 159.3 1013.07 199.085 1056.7 199.085C1091.89 199.085 1125.15 173.323 1146.79 130.609H1147.04L1142.3 166.819C1141.4 173.715 1136.42 179.965 1125.01 187.853C1104.41 202.129 1081.76 209.14 1056.05 209.14C991.851 208.887 944.872 164.259 944.872 104.709ZM1268.24 179.827V29.3369C1268.24 19.1428 1264.14 10.9783 1256.71 6.64232V6.38862H1312V6.64232C1304.57 10.9783 1300.48 19.1428 1300.48 29.3369V179.827C1300.48 190.021 1304.57 198.185 1312 202.521V202.775H1256.71V202.521C1264.14 198.185 1268.24 190.021 1268.24 179.827Z"
              fill="var(--_g-logo-fill-color)"
            ></path>
          </svg>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
