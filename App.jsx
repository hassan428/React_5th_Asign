import './App.css'
import { Nav_bottom } from './component/Nav_bottom';
import { Navbar } from './component/Navbar';
import { Categories } from './component/Categories';
import { Hero_section } from './component/Hero_section';
import { Hero_side } from './component/Hero_side';
import { Brand } from './component/Brand';
import { Three_compo } from './component/Three_compo';
import { Render_card } from './component/Render_card';
import { card_arr, card_arr2, card_arr3 } from '../src/utils/data'
import { Ramadan } from './component/Ramadan';
import { Deals_noon } from './component/Deals_noon';
import { Help_compo } from './component/Help_compo';
import { Footer } from './component/Footer';
const App = () => {

  return <>
    <Help_compo />
    <Navbar />
    <div className='container m-auto'>
      <Categories />
      <Nav_bottom />
      <div className='flex w-full '>
        <Hero_section width="w-3/4" />
        <Hero_side />
      </div>
      <Brand />
      <Three_compo />
      <Render_card card_data={card_arr} heading="Recommended for you" />
      <Ramadan />
      <Render_card card_data={card_arr2} heading="Trending deals in TV & accessories" />
      <Deals_noon />
      <Render_card card_data={card_arr3} heading="Clearance deals" />
      <Hero_section width="w-full" img_class="min-h-28 max-h-28 sm:min-h-36 sm:max-h-36 w-full my-2" />
    </div>
      <Footer />

  </>

}

export default App
