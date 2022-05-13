import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="sticky top-0 z-10 bg-gray-100 backdrop-filter backdrop-blur-lg bg-opacity-30 shadow">
      {({ open }) => (
        <>
          <div className="container flex items-center justify-center mx-auto py-2 px-2 sm:px-6 lg:px-8">
                  <img className="block w-52 mb-1 mr-2"
                    src="/img/grammarify-logo.png"
                    alt="grammarify-logo"
                  />
          </div>
        </>
      )}
    </Disclosure>
  )
}