import { ToastAndroid } from 'react-native';
export function toast(message) {
    ToastAndroid.showWithGravity(message, ToastAndroid.CENTER, ToastAndroid.SHORT)
}
export function findCartTotal(cart) {
    var total = 0;
    cart.map((item, index) => {
        total +=
            item.productListings[item.indexOfVariantSelectedByCustomer].sellingPrice *
            item.productCountInCart;
    });
    return total;
}
export function createDefaultVariantObject(prodArr) {
    let finalArray = [];

    prodArr.map((item, index) => {
        if (item && item.productResponse) {
            finalArray.push({ productListings: [{ variantValues: [item.productResponse.productListings[0].variantValues[0]] }] })
        }
    })

    console.log('final Array:::', finalArray)
    return finalArray;
}