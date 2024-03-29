import { AspectRatio, Box,  MantineStyleProp, Text } from "@mantine/core";
import { Carousel } from '@mantine/carousel';
import { Link } from "react-router-dom";

const overlayBoxStyle : MantineStyleProp = {
    position: 'absolute',
    top: '45vh',
    left: '0',
    width: '100vw',
    height: '55vh',
    zIndex: 2, 
    background: 'rgba(0, 35, 71, 0.5)',
    padding:"2em",
    display:"flex", flexFlow:"column",gap:"0.8em"
  }


export const MainPage = () => {
  return (
    <Carousel withControls={false} withIndicators={false} orientation="vertical" height="100vh"  >
      <Carousel.Slide><EventBox videoUrl="https://player.vimeo.com/external/474230654.sd.mp4?s=8b8a072e4f3e357127ee81c15652a331d9bd51f2&profile_id=165&oauth2_token_id=57447761"/></Carousel.Slide>
      <Carousel.Slide><EventBox videoUrl="https://player.vimeo.com/external/531149374.sd.mp4?s=5bb7cfd88ad746dba4000caf702f4c72d0f23f17&profile_id=165&oauth2_token_id=57447761"/></Carousel.Slide>
      <Carousel.Slide><EventBox videoUrl="https://player.vimeo.com/external/573343630.hd.mp4?s=b0a3ab7af9daeb7ad98a4ab764f65c6b5e1b055f&profile_id=174&oauth2_token_id=57447761"/></Carousel.Slide>
    </Carousel>
  );
}

const EventBox = ({
  videoUrl
}: {
  videoUrl: string
}) => {
  const whiteText = (size: number) => {
    return {
      color: "white",
      fontSize: `${size}vW`
    }
  }
  return (
    <Box style={{ position: 'relative'}}>
      <PhoneVideoPlayer srcUrl={videoUrl} />
    
      <Box style={overlayBoxStyle}>
      <Text style={whiteText(5.2)}>親子で楽しむスナッグゴルフとパターゴルフ</Text> 
      <Text style={whiteText(5.2)}>主催：調布スポーツ協会</Text> 
      <Text style={whiteText(4.8)}>概要:</Text> 
      <Box style={{border: "solid", borderColor: "white",padding:"1.2em",display:"flex", flexFlow:"column",gap:"1.2em"}}>
        <Text style={whiteText(4.0)}>場所：東京都中野区中野4-1-1</Text>
        <Text style={whiteText(4.0)}>料金：一人100円</Text>
        <Text style={whiteText(4.0)}>内容：ヨネックス株式会社との協働事業として実施する、小学生を対象としたスナッグゴルフとパターゴルフの教室</Text>
        <Link to={"https://www.chofucity-sports.or.jp/tabid/254/Default.aspx"}  style={{fontSize:"4.0vw", border: "solid", borderColor:"white",color:"white", width:"100%",textAlign: "center"  } }>詳細</Link>
      </Box>
      </Box>
    </Box>
    )
}


const PhoneVideoPlayer = ({
  srcUrl
}: {
  srcUrl: string
}) => {
  return (
    <AspectRatio
      ratio={9 / 16}
      style={{
        margin: "auto",
        position: 'relative' 
      }}
    >
      <video
        loop
        muted
        autoPlay
        src={srcUrl}
        style={{
          width: '100vw', 
          height: '100vh', 
          position: 'absolute', 
          top: 0,
          left: 0
        }}
      />
    </AspectRatio>
  )
}
