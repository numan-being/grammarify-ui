import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-10 bg-gray-100 bg-opacity-30 shadow backdrop-blur-lg backdrop-filter"
    >
      {({ open }) => (
        <>
          <div className="container mx-auto mt-1 flex items-center justify-center py-2 px-2 sm:px-6 lg:px-8">
            <img
              className="my-auto mb-1 mr-2 block w-52 py-2"
              src="/img/grammarify-blue.svg"
              alt="grammarify-logo"
            />
          </div>
        </>
      )}
    </Disclosure>
  );
}
