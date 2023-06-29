import Image from 'next/image';
import { FC } from 'react';
import { Carousel as CarouselComponent } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



type CarouselData = {
  value: string;
  label: string
}

interface Props {
  data: CarouselData[]
}

const Carousel: FC<Props> = ({data}) => {

  return (
    <div>
      <CarouselComponent
        autoPlay={true}
        interval={3000}
        transitionTime={500}
        infiniteLoop
        showThumbs={true}
        showStatus={false}
        showIndicators={true}
        showArrows={true}
        stopOnHover={false}
        centerMode={true}
        centerSlidePercentage={10}
        className='w-full items-center justify-center'
      >
        {data.map(item => (
            <Image className='px-4 items-center align-middle justify-center' key={item.value} width={128} height={128} src={item.value} alt={item.label} />
        ))}

      </CarouselComponent>
    </div>
  );
}

export default Carousel;
