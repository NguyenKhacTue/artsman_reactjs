import styles from '../styles.module.scss';

function InformationProduct() {
    const { itemInfo, containerInfo, title, content } = styles;

    const dataInfo = [
        { id: 1, title: 'Kích cỡ', content: 'S, M, L' },
        { id: 2, title: 'Chất liệu', content: 'Fleece' },
        { id: 3, title: 'Màu sắc', content: 'Đen, Xanh' }
    ];

    return (
        <div className={containerInfo}>
            {dataInfo.map((item, index) => (
                <div key={index} className={itemInfo}>
                    <div className={title}>{item.title}</div>
                    <div className={content}>{item.content}</div>
                </div>
            ))}
        </div>
    );
}

export default InformationProduct;
