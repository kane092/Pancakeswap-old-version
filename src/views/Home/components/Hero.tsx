import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex, Heading, Button } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import useTheme from 'hooks/useTheme'
import { SlideSvgDark, SlideSvgLight } from './SlideSvg'
import CompositeImage, { getSrcSet, CompositeImageProps } from './CompositeImage'
import bannerimg from '../images/new-bunny.png'

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }  
`

const fading = () => keyframes`
  from {
    opacity: 0.9;
  }
  50% {
    opacity: 0.1;
  }
  to {
    opacity: 0.9;
  }  
`

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -3px;
`

const BunnyWrapper = styled.div`
  width: 100%;
  animation: ${flyingAnim} 3.5s ease-in-out infinite;
`

const StarsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  & :nth-child(2) {
    animation: ${fading} 2s ease-in-out infinite;
    animation-delay: 1s;
  }

  & :nth-child(3) {
    animation: ${fading} 5s ease-in-out infinite;
    animation-delay: 0.66s;
  }

  & :nth-child(4) {
    animation: ${fading} 2.5s ease-in-out infinite;
    animation-delay: 0.33s;
  }
`

const imagePath = '/images/home/lunar-bunny/'
// const imageSrc = 'bunny'
const imageSrc = 'new-bunny'

const starsImage: CompositeImageProps = {
  path: '/images/home/lunar-bunny/',
  attributes: [
    { src: 'star-l', alt: '3D Star' },
    { src: 'star-r', alt: '3D Star' },
    { src: 'star-top-r', alt: '3D Star' },
  ],
}

const Hero = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()
  return (
    <>
      {/* <BgWrapper>
        <InnerWrapper>{theme.isDark ? <SlideSvgDark width="100%" /> : <SlideSvgLight width="100%" />}</InnerWrapper>
      </BgWrapper> */}
      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="flex-start"
        mt={[account ? '280px' : '50px', null, 0]}
        id="homepage-hero"
      >
        <Flex flex="1" flexDirection="column" maxWidth="50%" className="hero-txt-col">
          <Heading scale="xxl" color="secondary" className="black-title heading-title" mb="5px">
            {t('The galaxy is run by ')}
          </Heading>
          <Heading scale="xxl" color="secondary" className="heading-title" mb="5px">
            {t('the Intergalactic Cockroach.')}
          </Heading>
          {/* <Heading scale="xxl" color="secondary" mb="24px" className="black-title heading-title">
            {t('Cockroach.')}
          </Heading> */}
          <Heading scale="md" mb="24px" className="txt-hero">
            {t('Trade, win & Play2Earn crypto on the decentralized kingdom of the Intergalactic Cockroach. ')}
          </Heading>
          <Flex className="btn-hero">
            <div style={{marginTop:20}}>
              <a href="https://pancakeswap.finance/swap" rel="noreferrer" target="_blank" >
                <Button className="btn btn-theme" mr="8px"> {t('Buy ICC on Pancake')}
                  <span><img src="/logo_transparent.png" alt="Pancake_logo" style={{width:"18px", verticalAlign:'middle', position:'relative', top:'-2px', marginLeft:'4px'}}/></span>
                </Button>
              </a>
            </div>
            <div style={{marginTop:20}}>
              <Link to="/swap" className="btn-outline">
                <Button variant={!account ? 'secondary' : 'primary'}>{t('Trade Now')}</Button>
              </Link>
            </div>
            
          </Flex>
          <Flex className="btn-hero btn-hero1">
            <div style={{marginTop:20}}>
              {/* {!account && <ConnectWalletButton mr="8px" />} */}
              {account && <p style={{fontSize:"18px", color:'#616161'}}>{`Contract Address: ${account.substring(0,5)}....${account.substring(account.length-5,account.length)}`}<span style={{marginLeft:"5px"}}><img src="/images/clipboard.png" alt="clipboard" width="17px"/></span></p>}
            </div>
          </Flex>
          
        </Flex>
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          position="relative"
          className="bannerImgslide"
        >
          {/* <BunnyWrapper>
            <img src={`${imagePath}${imageSrc}.png`} srcSet={getSrcSet(imagePath, imageSrc)} alt={t('Lunar bunny')} />
          </BunnyWrapper> */}
          <BunnyWrapper className="hero-banner-fix">
            <img src={bannerimg} alt={t('Lunar bunny')} />
          </BunnyWrapper>
          {/* <StarsWrapper>
            <CompositeImage {...starsImage} />
          </StarsWrapper> */}
        </Flex>
      </Flex>
    </>
  )
}

export default Hero
