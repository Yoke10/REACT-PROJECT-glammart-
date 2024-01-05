import { Carousel } from 'react-carousel-minimal';

function MyImageCarousel() {
 const data = [
    {
      image: "https://www.shutterstock.com/image-vector/ad-banner-natural-beauty-products-260nw-1780339220.jpg",
      
    },
    {
      image: "https://www.blushbeebeauty.com/cdn/shop/files/Blushbee-organic-beauty-ExploreNew-Apr17-2023_1_1000x.jpg?v=1682402785",
      
    },
    {
      image: "https://st3.depositphotos.com/3877249/37303/v/1600/depositphotos_373033138-stock-illustration-cosmetic-products-in-water-splash.jpg",
      
    },
    {
      image: "https://www.shutterstock.com/image-vector/beauty-make-banner-template-face-600nw-1926318266.jpg",
      
    },
    {
      image: "https://img.freepik.com/premium-vector/cosmetic-fashion-sale-promotion-social-media-facebook-cover-banner-template_225928-53.jpg",
      
    },
    {
      image: "https://cdnus.globalso.com/xingzirain/ebbc32203c39808d128769eca29530f.jpg",
      
    },
    {
      image: "https://www.pearlfalco.com/wp-content/uploads/2022/05/homepage-banner-may-v1c.jpg",
      
    },
    {
      image: "https://previews.123rf.com/images/mousemd/mousemd2105/mousemd210500020/169550714-hello-summer-concept-banner-horizontal-with-realistic-detailed-3d-sunscreen-moisturizer-lotion-cream.jpg",
      
    },
    {
      image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/6b6691ae-d615-4845-a0c9-b868585f4616.__CR0,0,970,300_PT0_SX970_V1___.jpg",
      
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h2></h2>
        <p></p>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="900px"
            height="300px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            //thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MyImageCarousel;