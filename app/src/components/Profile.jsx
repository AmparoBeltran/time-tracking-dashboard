import { ProfileStyled } from "./styles/Profile.styled";

export default function Profile({ handleClick, active }) {
    return (
        <ProfileStyled>
            <div className="container">
                <div className="report">
                    <header>
                        <img src="/images/image-jeremy.png" />
                        <div className="heading">
                            <p>Report for</p>
                            <h1>Jeremy </h1>
                            <h1>Robson</h1>
                        </div>
                    </header>
                </div>
                <div className="buttons">
                    <button className={active === 'daily' ? 'active' : ''} onClick={() => handleClick('daily')}>Daily</button>
                    <button className={active === 'weekly' ? 'active' : ''} onClick={() => handleClick('weekly')}>Weekly</button>
                    <button className={active === 'monthly' ? 'active' : ''} onClick={() => handleClick('monthly')}>Monthly</button>

                </div>
            </div>
        </ProfileStyled>
    )
}

