import FeaturedCourses from '@/components/FeaturedCourses'
import HeroSection from '@/components/HeroSection'

function page() {
  return (
    <main className='min-h-screen bg-black/[0.96]
     antialiased'>
      <HeroSection/>
      <FeaturedCourses/>
    </main>
  )
}

export default page