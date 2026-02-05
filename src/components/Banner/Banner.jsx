import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './styles.module.scss';

function Banner() {
    const navigate = useNavigate();
    const { container, content, title, des } = styles;

    const handleGoToShop = () => {
        navigate('/shop');
    };

    return (
        <div className={container}>
            <div className={content}>
                <h1 className={title}>Artsman Official</h1>
                <div className={des}>
                    Make yours celebrations even more special this years with
                    beautiful.
                </div>

                <div
                    style={{
                        width: '172px'
                    }}
                >
                    <Button content={'Go to shop'} onClick={handleGoToShop} />
                </div>
            </div>
        </div>
    );
}

export default Banner;
