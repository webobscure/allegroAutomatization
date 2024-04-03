import Client from 'shopify-buy'

const client = Client.buildClient({
    domain: "50f2fa.myshopify.com",
    storefrontAccessToken: "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"
    
})

export const fetchAllProducts = async () => {
    try {
        const products = await client.product.fetchAll();
        return products
    } catch (err) {
        console.error('Error fetching products', err)
        throw err;
    }
}