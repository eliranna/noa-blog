import React from 'react'
import styled from 'styled-components'
import { spacing, colors, fontSizes } from '../common/style'
import { Link } from 'react-router-dom'
import Page from '../common/components/Page'

const Wrapper = styled.div`

`

const Cover = styled.div`
    width: 100%;
    height: 750px;
    background-color: ${props => props.color};
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const CoverBackground = styled.div`
    background-image: ${props => `url(${props.img})`};
    background-repeat: no-repeat;
    background-size: cover;
    height: 750px;
`

const Roles = styled.div`
    background-color: ${props => props.color};
    width: 100%;
    height: 130px;
`

const Photo = styled.img`
    width: 100%;
    height: auto;
`

const RolesPanel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
`

const RolesTitle = styled.div`
    align-self: center;
    font-weight: 600;
    font-size: ${fontSizes.normal};
`

const Role = styled.div`
    align-self: center;
    font-size: ${fontSizes.normal};
`

function ProjectStrip({ roles, cover, spread, rolesColor, coverColor }) {

  const _roles = (roles) => {
    return roles.map((role,index) => {
        return (
            <>
                <Role>
                    {role}
                </Role>
                {(index < roles.length -1) && (<Role>
                    •
                </Role>)}
            </>
        )
    })
  }

  return (
    <Wrapper>
        {spread ? (
            <CoverBackground img={cover}/>
        ) : (
            <Cover color={coverColor}>
                <Page nerrow>
                    <Photo src={cover}/>
                </Page>
            </Cover>            
        )}
        <Roles color={rolesColor}>
            <Page nerrow maxHeight>
                <RolesPanel>
                    <RolesTitle>
                        My Roles
                    </RolesTitle>
                    <Role>
                    
                    </Role>
                    {_roles(roles)}
                </RolesPanel>
            </Page>
        </Roles>
    </Wrapper>
  );
}

export default ProjectStrip; 