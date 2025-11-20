import { useState } from 'react'
import data from './data.json'

function App() {
  const { header, banner, about, services, projects, features, testimonials, footer } = data

  return (
    <>
      {/* Header */}
      <div id="header-fixed-height"></div>
      <header className="header-section w-100" id="sticky-header">
        <nav className="navbar p-0 navbar-expand-xl d-none d-xl-flex">
          <div className="container px-0">
            <a className="navbar-brand" href="index.html">
              <img src={header.logo} alt="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-lg-0">
                    {header.menu.map((item, index) => (
                        <li className="nav-item" key={index}>
                            <a className="nav-link" href={item.link}>
                                <span>{item.label}</span>
                                {item.subItems && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M6 9l6 6l6 -6"></path>
                                    </svg>
                                )}
                            </a>
                            {item.subItems && (
                                <ul className="sub-menu list-unstyled">
                                    {item.subItems.map((sub, subIndex) => (
                                        <li key={subIndex}><a href={sub.link}>{sub.label}</a></li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="join-with-us">
                    <a href="#" className="join-with-us-btn">{header.cta}</a>
                </div>
            </div>
          </div>
        </nav>
        {/* Mobile Menu */}
        <div className="mobile-menu-area d-block d-xl-none">
            <div className="mobile-topbar">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="logo">
                            <a href="index.html"> <img src={header.logo} alt="logo" /></a>
                        </div>
                        <div className="bars">
                            <i className="fas fa-bars"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-menu-overlay"></div>
            <div className="mobile-menu-main">
                <div className="logo">
                    <a href="index.html"> <img src={header.logo} alt="logo" /></a>
                </div>
                <div className="close-mobile-menu"><i className="fas fa-times"></i></div>
                <div className="menu-body">
                    <div className="menu-list">
                        <ul className="list-unstyled">
                            {header.menu.map((item, index) => (
                                <li className="sub-mobile-menu" key={index}>
                                    <a href={item.link}>{item.label} <i className="fas fa-chevron-down float-end"></i></a>
                                    {item.subItems && (
                                        <ul className="list-unstyled">
                                            {item.subItems.map((sub, subIndex) => (
                                                <li key={subIndex}><a href={sub.link}>{sub.label}</a></li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </header>

      <main className="position-relative">
        <div className="inner-page-lines position-absolute d-flex justify-content-between w-100 top-0 bottom-0 z-n1">
            <span></span><span></span><span></span><span></span><span></span>
        </div>

        {/* Banner */}
        <section className="banner-section-three">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="text">
                            <div className="top-title position-relative">
                                <h1 className="title split-text right">{banner.title}</h1>
                            </div>
                            <p>{banner.description}</p>
                            <a href="#" className="theme-btn position-relative">{banner.cta}<span className="d-flex justify-content-center align-items-center position-absolute top-0"><img src="/images/icon-up-right.svg" alt="icon" /></span></a>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="image position-relative">
                            <div className="img reveal zoom-out">
                                <img src={banner.image} alt="banner" className="img-fluid w-100" />
                            </div>
                            <div className="counter-info position-absolute start-50 translate-middle-x d-flex justify-content-between align-items-center">
                                {banner.stats.map((stat, index) => (
                                    <div className="counter-item position-relative d-flex align-items-center" key={index}>
                                        <h3 className="number d-flex align-items-center"><span className="counter">{stat.number.replace('+','')}</span>+</h3>
                                        <p>{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* About */}
        <section className="about-us-section-two position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="about-content section-title-block text-center">
                            <h3 className="title section-title split-text right">{about.title}</h3>
                            <p>{about.description}</p>
                        </div>
                    </div>
                </div>
                <div className="logos">
                    <div className="row g-3">
                        {about.logos.map((logo, index) => (
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={index}>
                                <div className="logo">
                                    <a href="#"><img alt="about-logo" src={logo} /></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="about-video custom-wrapper-hover">
                    <div className="img reveal zoom-out position-relative">
                        <img alt="about-us" className="img-fluid w-100" src={about.videoImage} />
                        <div className="rotate-img about-video-box mt-0 position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center text-center">
                            <img alt="text" src="/images/about-video-text-white.svg" />
                            <a className="video-rotate-btn vidplay position-absolute top-50 start-50 translate-middle" href={about.videoLink}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-player-play">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M7 4v16l13 -8z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Services */}
        <section className="services-section services-section-three content">
            <div className="container px-0">
                <div className="row">
                    <div className="col-lg-5 pe-lg-0">
                        <div className="service-short-info">
                            <div className="section-title-block">
                                <h3 className="section-title split-text right">{services.title}</h3>
                            </div>
                            <p>{services.description}</p>
                            <div className="view-all-services d-flex justify-content-center justify-content-md-start">
                                <a className="view-all-btn" href={services.viewAllLink}>
                                    View All Services
                                    <div className="icon"><img src="/images/icon-up-right.svg" alt="icon" /></div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 ms-auto">
                        <div className="row">
                            {services.items.map((item, index) => (
                                <div className="col-lg-12 fade-up" key={index}>
                                    <div className="service-item-two d-flex">
                                        <div className="icon"><img alt="service-icon" src={item.icon} /></div>
                                        <div className="text">
                                            <h4 className="title">{item.title}</h4>
                                            <p>{item.description}</p>
                                            <a href="service-details.html" className="view-all-btn2 pe-0">
                                                Read More <img alt="" src="/images/icon-right.svg" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Projects */}
        <div className="project-section-three">
            <div className="container">
                <div className="top-info">
                    <div className="row g-4">
                        <div className="col-lg-7">
                            <div className="section-title-block">
                                <h3 className="section-title split-text right">{projects.title}</h3>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <p>{projects.description}</p>
                        </div>
                    </div>
                </div>
                <div className="row project-row">
                    {projects.items.map((item, index) => (
                        <div className="col-lg-12 col-md-6" key={index}>
                            <div className="project-three-item">
                                <div className="row">
                                    <div className="col-lg-6 col-xl-7 pe-lg-0">
                                        <div className="image reveal left">
                                            <a href="portfolio-details.html" className="d-block w-100">
                                                <img alt="project" className="img-fluid w-100" src={item.image} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-xl-4 align-self-center ps-lg-0 ms-auto">
                                        <div className="text">
                                            <h4 className="title">{item.title}</h4>
                                            <p>{item.description}</p>
                                            <a className="view-all-btn2" href="portfolio-details.html">
                                                View Full Project <img className="ms-1" alt="icon" src="/images/icon-right.svg" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Text Slider */}
        <section className="text-slider-section">
            <div className="slider-main d-flex align-items-center">
                 {[1, 2].map((_, i) => (
                    <div className="slider-item d-flex align-items-center" key={i}>
                        {[1, 2, 3, 4, 5, 6].map((__, j) => (
                            <h4 className="title" key={j}>
                                <img src="/images/star-icon.svg" alt="star" />
                                {j % 3 === 0 ? 'Business' : j % 3 === 1 ? 'Strategy' : 'Promotion'}
                            </h4>
                        ))}
                    </div>
                 ))}
            </div>
        </section>

        {/* Features */}
        <section className="feature-section feature-section-three content">
            <div className="container px-0">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="section-title-block text-center">
                            <h3 className="section-title split-text right">{features.title}</h3>
                            <p>{features.description}</p>
                        </div>
                    </div>
                </div>
                <div className="feature-main">
                    <div className="row">
                        {features.steps.map((step, index) => (
                            <div className="col-lg-6 col-md-6 feature-content position-relative fade-up" key={index}>
                                <div className={`feature-item ${!step.image ? 'no-img-item' : ''}`} style={step.image ? { background: `url(${step.image}) no-repeat center` } : {}}>
                                    <div className="feature-text d-flex flex-column w-100 h-100 justify-content-between">
                                        <div className="number">
                                            <span className={index === 3 ? 'number-four' : ''}>{step.number}</span>
                                        </div>
                                        <div className="info">
                                            <h4 className="feature-title">{step.title}</h4>
                                            <p>{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Testimonials */}
        <section className="testimonial-section-three">
            <div className="container">
                 <div className="row">
                    <div className="col-lg-5 order-2 order-lg-1">
                        <div className="short-info">
                            <p>{testimonials.description}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 ms-auto">
                        <div className="section-title-block">
                            <h3 className="section-title split-text right">{testimonials.title}</h3>
                        </div>
                    </div>
                </div>
                <div className="testimonial-main">
                    <div className="row">
                        <div className="col-lg-9 pe-md-0">
                            <div className="testimonial-three-slider position-relative" style={{ background: 'url(/images/testimonial-3-img-1.png) no-repeat center' }}>
                                <div className="testimonial-three-slider-main">
                                    {testimonials.items.map((item, index) => (
                                        <div className="slider-item" key={index}>
                                            <p>{item.text}</p>
                                            <div className="customer-info d-flex justify-content-between">
                                                <div className="rating d-inline-flex">
                                                    {[1,2,3,4,5].map(star => <img key={star} src="/images/star.svg" alt="star" />)}
                                                </div>
                                                <div className="user d-flex align-items-center">
                                                    <div className="img">
                                                        <img src={item.image} alt="user" />
                                                    </div>
                                                    <div className="text">
                                                        <h4 className="name">{item.author}</h4>
                                                        <p className="designation">{item.role}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 ps-0">
                             <div className="testimonial-info">
                                <div className="quote text-center">
                                    <img alt="quote" src="/images/quote-2.svg" />
                                </div>
                                <div className="customer-img d-flex justify-content-center">
                                    <div className="img"><img alt="user" src="/images/testmonial-img-1.png" /></div>
                                    <div className="img"><img alt="user" src="/images/testmonial-img-2.png" /></div>
                                    <div className="img"><img alt="user" src="/images/testmonial-img-3.png" /></div>
                                    <div className="img position-relative">
                                        <img alt="user" src="/images/testmonial-img-3.png" />
                                        <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                                            <span>1k+</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer-section-three">
        <div className="container footer-container position-relative z-1">
            <div className="lines position-absolute d-none d-xl-flex justify-content-between w-100 top-0 bottom-0 z-n1">
                <span></span><span></span><span></span><span></span><span></span>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-sm-6">
                    <div className="footer-widget logo">
                        <a href="#"><img src={footer.logo} alt="logo" /></a>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="footer-widget pages">
                        <h4 className="footer-title">Pages</h4>
                        <ul className="list-unstyled">
                            {footer.pages.map((item, i) => <li key={i}><a href={item.link}>{item.label}</a></li>)}
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="footer-widget">
                        <h4 className="footer-title">CMS</h4>
                        <ul className="list-unstyled">
                             {footer.cms.map((item, i) => <li key={i}><a href={item.link}>{item.label}</a></li>)}
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="footer-widget address">
                        <h4 className="footer-title">{footer.address.title}</h4>
                        <p>{footer.address.location}</p>
                        <div className="footer-social-icon">
                            {footer.address.socials.map((icon, i) => <a href="#" key={i}><img alt="icon" src={icon} /></a>)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>{footer.copyright}</p>
            </div>
        </div>
      </footer>
    </>
  )
}

export default App
