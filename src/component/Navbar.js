import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
const Navbar = ({ authenticate, setAuthenticate }) => {

    const menuList = ['Women', 'Men', 'Baby', 'Kids', 'Home', 'Sale']
    // react hook 
    const navigate = useNavigate()
    const goToLogin = () => {
        navigate('/login')
    }
    const goToHomepage = () => {
        navigate('/')
    }
    const handleLogout = () => {
        setAuthenticate(false); // 로그인 상태 false로 변경
        alert('로그아웃 되었습니다.');
        navigate('/login'); // 로그인 페이지로 리디렉트
    };

    const search = async (event) => {
        if (event.key === "Enter") {
            // 입력한 검색어어
            let keyword = event.target.value
            // url 바꾸기
            navigate(`/?q=${keyword}`);
        }
    }

    return (
        <div>
            <div>
                {!authenticate ? (
                    <div className='login-button' onClick={goToLogin}>
                        <FontAwesomeIcon icon={faUser} />
                        <div>로그인</div>
                    </div>
                ) : (
                    <div className='login-button' onClick={handleLogout}>
                        <FontAwesomeIcon icon={faUser} />
                        <div>로그아웃</div>
                    </div>
                )}
            </div>
            <div className='nav-section'>
                <img width='100px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWxzF7ValZVpOSk3lDkD52SJLipvmhaXfpAw&s' alt='' onClick={goToHomepage} />
            </div>
            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map(menu => <li>{menu}</li>)}
                </ul>
                <div className='search-area'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type='text' placeholder='제품명을 검색하세요' onKeyDown={(event) => search(event)} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
