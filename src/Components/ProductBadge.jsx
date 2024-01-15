import React from 'react'
const ProductBadge = ({badge}) => {
    
    if(badge === "choice"){
        return (
            <span className="test-xs xl: test-sm bg-slate-800 text-white p-1">Amazon's <span className="bg-orange-500">Choice</span></span>
          )

    }

    else if(badge === "seller"){
        return (
            <span className="test-xs xl: test-sm bg-orange-500 text-white p-1">
              #1 Best Seller
            </span>
          )

    }
    else if(badge === "limited"){
        return (
            <span className="test-xs xl: test-sm bg-red-500 text-white p-1">
              Limited Time Deal
            </span>
          )
        
    }
 
}

export default ProductBadge
