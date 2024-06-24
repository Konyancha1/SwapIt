import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage: React.FC = () => {
  const [formData, setFormData] = useState({
    SwapOption: '',
    Category: '',
    ItemName: '',
    ItemDesc: '',
    FullName: '',
    PhoneNumber: '',
    Email: '',
    Location: '',
    Landmark: ''
  });

  const [errors, setErrors] = useState({
    SwapOption: false,
    Category: false,
    ItemName: false,
    ItemDesc: false,
    FullName: false,
    PhoneNumber: false,
    Email: false,
    Location: false,
    Landmark: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));

    if (value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: false
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let valid = true;
    const newErrors = { ...errors };

    Object.keys(formData).forEach((field) => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field as keyof typeof newErrors] = true;
        valid = false;
      } else {
        newErrors[field as keyof typeof newErrors] = false;
      }
    });

    setErrors(newErrors);

    if (valid) {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbyEjgabAi8F4XwaY0QKJWBl-R2vyo5bGS8RLnJTXvZEUMMX7CHoJKS9vWz8WJNmuSL8ng/exec', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setFormData({
            SwapOption: '',
            Category: '',
            ItemName: '',
            ItemDesc: '',
            FullName: '',
            PhoneNumber: '',
            Email: '',
            Location: '',
            Landmark: ''
          });

          // Show success message
          toast.success('Form submitted successfully');
        } else {
          // Handle error in form submission
          toast.error('Form submission failed');
        }
      } catch (error) {
        // Handle network or other errors
        toast.error('Form submission failed');
      }
    }
  };

  return (
    <main className="relative">
      <section className="module module--hero">
        <div className="bg-gray-600 h-screen w-full"></div>
      </section>
      <section className="absolute top-[10%] left-0 right-0">
        <div className="max-w-[650px] mx-auto">
          <div className="mb-[30px] text-center max-w-[80%] mx-auto">
            <div className="mb-[20px]">Logo</div>
            <h1 className="text-[40px] text-white font-[600] leading-[1.1] mb-[10px]">Lorem ipsum dolor sit amet consectetur.</h1>
            <p className="text-white font-[400] text-[16px]">Lorem ipsum dolor sit amet consectetur. In pulvinar pellentesque sit blandit accumsan nec eget.</p>
          </div>
          <div className="rounded-[16px] shadow-2xl mb-[30px] bg-white">
            <form onSubmit={handleSubmit}>
              <div className="p-[40px] pt-[35px]">
                <div className="mb-[20px] pb-[15px] border-b border-gray-200">
                  <h3 className="text-[25px] font-[600]">Start swapping</h3>
                  <p className="font-[500]">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className="mb-[15px]">
                  <label htmlFor="SwapOption" className="text-[14px] font-[600]">Giving out / I want</label>
                  <select
                    id="SwapOption"
                    className="w-full h-[50px] px-[20px] py-[15px] rounded-[15px] bg-gray-100"
                    value={formData.SwapOption}
                    onChange={handleChange}
                  >
                    <option disabled value="">Select your choice</option>
                    <option>Giving out</option>
                    <option>I want</option>
                  </select>
                  {errors.SwapOption && <div className="text-sm text-red-600 mt-1">Field can't be blank</div>}
                </div>
                <div className="mb-[15px]">
                  <label htmlFor="Category" className="text-[14px] font-[600]">Category</label>
                  <select
                    id="Category"
                    className="w-full h-[50px] px-[20px] py-[15px] rounded-[15px] bg-gray-100"
                    value={formData.Category}
                    onChange={handleChange}
                  >
                    <option disabled value="">Select your category</option>
                    <option>Furniture</option>
                    <option>Clothes</option>
                    <option>Shoes</option>
                  </select>
                  {errors.Category && <div className="text-sm text-red-600 mt-1">Field can't be blank</div>}
                </div>
                <div className="mb-[15px]">
                  <label htmlFor="ItemName" className="text-[14px] font-[600]">Name of the item</label>
                  <input
                    id="ItemName"
                    type="text"
                    placeholder="Enter your item name"
                    className="w-full h-[50px] px-[20px] py-[15px] rounded-[15px] bg-gray-100"
                    value={formData.ItemName}
                    onChange={handleChange}
                  />
                  {errors.ItemName && <div className="text-sm text-red-600 mt-1">Field can't be blank</div>}
                </div>
                <div className="mb-[15px]">
                  <label htmlFor="ItemDesc" className="text-[14px] font-[600]">Describe your item</label>
                  <textarea
                    id="ItemDesc"
                    placeholder="E.g Blue jacket for a 4yrs old girl"
                    className="w-full h-[100px] px-[20px] py-[15px] rounded-[15px] bg-gray-100"
                    value={formData.ItemDesc}
                    onChange={handleChange}
                  ></textarea>
                  {errors.ItemDesc && <div className="text-sm text-red-600 mt-1">Field can't be blank</div>}
                </div>
                <div className="mb-[15px]">
                  <label htmlFor="FullName" className="text-[14px] font-[600]">Full name</label>
                  <input
                    id="FullName"
                    type="text"
                    placeholder="Enter your full names"
                    className="w-full h-[50px] px-[20px] py-[15px] rounded-[15px] bg-gray-100"
                    value={formData.FullName}
                    onChange={handleChange}
                  />
                  {errors.FullName && <div className="text-sm text-red-600 mt-1">Field can't be blank</div>}
                </div>
                <div className="mb-[15px]">
                  <label htmlFor="PhoneNumber" className="text-[14px] font-[600]">Phone number</label>
                  <input
                    id="PhoneNumber"
                    type="text"
                    placeholder="Enter a valid phone number"
                    className="w-full h-[50px] px-[20px] py-[15px] rounded-[15px] bg-gray-100"
                    value={formData.PhoneNumber}
                    onChange={handleChange}
                  />
                  {errors.PhoneNumber && <div className="text-sm text-red-600 mt-1">Field can't be blank</div>}
                </div>
                <div className="mb-[15px]">
                  <label htmlFor="Email" className="text-[14px] font-[600]">Email (optional)</label>
                  <input
                    id="Email"
                    type="text"
                    placeholder="Enter your email e.g joe@gmail.com"
                    className="w-full h-[50px] px-[20px] py-[15px] rounded-[15px] bg-gray-100"
                    value={formData.Email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-[15px]">
                  <label htmlFor="Location" className="text-[14px] font-[600]">Your Location</label>
                  <select
                    id="Location"
                    className="w-full h-[50px] px-[20px] py-[15px] rounded-[15px] bg-gray-100"
                    value={formData.Location}
                    onChange={handleChange}
                  >
                    <option disabled value="">Select your location</option>
                    <option>Makadara</option>
                    <option>Umoja 1</option>
                    <option>Upperhill</option>
                    <option>Kileleshwa</option>
                  </select>
                  {errors.Location && <div className="text-sm text-red-600 mt-1">Field can't be blank</div>}
                </div>
                <div className="mb-[15px]">
                  <label htmlFor="Landmark" className="text-[14px] font-[600]">Enter your area or nearest landmark</label>
                  <input
                    id="Landmark"
                    type="text"
                    placeholder="Enter your area or nearest landmark"
                    className="w-full h-[50px] px-[20px] py-[15px] rounded-[15px] bg-gray-100"
                    value={formData.Landmark}
                    onChange={handleChange}
                  />
                  {errors.Landmark && <div className="text-sm text-red-600 mt-1">Field can't be blank</div>}
                </div>
                <div className="mb-[15px] flex items-start">
                  <input id="accept_terms_conditions" type="checkbox" className="w-[30px] h-[30px] rounded-[30px] mr-[20px]" />
                  <label htmlFor="accept_terms_conditions" className="text-[13px] font-[600] text-gray-400 cursor-pointer">By submitting, you agree to our Terms and Conditions and confirm that you have read and understood the Privacy Policy.</label>
                </div>
                <div className="mb-[15px]">
                  <button type="submit" className="bg-sky-500 rounded-[120px] w-full h-[60px] text-center text-2x1 text-white font-[800] cursor-pointer hover:bg-sky-600">Submit your request</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;