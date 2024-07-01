import FeaturedCourses from '@/components/FeaturedCourses'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import MeetInstructors from '@/components/MeetInstructors'
import UpcomingWebinars from '@/components/UpcomingWebinars'
import WhyChooseUs from '@/components/WhyChooseUs'

function page() {
  return (
    <main className='min-h-screen bg-black/[0.96]
     antialiased bg-grid-white/[0.02]'>
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <UpcomingWebinars/>
      <MeetInstructors/>
      <Footer/>
    </main>
  )
}

export default page