import { A } from 'kea-router'
import { useValues } from 'kea'
import { router } from 'kea-router'
import logo from '../assets/images/logo.png'

const Navbar = () => {
  const { location } = useValues(router)
  const navStyleBase = 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';
  const navStyleActive = 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';
  
  const getNavClass = (href: string) => {
    const isActive = location.pathname === href || (href !== '/' && location.pathname.startsWith(href))
    return isActive ? navStyleActive : navStyleBase
  }
  
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div
              className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
            >
              <A href="/" className="flex flex-shrink-0 items-center mr-4">
                <img
                  className="h-10 w-auto"
                  src={logo}
                  alt="React Jobs"
                />
                <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  React Jobs
                </span>
              </A>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <A
                    href="/"
                    className={getNavClass('/')}
                  >
                    Home
                  </A>
                  <A
                    href="/jobs"
                    className={getNavClass('/jobs')}
                  >
                    Jobs
                  </A>
                  <A
                    href="/add-job"
                    className={getNavClass('/add-job')}
                  >
                    Add Job
                  </A>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar

