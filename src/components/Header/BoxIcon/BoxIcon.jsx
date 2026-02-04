import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';
import insIcon from '@icons/svgs/insIcon.svg';
import shopeeIcon from '@icons/svgs/shopeeIcon.svg';

function BoxIcon({ type, href }) {
    const { boxIcon } = styles;

    const handleRenderIcon = (type) => {
        switch (type) {
            case 'fb':
                return fbIcon;
            case 'ins':
                return insIcon;
            case 'shopee':
                return shopeeIcon;
        }
    };

    const handleClick = () => {
        if (href) {
            window.open(href, '_blank');
        }
    };

    return (
        <div
            className={boxIcon}
            onClick={handleClick}
            style={{ cursor: href ? 'pointer' : 'default' }}
        >
            <img src={handleRenderIcon(type)} alt={type} />
        </div>
    );
}

export default BoxIcon;
