import { useContext } from 'react';
import styles from './Styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import Button from '@components/Button/Button';
import PaymentMethods from '@components/PaymentMethods/PaymentMethods';
import { handleTotalPrice } from '@/utils/helper';

function RightBody({ handleExternalSubmit }) {
    const { rightBody, title, items, item, total, subTotal, payment, btn } =
        styles;

    const { listProductCart } = useContext(SideBarContext);

    return (
        <div className={rightBody}>
            <p className={title}> ĐƠN HÀNG CỦA BẠN</p>

            <div className={items}>
                {listProductCart.map((product) => (
                    <div className={item}>
                        <img src={product.images[0]} alt='' />

                        <div>
                            <p>{product.name}</p>
                            <p>Price: {product.price}</p>
                            <p>Size: {product.size}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className={subTotal}>
                <p>Tổng phụ</p>
                <p>${handleTotalPrice(listProductCart).toFixed(2)}</p>
            </div>

            <div className={total}>
                <p>TỔNG CỘNG</p>
                <p>${handleTotalPrice(listProductCart).toFixed(2)}</p>
            </div>

            <div className={payment}>
                <input type='radio' id='qr' name='fav_language' value='qr' /> {' '}
                <label for='qr'>MÃ QR</label>
            </div>

            <div>
                <input type='radio' id='cod' name='fav_language' value='cod' />{' '}
                <label for='cod'>Thanh toán khi giao hàng</label>
            </div>

            <div className={btn}>
                <Button
                    content={'ĐẶT ĐƠN HÀNG'}
                    onClick={handleExternalSubmit}
                />
            </div>

            <PaymentMethods />
        </div>
    );
}

export default RightBody;
