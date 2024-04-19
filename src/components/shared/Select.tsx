import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { IoChevronDown } from "react-icons/io5";
import ErrorMessage from "./ErrorMessage";

type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  label?: string;
  errorMessage?: string;
};

const Select = ({
  value,
  onChange,
  options,
  label,
  errorMessage,
}: SelectProps) => {
  return (
    <>
      <label
        htmlFor="gender"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <Listbox value={value} onChange={onChange}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded bg-white py-2 pl-3 pr-10 text-left border focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm ">
            {value ? (
              <span className="block truncate">{value}</span>
            ) : (
              <span className="text-gray-400">Select an option</span>
            )}
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <IoChevronDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {options.map((option, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4  ${
                      active ? "bg-blue-50 text-blue-500" : "text-gray-700"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      <ErrorMessage message={errorMessage} />
    </>
  );
};
export default Select;
