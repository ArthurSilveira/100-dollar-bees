import React from 'react'
import styled from '@emotion/styled'

function Footer(props) {

  return (
    <PageFooter>
      There will be some links here to discord, twitter etc
    </PageFooter>
  )
}

const PageFooter = styled.div`
  padding: var(--space-inset--xxl);  
  background: ${p => p.theme.colors.foreground};
`

export default Footer