import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>about - Character NFT template</title>
        <meta property="og:title" content="about - Character NFT template" />
      </Helmet>
      <header data-thq="thq-navbar" className="about-navbar">
        <span className="about-logo">Character</span>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="about-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="about-nav"
          >
            <Link to="/about" className="about-navlink button-clean button">
              About
            </Link>
            <button className="about-button button-clean button">
              Features
            </button>
            <button className="about-button1 button-clean button">
              Pricing
            </button>
            <button className="about-button2 button-clean button">Team</button>
            <button className="about-button3 button-clean button">Blog</button>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="about-btn-group">
          <div className="about-socials">
            <button className="social button">
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="about-image"
              />
            </button>
            <button className="social button">
              <img
                alt="image"
                src="/Icons/discord.svg"
                className="about-image01"
              />
            </button>
          </div>
          <button className="button">View on Opensea</button>
        </div>
        <div data-thq="thq-burger-menu" className="about-burger-menu">
          <button className="button about-button4">
            <svg viewBox="0 0 1024 1024" className="about-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </button>
        </div>
        <div data-thq="thq-mobile-menu" className="about-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="about-nav1"
          >
            <div className="about-container1">
              <span className="about-logo1">Character</span>
              <div data-thq="thq-close-menu" className="about-menu-close">
                <svg viewBox="0 0 1024 1024" className="about-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="about-nav2"
            >
              <span className="about-text">About</span>
              <span className="about-text01">Features</span>
              <span className="about-text02">Pricing</span>
              <span className="about-text03">Team</span>
              <span className="about-text04">Blog</span>
            </nav>
            <div className="about-container2">
              <button className="about-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="about-icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" className="about-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="about-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="about-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <section className="about-hero">
        <div className="about-heading">
          <select>
            <option value="Option 1">Option 1</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="New Option">New Option</option>
            <option value="Option 3">Option 3</option>
          </select>
          <h1 className="about-header">ABOUT</h1>
          <p className="about-caption">
            A character custom collection is joining the NFT space on Opensea.
          </p>
        </div>
        <div className="about-buttons">
          <button className="button">View on Opensea</button>
          <button className="about-learn button-clean button">
            Learn more
          </button>
        </div>
        <div className="about-container3">
          <input
            type="text"
            placeholder="placeholder"
            className="about-textinput input"
          />
        </div>
      </section>
      <section className="about-description">
        <img
          alt="image"
          src="/hero-divider-1500w.png"
          className="about-divider-image"
        />
        <div className="about-container4">
          <div className="about-description01">
            <div className="about-content">
              <p className="about-paragraph">
                We are a team of digital aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat.
              </p>
              <p className="about-paragraph1">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
            <div className="about-links">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="button-link button"
              >
                <span>Follow us on Twitter</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="about-arrow"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="about-link01 button-link button"
              >
                <span>Join us on Discord</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="about-arrow1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="about-cards">
        <div className="about-row">
          <div className="about-card">
            <div className="about-avatar">
              <img
                alt="image"
                src="/Avatars/avatar.svg"
                className="about-avatar1"
              />
            </div>
            <div className="about-main">
              <div className="about-content01">
                <h2 className="about-header01">10,000+ unique characters</h2>
                <p className="about-description02">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquat
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi
                </p>
              </div>
              <button className="about-learn1 button">
                <span className="about-text07">Learn more</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="about-image02"
                />
              </button>
            </div>
          </div>
          <div className="about-card01">
            <div className="about-avatar2">
              <img
                alt="image"
                src="/Avatars/default-avatar.svg"
                className="about-avatar3"
              />
            </div>
            <div className="about-main1">
              <div className="about-content02">
                <h2 className="about-header02">
                  Create yourself for the metaverse
                </h2>
                <p className="about-description03">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquat
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi
                </p>
              </div>
              <button className="about-learn2 button">
                <span className="about-text08">Learn more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="about-image03"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="about-card02">
          <div className="about-avatar4">
            <img
              alt="image"
              src="/Avatars/light-avatar.svg"
              className="about-avatar5"
            />
          </div>
          <div className="about-row1">
            <div className="about-main2">
              <div className="about-content03">
                <h2 className="about-header03">
                  Create yourself for the metaverse
                </h2>
                <p className="about-description04">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquat
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi
                </p>
              </div>
              <button className="about-learn3 button">
                <span className="about-text09">Learn more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="about-image04"
                />
              </button>
            </div>
            <img
              alt="image"
              src="/group%202262.svg"
              className="about-image05"
            />
          </div>
        </div>
      </section>
      <section className="about-collection">
        <div className="about-content04">
          <span className="about-caption01">collection</span>
          <div className="about-heading01">
            <h2 className="about-header04">All time best collections</h2>
            <p className="about-header05">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
        </div>
        <div className="about-main3">
          <div className="about-card03">
            <div className="about-image06">
              <img
                alt="image"
                src="/Characters/character-1.svg"
                className="about-image07"
              />
            </div>
            <div className="about-content05">
              <span className="about-caption02">Character #1</span>
              <h3 className="about-title">0.05 ETH</h3>
            </div>
          </div>
          <div className="about-card04">
            <div className="about-image08">
              <img
                alt="image"
                src="/Characters/character-2.svg"
                className="about-image09"
              />
            </div>
            <div className="about-content06">
              <span className="about-caption03">Character #2</span>
              <h3 className="about-title1">0.05 ETH</h3>
            </div>
          </div>
          <div className="about-card05">
            <div className="about-image10">
              <img
                alt="image"
                src="/Characters/character-3.svg"
                className="about-image11"
              />
            </div>
            <div className="about-content07">
              <span className="about-caption04">Character #3</span>
              <h3 className="about-title2">0.05 ETH</h3>
            </div>
          </div>
          <div className="about-card06">
            <div className="about-image12">
              <img
                alt="image"
                src="/Characters/character-4.svg"
                className="about-image13"
              />
            </div>
            <div className="about-content08">
              <span className="about-caption05">
                <span>Character #4</span>
                <br></br>
              </span>
              <h3 className="about-title3">0.05 ETH</h3>
            </div>
          </div>
          <div className="about-card07">
            <div className="about-image14">
              <img
                alt="image"
                src="/Characters/character-5.svg"
                className="about-image15"
              />
            </div>
            <div className="about-content09">
              <span className="about-caption06">Character #5</span>
              <h3 className="about-title4">0.05 ETH</h3>
            </div>
          </div>
          <div className="about-card08">
            <div className="about-image16">
              <img
                alt="image"
                src="/Characters/character-6.svg"
                className="about-image17"
              />
            </div>
            <div className="about-content10">
              <span className="about-caption07">Character #6</span>
              <h3 className="about-title5">0.05 ETH</h3>
            </div>
          </div>
          <div className="about-card09">
            <div className="about-image18">
              <img
                alt="image"
                src="/Characters/character-7.svg"
                className="about-image19"
              />
            </div>
            <div className="about-content11">
              <span className="about-caption08">Character #7</span>
              <h3 className="about-title6">0.05 ETH</h3>
            </div>
          </div>
          <div className="about-card10">
            <div className="about-image20">
              <img
                alt="image"
                src="/Characters/character-8.svg"
                className="about-image21"
              />
            </div>
            <div className="about-content12">
              <span className="about-caption09">Character #8</span>
              <h3 className="about-title7">0.05 ETH</h3>
            </div>
          </div>
        </div>
        <button className="about-view2 button-link button">View all</button>
      </section>
      <section className="about-project">
        <div className="about-understand">
          <div className="about-content13">
            <span className="about-caption10">Project</span>
            <div className="about-heading02">
              <h2 className="about-header06">Understand the project</h2>
              <p className="about-header07">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <button className="about-view3 button-link button">
              <span>Learn More</span>
              <img
                alt="image"
                src="/Icons/arrow.svg"
                className="about-image22"
              />
            </button>
          </div>
          <img alt="image" src="/group%202415.svg" className="about-image23" />
        </div>
        <div className="about-mining">
          <img alt="image" src="/group%202422.svg" className="about-image24" />
          <div className="about-content14">
            <span className="about-caption11">Project</span>
            <div className="about-heading03">
              <h2 className="about-header08">How the minting works</h2>
              <p className="about-header09">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </span>
                <br></br>
                <br></br>
                <span>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </span>
                <br></br>
              </p>
            </div>
            <button className="about-view4 button-link button">
              <span>Learn More</span>
              <img
                alt="image"
                src="/Icons/arrow.svg"
                className="about-image25"
              />
            </button>
          </div>
        </div>
      </section>
      <section className="about-roadmap">
        <div className="about-heading04">
          <h2 className="about-header10">Roadmap</h2>
          <p className="about-header11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
        <div className="about-list">
          <div className="about-step">
            <span className="about-caption12">01</span>
            <div className="about-heading05">
              <h2 className="about-header12">Project Launch</h2>
              <p className="about-header13">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <button className="about-button5 button">View on Opensea</button>
          </div>
          <div className="about-step1">
            <span className="about-caption13">02</span>
            <div className="about-heading06">
              <h2 className="about-header14">Metadata and Character</h2>
              <p className="about-header15">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </span>
                <br></br>
              </p>
            </div>
          </div>
          <div className="about-step2">
            <span className="about-caption14">03</span>
            <div className="about-heading07">
              <h2 className="about-header16">Get Physical</h2>
              <p className="about-header17">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </span>
                <br></br>
              </p>
            </div>
          </div>
          <div className="about-step3">
            <span className="about-caption15">04</span>
            <div className="about-heading08">
              <h2 className="about-header18">Private club community</h2>
              <p className="about-header19">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="about-benefits">
                <div className="about-item">
                  <img
                    alt="image"
                    src="/Icons/people.svg"
                    className="about-image26"
                  />
                  <p className="about-header20">Consectetur adipiscing elit</p>
                </div>
                <div className="about-item1">
                  <img
                    alt="image"
                    src="/Icons/paper.svg"
                    className="about-image27"
                  />
                  <p className="about-header21">Consectetur adipiscing elit</p>
                </div>
                <div className="about-item2">
                  <img
                    alt="image"
                    src="/Icons/checklist.svg"
                    className="about-image28"
                  />
                  <p className="about-header22">Consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-join-us">
        <div className="about-content15">
          <div className="about-main4">
            <div className="about-heading09">
              <h2 className="about-header23">Create your character now</h2>
              <p className="about-caption16">
                A character custom collection is joining the NFT space on
                Opensea.
              </p>
            </div>
            <button className="about-view5 button">View on Opensea</button>
          </div>
          <img alt="image" src="/group%202273.svg" className="about-image29" />
        </div>
      </section>
      <section className="about-faq">
        <h2 className="about-header24">We have all the answers</h2>
        <div className="about-accordion">
          <div
            data-role="accordion-container"
            className="about-element accordion"
          >
            <div className="about-content16">
              <span className="about-header25">
                Lorem ipsum dolor sit ametetur elit?
              </span>
              <span
                data-role="accordion-content"
                className="about-description05"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="about-icon-container">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="about-icon10"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="about-icon12"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="about-element1 accordion"
          >
            <div className="about-content17">
              <span className="about-header26">
                Excepteur sint occaecat cupidatat non sunt in culpa qui officia
                deserunt mollit anim id est laborum?
              </span>
              <span
                data-role="accordion-content"
                className="about-description06"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="about-icon-container1">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="about-icon14"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="about-icon16"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="about-element2 accordion"
          >
            <div className="about-content18">
              <span className="about-header27">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </span>
              <span
                data-role="accordion-content"
                className="about-description07"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="about-icon-container2">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="about-icon18"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="about-icon20"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="about-element3 accordion"
          >
            <div className="about-content19">
              <span className="about-header28">
                Lorem ipsum dolor sit ametetur elit?
              </span>
              <span
                data-role="accordion-content"
                className="about-description08"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="about-icon-container3">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="about-icon22"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="about-icon24"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="about-element4 accordion"
          >
            <div className="about-content20">
              <span className="about-header29">
                Incididunt ut labore et dolore?
              </span>
              <span
                data-role="accordion-content"
                className="about-description09"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="about-icon-container4">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="about-icon26"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="about-icon28"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="about-get-yours">
        <div className="about-row2">
          <div className="about-column">
            <div className="about-card11">
              <img
                alt="image"
                src="/Characters/character-9.svg"
                className="about-image30"
              />
            </div>
          </div>
          <div className="about-column1">
            <div className="about-card12">
              <img
                alt="image"
                src="/Characters/character-10.svg"
                className="about-image31"
              />
            </div>
          </div>
        </div>
        <div className="about-column2">
          <div className="about-card13">
            <div className="about-content21">
              <h2 className="about-header30">Get yours now</h2>
              <p className="about-description10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliquat enim
                ad minim veniam.
              </p>
            </div>
            <button className="about-button6 button">View on Opensea</button>
          </div>
        </div>
      </section>
      <footer className="about-footer">
        <div className="about-main5">
          <div className="about-branding">
            <div className="about-heading10">
              <h2 className="about-logo2">Character</h2>
              <p className="about-caption17">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
            <div className="about-socials1">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="about-twitter1 social button"
              >
                <img
                  alt="image"
                  src="/Icons/twitter.svg"
                  className="about-image32"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="about-discord1 social button"
              >
                <img
                  alt="image"
                  src="/Icons/discord.svg"
                  className="about-image33"
                />
              </a>
            </div>
          </div>
          <div className="about-links1">
            <div className="about-list1">
              <h3 className="about-heading11">Site</h3>
              <div className="about-items">
                <button className="about-link02 button-clean button">
                  About
                </button>
                <button className="about-link03 button-clean button">
                  Collection
                </button>
                <button className="about-link04 button-clean button">
                  Roadmap
                </button>
                <button className="about-link05 button-clean button">
                  Features
                </button>
              </div>
            </div>
            <div className="about-list2">
              <h3 className="about-heading12">Company</h3>
              <div className="about-items1">
                <button className="about-link06 button-clean button">
                  Team
                </button>
                <button className="about-link07 button-clean button">
                  Press
                </button>
                <button className="about-link08 button-clean button">
                  Terms
                </button>
                <button className="about-link09 button-clean button">
                  Limitations
                </button>
                <button className="about-link10 button-clean button">
                  Licenses
                </button>
              </div>
            </div>
          </div>
          <div className="about-socials2">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              className="about-twitter2 social button"
            >
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="about-image34"
              />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer noopener"
              className="about-discord2 social button"
            >
              <img
                alt="image"
                src="/Icons/discord.svg"
                className="about-image35"
              />
            </a>
          </div>
        </div>
        <span className="about-copyright">
          © 2022 Character. All Rights Reserved.
        </span>
      </footer>
      <div>
        <Script
          html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
        ></Script>
      </div>
    </div>
  )
}

export default About
