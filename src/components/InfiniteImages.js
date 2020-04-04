import React from "react"
import PropTypes from "prop-types"
import InfiniteScroll from "react-infinite-scroll-component"
import axios from "axios"
import "./gallery.css"


const ImageGallery = ({ images, loading, fetchImages }) => {
    // Create gallery here
    return (
      <InfiniteScroll
        dataLength={images.length}
        next={() => fetchImages()}
        hasMore={true}
        loader={
          <p style={{ textAlign: "center", marginTop: "1%" }}>
            More doggo incoming 🐕 🐕...
          </p>
        }
      >
        <div className="image-grid">
          {!loading
            ? images.map(image => (
                <div className="image-item" key={image.id}>
                  <img src={image.urls.regular} alt={image.alt_description} />
                </div>
              ))
            : ""}
        </div>
      </InfiniteScroll>
    )
  }