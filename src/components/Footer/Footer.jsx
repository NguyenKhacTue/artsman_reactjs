import { dataMenu } from '@components/Footer/constant';
import styles from './styles.module.scss';

function MyFooter() {
    const { container, boxNav } = styles;
    return (
        <div className={container}>
            <div
                style={{
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <img
                    src='http://localhost:5173/src/assets/icons/images/anhlogo.png'
                    alt='Logo'
                    width={150}
                    height={150}
                    style={{
                        filter: 'invert(1) brightness(1.2)',
                        borderRadius: '8px'
                    }}
                />
            </div>

            <div className={boxNav}>
                {dataMenu.map((item) => (
                    <div>{item.content}</div>
                ))}
            </div>

            <div>
                <p
                    style={{
                        textAlign: 'center'
                    }}
                >
                    Đảm Bảo Thanh Toán An Toàn
                </p>
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png'
                    alt=''
                />
            </div>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                Copyright © 2025 Artsman. All Rights Reserved.
            </div>
        </div>
    );
}

export default MyFooter;
