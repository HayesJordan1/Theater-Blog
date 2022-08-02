import './write.css'


function Write () {
    return (
        <>
        <img className='writeImg' 
        src='https://th.bing.com/th/id/R.653768b6ecbbe9d38fe08473421a69f8?rik=NOsib1Lx73YSHw&pid=ImgRaw&r=0'
        />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display: "none"}}/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Share your Food!' type="text" className='writeInput writeText'></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
        </>
    )
}
export default Write