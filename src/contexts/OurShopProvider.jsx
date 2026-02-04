import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getProducts } from '@/apis/productsService';

export const OurShopContext = createContext();

export const OurShopProvider = ({ children }) => {
    const sortOptions = [
        { label: 'Sắp xếp mặc định', value: '0' },
        { label: 'Sắp xếp theo độ phổ biến', value: '1' },
        { label: 'Sắp xếp theo đánh giá trung bình', value: '2' },
        { label: 'Sắp xếp theo mới nhất', value: '3' },
        { label: 'Sắp xếp theo giá: thấp đến cao', value: '4' },
        { label: 'Sắp xếp theo giá: cao đến thấp', value: '5' }
    ];

    const showOptions = [
        { label: '8', value: '8' },
        { label: '12', value: '12' },
        { label: 'Tất cả', value: 'all' }
    ];

    const [sortId, setSortId] = useState('0');
    const [showId, setShowId] = useState('8');
    const [isShowGrid, setIsShowGrid] = useState(true);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadMore, setIsLoadMore] = useState(false);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    const handleLoadMore = () => {
        const query = {
            sortType: sortId,
            page: page + 1,
            limit: showId
        };

        setIsLoadMore(true);

        getProducts(query)
            .then((res) => {
                setProducts((prev) => {
                    return [...prev, ...res.contents];
                });
                setPage(+res.page);
                setTotal(res.total);
                setIsLoadMore(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoadMore(false);
            });
    };

    const values = {
        sortOptions,
        showOptions,
        setSortId,
        setShowId,
        setIsShowGrid,
        products,
        isShowGrid,
        isLoading,
        handleLoadMore,
        total,
        isLoadMore
    };

    useEffect(() => {
        const query = {
            sortType: sortId,
            page: 1,
            limit: showId
        };
        setIsLoading(true);
        getProducts(query)
            .then((res) => {
                setProducts(res.contents);
                setTotal(res.total);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    }, [sortId, showId]);

    return (
        <OurShopContext.Provider value={values}>
            {children}
        </OurShopContext.Provider>
    );
};
