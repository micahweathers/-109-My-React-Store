import { useState, useEffect } from 'react'
import axios from 'axios';
import './Admin.css'
import CouponModal from '../components/CouponModal';

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
    const [filteredCoupons, setFilteredCoupons] = useState([])
    const [showFiltered, setShowFiltered] = useState(false)

    // Modal State
    const [modalOpen, setModalOpen] = useState(false)
    const [modalType, setModalType] = useState('') // 'edit' or 'delete'
    const [selectedCoupon, setSelectedCoupon] = useState(null)

    useEffect(() => {
        getCoupons()
    }, [])

    // GET coupons from API
    const getCoupons = async () => {
        try {
            const response = await axios({
                url: "http://127.0.0.1:5000/api/coupons",
                method: "GET"
            })
            console.log(response.data.coupons)
            setCoupons(response.data.coupons)
            setShowFiltered(false)
        } catch (error) {
            console.error("Error fetching coupons:", error)
        }
    }

    // GET filtered coupons (discount < 30)
    const getFilteredCoupons = async () => {
        try {
            const response = await axios({
                url: "http://127.0.0.1:5000/api/coupons/search",
                method: "GET"
            })
            console.log(response.data.data)
            setFilteredCoupons(response.data.data)
            setShowFiltered(true)
        } catch (error) {
            console.error("Error fetching filtered coupons:", error)
        }
    }

    // POST coupons to API
    const createCoupons = async () => {
        try {
            await axios({
                url: "http://127.0.0.1:5000/api/coupons",
                method: "POST", 
                headers: {"Content-Type": "application/json"},
                data: {
                    "code": couponCode,
                    "discount": parseInt(couponDiscount)
                }
            })
            setCouponCode("")
            setCouponDiscount("")
            getCoupons()
        } catch (error) {
            console.error("Error creating coupon:", error)
        }
    }

    // PUT - Update coupon
    const updateCoupon = async (id) => {
        const couponList = showFiltered ? filteredCoupons : coupons
        const coupon = couponList.find(c => c._id === id)
        setSelectedCoupon(coupon)
        setModalType('edit')
        setModalOpen(true)
    }

    const handleUpdateConfirm = async (newCode, newDiscount) => {
        try {
            await axios({
                url: `http://127.0.0.1:5000/api/coupons/${selectedCoupon._id}`,
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                data: {
                    "code": newCode,
                    "discount": newDiscount
                }
            })
            setModalOpen(false)
            setSelectedCoupon(null)
            if (showFiltered) {
                getFilteredCoupons()
            } else {
                getCoupons()
            }
        } catch (error) {
            console.error("Error updating coupon:", error)
        }
    }

    // DELETE - Delete coupon
    const deleteCoupon = async (id) => {
        const couponList = showFiltered ? filteredCoupons : coupons
        const coupon = couponList.find(c => c._id === id)
        setSelectedCoupon(coupon)
        setModalType('delete')
        setModalOpen(true)
    }

    const handleDeleteConfirm = async () => {
        try {
            await axios({
                url: `http://127.0.0.1:5000/api/coupons/${selectedCoupon._id}`,
                method: "DELETE"
            })
            setModalOpen(false)
            setSelectedCoupon(null)
            if (showFiltered) {
                getFilteredCoupons()
            } else {
                getCoupons()
            }
        } catch (error) {
            console.error("Error deleting coupon:", error)
        }
    }

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

    // Determine which coupon list to display
    const displayedCoupons = showFiltered ? filteredCoupons : coupons

    return (
        <div>
            <div className="admin-header">
                <h1>Store Administration</h1>
                <p className="subtitle">Manage your products and coupons</p>
            </div>

            <CouponModal 
                isOpen={modalOpen}
                onClose={() => {
                    setModalOpen(false)
                    setSelectedCoupon(null)
                }}
                onConfirm={modalType === 'edit' ? handleUpdateConfirm : handleDeleteConfirm}
                type={modalType}
                coupon={selectedCoupon}
            />

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

                        <button onClick={createCoupons}>Save Coupon</button>
                    </div>

                    <div className="coupon-filter-section">
                        <h4>
                            {showFiltered ? 'Coupons with Discount < 30%:' : 'Coupons List:'}
                        </h4>
                        <div className="filter-buttons">
                            <button 
                                className={!showFiltered ? 'filter-btn active' : 'filter-btn'}
                                onClick={getCoupons}
                            >
                                Show All
                            </button>
                            <button 
                                className={showFiltered ? 'filter-btn active' : 'filter-btn'}
                                onClick={getFilteredCoupons}
                            >
                                Discount &lt; 30%
                            </button>
                        </div>
                    </div>

                    {displayedCoupons.length === 0 ? (
                        <p className="empty-message">
                            {showFiltered ? "No coupons with discount less than 30%" : "There's no coupons"}
                        </p>
                    ) : (
                        displayedCoupons.map((coupon, index) => (
                            <div key={index} className="coupon-item">
                                <span>{coupon.code} - {coupon.discount}%</span>
                                <div className="button-group">
                                    <button onClick={() => updateCoupon(coupon._id)}>
                                        Edit
                                    </button>
                                    <button onClick={() => deleteCoupon(coupon._id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </section>
            </div>
        </div>
    )
}

export default Admin