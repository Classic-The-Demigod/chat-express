import Logo from "../src/assets/Logo.png";
import Circle from "../src/assets/illustration.png";

import Google from "../src/assets/Google.png"

const App = () => {
  return (
    <section className="font-primary py-4 px-4">
      <section className="flex justify-between container mx-auto items-center">
        <main className=" flex-1 hidden sm:block">
          <div className="bg-gradient-to-br bg-gradient-to-[45deg] from-black-500 via-black-500 to-black-400 rounded-3xl   h-[800px] max-h-screen flex flex-col justify-between overflow-hidden w-[90%]">
            <div className="px-8 py-8 space-y-[4rem]">
              <img src={Logo} alt="" />

              <div className=" space-y-4">
                <h1 className="text-3xl text-white-100 font-normal">
                  <span className="text-accent font-bold">The Future</span> of
                  Customer Service
                </h1>
                <p className="text-white-100 font-normal text-base">
                  Start delivering exceptional customer experiences with
                  ChatXpress today!
                </p>
              </div>
            </div>

            <img className="w-[300px] self-end" src={Circle} alt="" />
          </div>
        </main>
        <main className="flex-1 flex justify-center items-center">
          <div className="space-y-4">
            <div className="text-center space-y-2">
              <h1 className="text-black-500 text-3xl font-normal">
                Create New Account
              </h1>
              <p className="text-black-300">Get started with zero costs.</p>
            </div>

            <form action="" className="space-y-4 font-medium">
              <div className="flex flex-col gap-2">
                <label className="text-black-400" htmlFor="Email">
                  Email <span>*</span>
                </label>

                <input
                  className="w-full px-4 py-3 rounded-xl outline-none bg-white-100 focus:bg-[#fff] focus-within:border focus-within:border-black-500 transition-all duration-300 ease-in"
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter email address"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-black-400" htmlFor="Email">
                  Password <span>*</span>
                </label>

                <input
                  className="w-full px-4 py-3 rounded-xl outline-none bg-white-100 focus:bg-[#fff] focus-within:border focus-within:border-black-500 transition-all duration-300 ease-in"
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter password"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-black-400" htmlFor="Email">
                  Website link <span>*</span>
                </label>

                <input
                  className="w-full px-4 py-3 rounded-xl outline-none bg-white-100 focus:bg-[#fff] focus-within:border focus-within:border-black-500 transition-all duration-300 ease-in"
                  type="email"
                  name=""
                  id=""
                  placeholder="Paste or enter link here"
                />
              </div>
              <p className="text-center text-base text-black-300">
                By creating an account, you agree to ChatXpress’ <br />{" "}
                <span className="text-accent"> Terms Of Use</span> and{" "}
                <span className="text-accent">Privacy Policy.</span>
              </p>

              <button className="bg-wine text-white-100 w-full py-3 rounded-xl">
                Create Account
              </button>
              <div className="flex items-center gap-2 text-gray-500">
                <hr className="w-full border-white-100" />
                <p>or</p>
                <hr className="w-full border-white-100" />
              </div>

              <button className="bg-white-100 text-gray-500 w-full py-3 rounded-xl flex justify-center items-center gap-2">
                <span><img src={Google} alt="" /></span>
               Sign up with Google
              </button>
            </form>


            <p className="text-center text-gray-500">I already have an account? <span className="text-accent">Log In</span></p>
          </div>
        </main>
      </section>
    </section>
  );
};

export default App;