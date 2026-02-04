import Button from '@components/Button/Button';
import FormItem from '@/pages/DetailProduct/components/FormItem';
import styles from '../styles.module.scss';

function ReviewProduct() {
    const {
        reviews,
        containerReview,
        noreview,
        replyForm,
        commentReplyTitle,
        commentTotes,
        commentFormCookiesConsent,
        btnSubmit
    } = styles;

    return (
        <div className={containerReview}>
            <div className={reviews}>NHẬN XÉT</div>

            <p className={noreview}>Chưa có nhận xét nào.</p>

            <div className={replyForm}>
                <div className={commentReplyTitle}>
                    HÃY LÀ NGƯỜI ĐẦU TIÊN NHẬN XÉT "VÀNG 10K"
                </div>

                <p className={commentTotes}>
                    Địa chỉ email của bạn sẽ không được công bố. Các trường bắt
                    buộc được đánh dấu
                </p>

                <form action=''>
                    {/* RATING */}
                    <FormItem
                        label={'Đánh giá của bạn'}
                        isRequired
                        typeChildren='rating'
                    />

                    {/* AREA */}
                    <FormItem
                        label={'Nhận xét của bạn'}
                        isRequired
                        typeChildren='textarea'
                    />

                    {/* NAME */}
                    <FormItem label={'Tên'} isRequired typeChildren='input' />

                    {/* EMAIL */}
                    <FormItem label={'Email'} isRequired typeChildren='input' />

                    <div className={commentFormCookiesConsent}>
                        <input type='checkbox' />
                        <span>
                            Lưu tên, email và trang web của tôi trong trình
                            duyệt này cho lần nhận xét tiếp theo.
                        </span>
                    </div>

                    <div className={btnSubmit}>
                        <Button content='GỬI' />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ReviewProduct;
