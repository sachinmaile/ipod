import React from "react";

const MenuPad=(props)=>{
    return (
        <div className="Menupad-outlet">
            <div className="wheel">
                <div className="top"><b>Menu</b></div>
                <div className="right">
                    <img style={styles.image} src='https://cdn-icons-png.flaticon.com/128/1/1371.png' alt='next'></img>
                </div>
                <div className="bottom">
                    <img style={styles.image} src="https://cdn-icons-png.flaticon.com/128/5725/5725942.png" alt="play/pause"></img>
                </div>
                <div className="left">
                    <img style={styles.image} src="https://cdn-icons-png.flaticon.com/128/2/2147.png" alt="previous"></img>
                </div>
                <div className="ok-button"></div>
            </div>
        </div>
    )
}

const styles={
    image:{
        height:20,
        width:20,
        cursor:PointerEvent
    }
}

export default MenuPad;