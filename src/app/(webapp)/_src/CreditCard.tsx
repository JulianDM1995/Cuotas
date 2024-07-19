import { Box } from '@mantine/core'
import Card from 'react-animated-3d-card'

export const CreditCard = () => {
  return (
    <Box style={{ transform: 'scale(0.5)' }} w={'90%'}>
      <Card
        style={{
          background: 'linear-gradient(to right, #f0f0f0, #c1c1c1, #e4e4e4)',
          width: '450px',
          height: '300px',
          cursor: 'pointer',
        }}
        onClick={() => console.log('Hola')}
      >
        <div>
          <img
            style={{
              position: 'absolute',
              left: '25px',
              top: '25px',
              height: '50px',
            }}
            src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
            className="card-item__chip"
            alt="credit card chip"
          />
          <img
            style={{
              position: 'absolute',
              right: '25px',
              top: '25px',
              height: '50px',
            }}
            src="https://www.tuya.com.co/sites/all/themes/tuya/assets/images/pre-home/logo_tuya.svg"
            className="card-item__chip"
            alt="credit card logo"
          />
        </div>
        <div
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: '30px',
            }}
          >
            <label>1234</label>
            <label style={{ marginLeft: '30px' }}>1234</label>
            <label style={{ marginLeft: '30px' }}>1234</label>
            <label style={{ marginLeft: '30px' }}>1234</label>
          </div>
        </div>
        <div>
          <label
            style={{
              position: 'absolute',
              bottom: '60px',
              left: '25px',
              opacity: 0.5,
            }}
          >
            Card holder
          </label>
        </div>

        <div>
          <label
            style={{
              position: 'absolute',
              bottom: '25px',
              left: '25px',
              opacity: 1,
              fontSize: '25px',
            }}
          >
            Yohana Jimenez
          </label>
          <img
            style={{
              position: 'absolute',
              bottom: '25px',
              right: '25px',
              height: '50px',
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/309px-Mastercard-logo.svg.png"
            alt="Mastercard logo"
          />
        </div>
      </Card>
    </Box>
  )
}
