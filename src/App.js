import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import Img from './assets/gratitude.jpg'

export default function App() {
  return (
    <div>
      <div className="bg-white shadow mb-8">
        <nav className="flex gap-2 justify-center max-w-xl mx-auto text-zinc-500">
          <NavLink
            to="/"
            exact
            className="p-4 pb-3 tracking-tighter"
            activeClassName="text-sertac-700"
          >
            Anasayfa
          </NavLink>
          <NavLink
            to="/notlar"
            className="p-4 pb-3 tracking-tighter"
            activeClassName="text-sertac-700"
          >
            Tüm Notlar
          </NavLink>
          <NavLink
            to="/yeni-not"
            className="p-4 pb-3 tracking-tighter"
            activeClassName="text-sertac-700"
          >
            Yeni Not
          </NavLink>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <div className="max-w-xl mx-auto px-4 pb-8">
            <div className="beyazKutu">
              <img src={Img} alt="" />
              <div className="px-8 pt-7 pb-6 text-sm">
                <h1 className="text-3xl text-sertac-800">
                  Minnet Günlüğü Nedir?
                </h1>
                <p className="my-2">
                  Minnet günlüğü, kişinin hayatındaki olumlu şeylere
                  odaklanması, minnettarlık ve şükran duygusunu hissetmesi için
                  sık sık teşekkür ettiği şeyleri yazdığı bir tür günlüktür.
                  Zihinsel iyi oluş için basit fakat oldukça etkili bir
                  yöntemdir ve kişinin hayata pozitif bir bakış açısı
                  geliştirmesine yardımcı olabilir.{' '}
                </p>
              </div>
            </div>
          </div>
        </Route>
        <Route path="/yeni-not">
          <div className="max-w-md sm:max-w-4xl mx-auto px-4 pb-8">
            <PostForm />
          </div>
        </Route>

        <Route path="/notlar">
          <div className="max-w-md mx-auto px-4 pb-8">
            <PostList />
          </div>
        </Route>
      </Switch>
    </div>
  )
}
