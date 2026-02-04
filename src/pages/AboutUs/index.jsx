import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import Logos from '@/pages/AboutUs/components/Logos';

function AboutUs() {
    const {
        container,
        functionBox,
        specialText,
        btnBack,
        containerTitle,
        line,
        title,
        textS,
        textL,
        containerContent,
        des
    } = styles;

    const dataContents = [
        {
            id: '1',
            url: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-copy-min.jpg',
            des: 'Ac eget cras augue nisi neque lacinia in aliquam. Odio pellentesque sed ultrices dolor amet nunc habitasse proin consec. tur feugiat egestas eget.'
        },
        {
            id: '2',
            url: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-copy-2-min.jpg',
            des: 'Ac eget cras augue nisi neque lacinia in aliquam. Odio pellentesque sed ultrices dolor amet nunc habitasse proin consec. tur feugiat egestas eget.'
        },
        {
            id: '3',
            url: 'http://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-min.jpg',
            des: 'Ac eget cras augue nisi neque lacinia in aliquam. Odio pellentesque sed ultrices dolor amet nunc habitasse proin consec. tur feugiat egestas eget.'
        }
    ];

    return (
        <>
            <MyHeader />

            <MainLayout>
                <div className={container}>
                    <div className={functionBox}>
                        <div>
                            Home &gt;{' '}
                            <span className={specialText}>About us</span>
                        </div>
                        <div
                            className={btnBack}
                            onClick={() => handleBackPreviousPage()}
                        >
                            &lt; Return to previous page
                        </div>
                    </div>

                    <div className={containerTitle}>
                        <div className={line}>
                            <div className={title}>
                                <div className={textS}>
                                    Chúng Tôi Đang Cố Gắng Tạo Ra
                                </div>
                                <div className={textL}>
                                    Website Thương Hiệu Artsman
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={containerContent}>
                        {dataContents.map((item) => (
                            <div key={item.id}>
                                <img src={item.url} alt='' />
                                <div className={des}>{item.des}</div>
                            </div>
                        ))}
                    </div>

                    <Logos />
                </div>
            </MainLayout>

            <MyFooter />
        </>
    );
}

export default AboutUs;
