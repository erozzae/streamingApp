import Input from "@/Components/Input";
import InputLabel from "@/Components/InputLabel";
import Button from "@/Components/Button";
import { Link,Head } from "@inertiajs/react";
import React from "react";

const Login = () => {
  return (
    <>
      <Head title="Sign" />
      <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
        <div className="fixed top-[-50px] hidden lg:block">
          <img
            src="/assets/images/signup-image.png"
            className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
            alt=""
          />
        </div>
        <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
          <div>
            <img src="/assets/images/moonton-white.svg" alt="" />
            <div className="my-[70px]">
              <div className="font-semibold text-[26px] mb-3">Welcome Back</div>
              <p className="text-base text-[#767676] leading-7">
                Explore our new movies and get <br />
                the better insight for your life
              </p>
            </div>
            <form className="w-[370px]">
              <div className="flex flex-col gap-6">
                <div>
                  <InputLabel forInput="email" value="Email Address" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                  />
                </div>
                <div>
                  <InputLabel forInput="password" value="Password" />
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="grid space-y-[14px] mt-[30px]">
                <Link href={route("prototype.dashboard")}>
                  <Button type="button" variant="primary">
                    <span className="text-base font-semibold">
                      Start Watching
                    </span>
                  </Button>
                </Link>

                <Link href={route("prototype.register")}>
                  <Button type="button" variant="light-outline">
                    <span className="text-base text-white">
                      Create New Account
                    </span>
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
