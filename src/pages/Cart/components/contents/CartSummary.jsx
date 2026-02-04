import React from 'react';
import styles from '../../styles.module.scss';
import Button from '@components/Button/Button';
import cls from 'classnames';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import LoadingCart from '@/pages/Cart/components/Loading';
import PaymentMethods from '@components/PaymentMethods/PaymentMethods';
import { StepperContext } from '@/contexts/SteperProvider';
import { handleTotalPrice } from '@/utils/helper';

const CartSummary = () => {
    const {
        containerSummary,
        title,
        boxTotal,
        price,
        subTotal,
        totals,
        space,
        containerRight
    } = styles;
    const { listProductCart, isLoading } = useContext(SideBarContext);
    const { setCurrentStep } = useContext(StepperContext);

    const handleProcessCheckout = () => {
        setCurrentStep(2);
    };

    return (
        <div className={containerRight}>
            <div className={containerSummary}>
                <div className={title}>TỔNG GIỎ HÀNG</div>

                <div className={cls(boxTotal, subTotal)}>
                    <div>Tổng phụ</div>
                    <div className={price}>
                        ${handleTotalPrice(listProductCart).toFixed(2)}
                    </div>
                </div>

                <div className={cls(boxTotal, totals)}>
                    <div>TỔNG CỘNG</div>
                    <div>${handleTotalPrice(listProductCart).toFixed(2)}</div>
                </div>

                <Button
                    content={'TIẾN HÀNH THANH TOÁN'}
                    onClick={handleProcessCheckout}
                />
                <div className={space} />
                <Button content={'TIẾP TỤC SHOPPING'} isPriamry={false} />

                {isLoading && <LoadingCart />}
            </div>

            <PaymentMethods />
        </div>
    );
};

export default CartSummary;
