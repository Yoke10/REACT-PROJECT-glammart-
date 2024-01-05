import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function SizeAvatars() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (index) => {
    console.log(`Clicked on Avatar ${index + 1}`);
    // Add your custom logic for onClick here
  };

  const imageUrls = [
    'https://media.designrush.com/inspiration_images/136124/conversions/_1519762849_545_990__1513771354_519_louis-v1_b31600c58738-mobile.jpg',
    'https://yt3.googleusercontent.com/WggXR-cqxBtQN9zX9BpUX6gNTkn_zNjMAIzDe_n4SQP90MLrrqywFqWNSnljNuDWx9dQ_urf=s900-c-k-c0x00ffffff-no-rj',
    'https://yt3.googleusercontent.com/ytc/APkrFKboSMrcOpxbJl7qUM3Ct8ZGXbD_WXqk778GmnJRDQ=s900-c-k-c0x00ffffff-no-rj',
    'https://1000logos.net/wp-content/uploads/2020/07/SUGAR-Cosmetics-Logo1.jpg',
    'https://cdn.shopify.com/s/files/1/0260/2975/2399/products/62_Victoria_s-Secret_1200x1200.jpg?v=1596471827',
    'https://1000logos.net/wp-content/uploads/2016/11/Chanel-Emblem.jpg',
    'https://image.slidesharecdn.com/calvinkleinfinal-170413140837/75/calvin-klein-final-1-2048.jpg?cb=1666039304',
  ];

  return (
    <Stack direction="row" spacing={2} style={{ paddingLeft: '40px' }}>
      {imageUrls.map((imageUrl, index) => (
        <Avatar
          key={index}
          alt={`Avatar ${index + 1}`}
          src={imageUrl}
          sx={{
            width: 150,
            height: 150,
            boxShadow: hoveredIndex === index ? '0 0 10px rgba(0, 0, 0, 0.2)' : 'none',
            transition: 'box-shadow 0.3s ease-in-out',
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        />
      ))}
    </Stack>
  );
}
