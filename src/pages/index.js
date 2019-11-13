import React from 'react'
import SubSection from '../components/sub-section'
import Entry from '../components/entry'
import TechList from '../components/tech-list'

export default () =>
    <div>
        <section className="bio">
            <p>
                Hi, I'm Zakaria.
            </p>
            <p>
                I'm a full stack web developer. I've been developing web apps and websites for a while now.
            </p>
            <p>
                I love building software and learning new technologies.
            </p>

            <p>
                You can find me on <a href="https://github.com/zikk">Github</a> or email
                me at <a href="mailto:contact@zikk.info">contact@zikk.info</a> if
                you want to work together or just want to shoot any message at  me =).
            </p>
        </section>

        <SubSection>
            <h2 id="work">Projects</h2>
            <Entry>
                <h3 id="cmwl">checkmywatchlist.com</h3>
                <p>
                    My ever ongoing personal project. It is a film and series tracking app
                </p>
				<p>
                    Wether you like binging show or just want to share your preferences with your friends,
                    this might be for you
                </p>
				<p>
					Create an account, make your lists, follow your calendar and never miss your entertainment again
				</p>
                <TechList techs={['Node', 'Express', 'Graphql', 'React', 'Postgres', 'Docker']}/>
				<p>
                    <a href="https://checmywatchlist.com" target="_blank" rel="noopener noreferrer">Check it out</a>
                </p>
            </Entry>

            <Entry>
                <h3 id="elc">Client and billing management</h3>
                <p>
                    Desktop app for a small mechanics business for creating and managing client bills
                </p>
                <TechList techs={['Node', 'Electron', 'Vue.js', 'PouchDB']}/>
            </Entry>
        </SubSection>

        <SubSection>
            <h2 id="projects">Work</h2>

			<Entry>
                <h3 id="imagp">Imagine Partners Int. <small>Nov. 2018 - Present</small></h3>
                <p>
					Software developement and integration company
                </p>
				<p>
					Untitled recruiting platform : Web platform for recruiters to find talents
                    by various criterias varying from years of experience, team management expertise
                    or scientifically made professional evaluation test results.
				</p>
                <p>
                    Professional evaluation app : Web application for time tracked test taking
                </p>
                <p>
                    Touchscreen terminal software (Orange.sn) : React made app for touchscreen terminals
                    for purchage of sim cards, phone bills paying, sim card swap and delivery,
                    and other phone carriers services
                </p>
                <p>
                    Rest api for machine maintenance scheduling and assessement for a park management company
                </p>
                <TechList techs={['Node', 'Express', 'Graphql', 'React', 'Vue.js', 'MongoDB', 'Postgres', 'Docker']}/>
            </Entry>

			<Entry>
                <h3 id="zacr">Zacreation Informatique <small>Jun. 2016 - Nov. 2018</small></h3>
                <p>
					Local startup involved in many fields regarding IT.
                </p>
				<p>
					votel-dz.com <small>(defunct)</small> : Flights and hotels booking website
					with an intranet for booking management, delivery, accounting and 3rd party
					software communication.
				</p>
				<p>
					Aside from writing code, I also deployed software and maintenaned our VPSs
				</p>
                <TechList techs={['Node', 'Express', 'Graphql', 'Vue.js', 'MongoDB', 'Python', 'php', 'wordpress']}/>
            </Entry>
        </SubSection>
    </div>
