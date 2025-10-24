import './Admin.css'
import { useState } from 'react'

function Admin() {
    // Product State
    const [productTitle, setProductTitle] = useState("")
    const [productCategory, setProductCategory] = useState("")
    const [productImage, setProductImage] = useState("")
    const [productPrice, setProductPrice] = useState("")
    const [products, setProducts] = useState([])

    // Coupon State
    const [couponCode, setCouponCode] = useState("")
    const [couponDiscount, setCouponDiscount] = useState("")
    const [coupons, setCoupons] = useState([])

    function saveProduct() {
        const newProduct = {
            title: productTitle,
            category: productCategory,
            image: productImage,
            price: productPrice
        }
        
        setProducts([...products, newProduct])
        setProductTitle("")
        setProductCategory("")
        setProductImage("")
        setProductPrice("")
    }

    function saveCoupon() {
        const newCoupon = {
            code: couponCode, 
            discount: couponDiscount
        }
        
        setCoupons([...coupons, newCoupon])
        setCouponCode("")
        setCouponDiscount("")
    }

    return (
        <div>
            <div className="admin-header">
                <h1>Store Administration</h1>
                <p className="subtitle">Manage your products and coupons</p>
            </div>

            <div className='admin-sections'>
                <section>
                    <h3>Add Products</h3>
                    <div className="admin-card">
                        <div>
                            <label>Title</label>
                            <input 
                                type="text"
                                value={productTitle}
                                onChange={(e) => setProductTitle(e.target.value)}
                            />
                        </div>

                        <div>
                            <label>Category</label>
                            <input 
                                type="text"
                                value={productCategory}
                                onChange={(e) => setProductCategory(e.target.value)}
                            />
                        </div>

                        <div>
                            <label>Image (URL)</label>
                            <input 
                                type="text"
                                value={productImage}
                                onChange={(e) => setProductImage(e.target.value)}
                            />
                        </div>

                        <div>
                            <label>Price</label>
                            <input 
                                type="number"
                                value={productPrice}
                                onChange={(e) => setProductPrice(e.target.value)}
                            />
                        </div>

                        <div>
                            <button onClick={saveProduct}>Save Product</button>
                        </div>
                    </div>

                    <h4>Products List:</h4>
                    {products.length === 0 ? (
                        <p className="empty-message">There are no products</p>
                    ) : (
                        <div className="products-grid">
                            {products.map((product, index) => (
                                <div key={index} className="product-card">
                                    <span className="category-badge">{product.category}</span>
                                    <img src={product.image} alt={product.title} />
                                    <div className="product-info">
                                        <h5>{product.title}</h5>
                                        <p>${product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                <section>
                    <h3>Add Coupons</h3>

                    <div className="admin-card">
                        <div>
                            <label>Code</label>
                            <input 
                                type="text"
                                value={couponCode} 
                                onChange={(e) => setCouponCode(e.target.value)} 
                            />
                        </div>

                        <div>
                            <label>Discount</label>
                            <input 
                                type="number"
                                value={couponDiscount}
                                onChange={(e) => setCouponDiscount(e.target.value)} 
                            />
                        </div>

                        <button onClick={saveCoupon}>Save Coupon</button>
                    </div>

                    <h4>Coupons List:</h4>
                    {coupons.length === 0 ? (
                        <p className="empty-message">There's not coupons</p>
                    ) : (
                        coupons.map((coupon, index) => (
                            <p key={index} className="coupon-item">
                                {coupon.code} - {coupon.discount}%
                            </p>
                        ))
                    )}
                </section>
            </div>
        </div>
    )
}

export default Admin