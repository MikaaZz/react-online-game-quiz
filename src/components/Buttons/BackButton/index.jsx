import { backIcon } from '../../../assets/images'
import { Link } from 'react-router-dom'

function BackButton() {
  return (
    <Link to={'/'}>
      <button className='back-button'>
        <img
          src={backIcon}
          alt=''
          style={{ marginRight: '8px', width: '40px' }}
        />
        Voltar
      </button>
    </Link>
  )
}
export default BackButton
