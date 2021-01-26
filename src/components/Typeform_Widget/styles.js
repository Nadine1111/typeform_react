import styled from '@emotion/styled'

const myButton = styled.button`
  color: ${props =>
    props.primary ? 'hotpink' : 'turquoise'};
`

const Container = styled.div(props => ({
  display: 'flex',
  flexDirection: props.column && 'column'
}))


export default myButton