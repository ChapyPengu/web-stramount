import React from 'react'
import TitleSection from '../components/TitleSection'
import MemberIcon from '../components/MemberIcon'
import members from '../data/members'

function Members() {
    

  return (
    <div className='py-12 sm:px-0 px-6 border border-black'>
        <div>
            <div className='text-center'>
                <TitleSection title='Miembros'/>
            </div>
            <div className='flex flex-wrap justify-center  items-center mt-12 gap-8'>
                {
                    members.map(({ name, lastname, imgPath, alias, github, linkedin }) => <MemberIcon
                        name={name}
                        lastname={lastname}
                        alias={alias}
                        github={github}
                        linkedin={linkedin}
                        imgPath={imgPath}
                    />) 
                }
            </div>
        </div>
    </div>
  )
}

export default Members