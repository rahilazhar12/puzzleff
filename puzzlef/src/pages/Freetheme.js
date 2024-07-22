import React, { useState } from "react";
import Blogsdb from "./../data/Blogpage"


const Freetheme = () => {
  const [data, setData] = useState(Blogsdb);

  return (
    <div className="container sub5">
      <div className="my-5 row">
        <div className="blog col-12">
          <p>
          Puzzle games are a delightful way to challenge your mind, improve cognitive skills, improve your picking power, and enjoy some leisure time. Puzzles come in various forms, with unique content from traditional paper puzzles to sophisticated digital games. The puzzle guide will walk you through the basic principles of playing different types of puzzle games, offering tips and strategies to enhance your experience.
          </p>
        </div>
        <div className="sub3 my-3 col-12">
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button type="btn" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="btn" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="btn" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./images/Puzzle1.jpeg" className="d-block w-100" alt="Jobs Website" />
                <div className="carousel-caption d-none d-md-block">
                  <h4 className="text">Puzzle Game</h4>
                  <p className="text">This Website is Gaming Website</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="./images/Freezenova1.jpeg" className="d-block w-100" alt="News Website" />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="text">Freezenova Game</h5>
                  <p className="text">This Website is Gaming Website</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="./images/Freezenova3.jpeg" className="d-block w-100" alt="Pure Coding Website" />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="text">Freezenova Game</h5>
                  <p className="text">This Website is Jigsaw planet</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {data.map((blog) => (
          <div className="col-lg-3 col-md-6 col-sm-12 my-4 mx-4" >
            <div className="product-grid">
              <div className="product-image my-3">
                <h3>{blog.title}</h3>
                <div >
                  <img style={{ height: "260px", width:"300px" }} className="pic-1" src={blog.image} alt={blog.title} />
                </div>
                <ul className="social">
                  <li>
                    <div data-tip="Quick View">
                      <i className="fa fa-search" />
                    </div>
                  </li>
                  <li>
                    <div  data-tip="More Details">
                      <i className="fa fa-shopping-cart" />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="product-content">
                <p className="card-text">{blog.category.slice(0, 20)}...</p>
                <div className="more-details" >
                  More Details
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Freetheme;









































// const Freetheme = () => {
//   const [data, setData] = useState(Blogsdb);
//   return (
//     <div className="sub5">
//       <div className="my-5 row">
//         <div className="blog">
//           <p>
//             Bootstrap’s list of the best blog website templates makes them fully responsive and mobile-friendly. What’s more, they are all
//             compatible with modern web browsers and quick to edit. You can use these superb blog templates for lifestyle, food, personal,
//             fashion, finance, travel, technology, or other blogging projects. Due to the fact of how heavy they are loaded with outstanding
//             features, all our templates for bloggers do not give a feel they are free at all. The designs we have in store for you are neat
//             and trendy, with great customizing functions. Change the color to fit your branding, edit the elements and fill the spaces with
//             your content. With the right blend of everything and a strong emphasis on providing quality content, you march toward success
//             with a firm step.
//           </p>
//         </div>
//         <div className="sub3 my-3">
//           <div id="carouselExampleCaptions" class="carousel slide">
//             <div class="carousel-indicators">
//               <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//               <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
//               <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
//             </div>
//             <div class="carousel-inner">
//               <div class="carousel-item active">
//                 <img src="https://assets-global.website-files.com/6515a6d5f30daec433d0abe2/651716fd2b486642ab9f4cde_Tablet%202708x1598.webp" className="d-block w-100" alt="..." />
//                 <div class="carousel-caption d-none d-md-block">
//                   <h4 className="text">Jobs Website</h4>
//                   <p className="text">This Website more attractive and User Friendly</p>
//                 </div>
//               </div>
//               <div class="carousel-item">
//                 <img src="https://cdn.moble.com/w/919/265909/file/Dekker-Website-Design-Square.jpg" className="d-block w-100" alt="..." />
//                 <div class="carousel-caption d-none d-md-block">
//                   <h5 className="text1">News Website</h5>
//                   <p className="text1">This Website more attractive and User Friendly</p>
//                 </div>
//               </div>
//               <div class="carousel-item">
//                 <img src="https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2022/03/build_a_website_for_free_-_article_image.jpg" className="d-block w-100" alt="..." />
//                 <div class="carousel-caption d-none d-md-block">
//                   <h5 className="text">Pure Coding Website</h5>
//                   <p className="text">This Website more attractive and User Friendly</p>
//                 </div>
//               </div>
//             </div>
//             <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//               <span class="visually-hidden">Previous</span>
//             </button>
//             <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//               <span class="carousel-control-next-icon" aria-hidden="true"></span>
//               <span class="visually-hidden">Next</span>
//             </button>
//           </div>
//         </div>
//         {data.map((blogs) => {
//           return (
//             <div className="col-lg-3 col-md-6 col-sm-12 my-4">
//               <div className="product-grid">

//                 <div className="product-image my-3">
//                   <h3 className=" ">
//                     {blogs.title}
//                   </h3>
//                   <Link to={`/blogs/${blogs.id}`}>
//                     <img style={{ height: "300px" }} className="pic-1" src={blogs.image} />
//                   </Link>
//                   <ul className="social">
//                     <li>
//                       <Link to={`/blogs/${blogs.id}`} data-tip="Quick View">
//                         <i className="fa fa-search" />
//                       </Link>
//                     </li>
//                     <li>
//                       <a href data-tip="More Details">
//                         < i className="fa fa-shopping-cart" />
//                       </a>
//                     </li>
//                   </ul>


//                 </div>

//                 <div className="product-content">
//                   <p className="card-text">
//                     {blogs.category.slice(0, 20)}...
//                   </p>
//                   <Link className="more-details" to={`/blogs/${blogs.id}`}>
//                     More Details
//                   </Link>

//                 </div>
//               </div>
//             </div>

//           );
//         })}

//       </div>
//     </div>


//   )

// }
// export default Freetheme;


// {Blogsdb.map((blogs) => {
//   return (
//     <div className="my-2 col-lg-3 col-md-6 col-sm-12">
//       <div className="card" style={{ width: "16.5rem", height: "23rem" }}>
//         <h5 className="card-title">{blogs.title}...</h5>
//         <Link to={`/blogs/${blogs.id}`}>
//           <img src={blogs.image} className="card-img-top" alt="..." />
//         </Link>
//         <div className="card-body">
//           <p className="card-text">
//             {blogs.category.slice(0, 20)}...
//           </p>
//           <a href="#" className="btn btn-outline-dark">
//             More Details
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// })}