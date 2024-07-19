import Card from 'react-animated-3d-card'

export const CreditCard = () => {
  return (
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
        ></img>
        <img
          style={{
            position: 'absolute',
            right: '25px',
            top: '25px',
            height: '50px',
          }}
          src="https://www.tuya.com.co/sites/all/themes/tuya/assets/images/pre-home/logo_tuya.svg"
          className="card-item__chip"
          alt="credit card chip"
        ></img>
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
        <label
          style={{
            position: 'absolute',
            bottom: '60px',
            right: '25px',
            opacity: 0.5,
          }}
        >
          Expires
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
          Paul Doe
        </label>
        <label
          style={{
            position: 'absolute',
            bottom: '25px',
            right: '25px',
            opacity: 1,
            fontSize: '25px',
          }}
        >
          12/24
        </label>
      </div>
    </Card>
  )
}
