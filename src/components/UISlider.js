import React from 'react'

const UISlider = ({component,setIdVista}) => {
  return (
    <>
    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
    </button>
    <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full py-4 overflow-y-auto bg-slider dark:bg-gray-800">
            <div className='w-[145px] mx-auto mt-[80px]'> 
                <img src='/assets/img/logoOmaha.svg' alt='logo'className='w-full' />
            </div>
            <ul className="space-y-2 font-medium mt-[40px]">
                <li onClick={()=>{setIdVista(1)}}>
                    <div className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-sliderSelect dark:hover:bg-gray-700 pl-[15%] mt-[25px]">
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.25 11.0001L10.204 2.04507C10.644 1.60607 11.356 1.60607 11.795 2.04507L20.75 11.0001M3.5 8.75007V18.8751C3.5 19.4961 4.004 20.0001 4.625 20.0001H8.75V15.1251C8.75 14.5041 9.254 14.0001 9.875 14.0001H12.125C12.746 14.0001 13.25 14.5041 13.25 15.1251V20.0001H17.375C17.996 20.0001 18.5 19.4961 18.5 18.8751V8.75007M7.25 20.0001H15.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="ml-3">Inicio</span>
                    </div>
                </li>
                <li onClick={()=>{setIdVista(2)}}>
                    <div className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-sliderSelect dark:hover:bg-gray-700 pl-[15%] mt-[25px]">
                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 13.25V10.625C16.5 9.72989 16.1444 8.87145 15.5115 8.23851C14.8786 7.60558 14.0201 7.25 13.125 7.25H11.625C11.3266 7.25 11.0405 7.13147 10.8295 6.9205C10.6185 6.70952 10.5 6.42337 10.5 6.125V4.625C10.5 3.72989 10.1444 2.87145 9.51149 2.23851C8.87855 1.60558 8.02011 1.25 7.125 1.25H5.25M6 15.5V16.25M9 13.25V16.25M12 11V16.25M7.5 1.25H2.625C2.004 1.25 1.5 1.754 1.5 2.375V19.625C1.5 20.246 2.004 20.75 2.625 20.75H15.375C15.996 20.75 16.5 20.246 16.5 19.625V10.25C16.5 7.86305 15.5518 5.57387 13.864 3.88604C12.1761 2.19821 9.88695 1.25 7.5 1.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="ml-3">Estado de cuenta</span>
                    </div>
                </li>
                <li onClick={()=>{setIdVista(1)}}>
                    <div className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-sliderSelect dark:hover:bg-gray-700 pl-[15%] mt-[25px]">
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.114 3.63589C18.9497 4.47162 19.6127 5.46377 20.065 6.55571C20.5173 7.64765 20.7501 8.81798 20.7501 9.99989C20.7501 11.1818 20.5173 12.3521 20.065 13.4441C19.6127 14.536 18.9497 15.5282 18.114 16.3639M15.463 6.28789C16.4474 7.27243 17.0004 8.60765 17.0004 9.99989C17.0004 11.3921 16.4474 12.7273 15.463 13.7119M5.75 6.24989L10.47 1.52989C10.5749 1.42513 10.7085 1.35381 10.8539 1.32492C10.9993 1.29604 11.15 1.31089 11.2869 1.3676C11.4239 1.42431 11.541 1.52034 11.6234 1.64356C11.7058 1.76677 11.7499 1.91165 11.75 2.05989V17.9399C11.7499 18.0881 11.7058 18.233 11.6234 18.3562C11.541 18.4794 11.4239 18.5755 11.2869 18.6322C11.15 18.6889 10.9993 18.7037 10.8539 18.6749C10.7085 18.646 10.5749 18.5746 10.47 18.4699L5.75 13.7499H3.51C2.63 13.7499 1.806 13.2429 1.572 12.3959C1.35752 11.6153 1.24922 10.8094 1.25 9.99989C1.25 9.16989 1.362 8.36689 1.572 7.60389C1.806 6.75589 2.63 6.24989 3.51 6.24989H5.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="ml-3">Comunicado</span>
                    </div>
                </li>
                <li onClick={()=>{setIdVista(4)}}>
                    <div className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-sliderSelect dark:hover:bg-gray-700 pl-[15%] mt-[25px]">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5088 6C9.02516 6 7.57483 6.43987 6.34121 7.26398C5.1076 8.08809 4.14611 9.25943 3.57834 10.6299C3.01057 12.0003 2.86202 13.5083 3.15147 14.9632C3.44091 16.418 4.15536 17.7544 5.20446 18.8033C6.25356 19.8522 7.5902 20.5665 9.04535 20.8559C10.5005 21.1453 12.0088 20.9968 13.3795 20.4291C14.7502 19.8614 15.9218 18.9001 16.7461 17.6668C17.5704 16.4334 18.0103 14.9834 18.0103 13.5H10.5088V6Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.5093 10.5H21.0108C21.0108 8.51088 20.2204 6.60322 18.8136 5.1967C17.4068 3.79018 15.4988 3 13.5093 3V10.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="ml-3">Reportes</span>
                    </div>
                </li>
        </ul>
        </div>      
    </aside>
    <div className="p-4 sm:ml-64">
        {component}
    </div>
    </>
  )
}

export default UISlider