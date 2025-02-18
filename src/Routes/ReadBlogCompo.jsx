import React, { useContext } from 'react'
import { useNavigate, useParams, NavLink } from 'react-router-dom'
import { store } from '../Store/StoreCompo'

export default function ReadBlogCompo() {
  const readData = useParams()
  const { data } = useContext(store)
  const nav = useNavigate()
  let count = 0

  let filterData = data?.filter((e) => {
    return e.id === Number(readData.id)
  })
  return (
    <div>
      <div className="readBlog">
        <h1 className="readTitle">{filterData[0].title}</h1>

        <div className="readReporter">
          <hr className="readLine"></hr>
          <div className="readBlogUserdata">
            <div className="readBlogUser"><i className="fa-solid fa-user"></i> Saptarsi {filterData[0].date}</div>
            <div className="readBlogLogo"><i className="fa-brands fa-facebook"></i> <i className="fa-brands fa-instagram"></i> <i className="fa-brands fa-twitter"></i> <i className="fa-brands fa-youtube"></i></div>
          </div>
          <hr className="readLine"></hr>
        </div>

        <img className="readImg" src={filterData[0].img} alt='not found' />
        <p className="readDesc">{filterData[0].desc}</p>

        <div className="readReporter">
          <hr className="readLine"></hr>
          <div className="readBlogUserdata">
            <div className="readBlogUser"><i className="fa-solid fa-user"></i>By Saptarsi {filterData[0].date}</div>
            <div className="readBlogLogo"><i className="fa-solid fa-hands-clapping"></i> {filterData[0].clap}</div>
          </div>
          <hr className="readLine"></hr>
        </div>
      </div>


      <div className="share">
        <div><i className="fa-solid fa-hands-clapping"></i> {filterData[0].clap}</div>
        <div><i className="fa-solid fa-share-nodes"></i> Share</div>
      </div>
      <button className="readBtn" onClick={() => nav(-1)}>Back</button>



      <h2 className='moreFromSiren'>More from Siren</h2>
      <div className="readMore">
        {
          data?.map((item, index) => {
            if (item.cat === filterData[0].cat && item.id !== filterData[0].id && count < 5) {
              count++
              return <div key={index} className='left section1 readArticles'>
                <img className='homeLatest' src={item.img} alt='not found' />
                <div className='info home'>
                  <h3><NavLink to={`/Blog/${item.id}`}>{item.title.slice(0, 80)}....</NavLink></h3>
                  <p className='des'>{item.desc.slice(0, 40)}....</p>
                  <p className='ref'>Bollywood : 17-10-23</p>
                </div>
              </div>
            }
            else {
              return null
            }
          })
        }
      </div>

    </div>
  )
}
