import React from 'react'

const Product = () => {
    const containerStyle={
        // backgroundColor :'rgb(240,240,240)',
        margin:'1rem',
        width:'13rem',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        borderRadius:'5px',
        border:'1px solid rgba(0,0,0,0.2)',
    };

    const productDetails={
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        marginTop:'7px'
    }

    const imgStyle = {
        margin:'3px',
        borderRadius:'4px'
    }

    const shortDescription={
        color:'black',
        fontSize:'1rem',
        margin:'0px 15px',
        textAlign:'justify'
    }

    const userRatings = {
        color:'black',
        fontSize:'1rem',
        marginTop:'3px',
        textAlign:'center'
    }

    const price={
        color:'black',
        fontSize:'1rem',
        margin:'3px 0px',
        textAlign:'center'
    }

  return (
    <>
        <div style={containerStyle}>
            <img src="https://picsum.photos/100" style={imgStyle} alt="A random Image😊" />
            <div style={productDetails}>
                <p style={shortDescription}>Lorem ipsum dolor sit, amet consectetur adipisicing 
                elit. </p>
                <p style={userRatings}>4.5 ⭐</p>
                <p style={price}>5678.99</p>
            </div>
        </div>
    </>
  )
}

export default Product