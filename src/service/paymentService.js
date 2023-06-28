import request from '~/utils/request';

export const getUrlVnPay = async (data) => {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        const res = await request.post(
            '/vnPay/url',
            {
                packageId: data.packageId,
                recruiterId: user.userId,
                quantity: data.quantity,
                bankCode: data.bankCode,
                orderDesc: data.orderDesc,
                price: data.price,
            },
            {
                headers: {
                    Authorization: 'Bearer ' + user.accessToken,
                },
            },
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
};