import React, { useState, useEffect, useCallback, useMemo } from 'react';
import homepage_tutorial_navigation_button from '../../assets/homepage/homepage-tutorial-navigation-button.png';
import homepage_tutorial_navigation_button_toggle from '../../assets/homepage/homepage-tutorial-navigation-button-toggle.png';
import video_Alege_Data from '../../assets/homepage/video-1.mkv'
import video_Participanti from '../../assets/homepage/video-2.mkv'
import video_Finante from '../../assets/homepage/video-3.mkv'
import video_Locatie from '../../assets/homepage/video-4.mkv'
import video_Transport from '../../assets/homepage/video-5.mkv'
import video_Catering from '../../assets/homepage/video-6.mkv'
import video_Activitati from '../../assets/homepage/video-7.mkv'
import './HomePage.css'

export const HomePage = () => {

  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const buttons = useMemo(() => [
    { stateName: 'is_First_ImageButton_Toggle', isToggled: false, videoSrc: video_Alege_Data },
    { stateName: 'is_Second_ImageButton_Toggle', isToggled: false, videoSrc: video_Participanti },
    { stateName: 'is_Third_ImageButton_Toggle', isToggled: false, videoSrc: video_Finante },
    { stateName: 'is_Fourth_ImageButton_Toggle', isToggled: false, videoSrc: video_Locatie },
    { stateName: 'is_Fifth_ImageButton_Toggle', isToggled: false, videoSrc: video_Transport },
    { stateName: 'is_Sixth_ImageButton_Toggle', isToggled: false, videoSrc: video_Catering },
    { stateName: 'is_Seventh_ImageButton_Toggle', isToggled: false, videoSrc: video_Activitati },
  ], []);

  const [currentVideoSource, setCurrentVideoSource] = useState(video_Alege_Data);

  const updateVideoOnIndexChange = useCallback((index) => {
    setActiveButtonIndex(index);
    setCurrentVideoSource(buttons[index]?.videoSrc);
  }, [buttons]);

  const handleButtonClick = useCallback((index) => {
    updateVideoOnIndexChange(index);
  }, [updateVideoOnIndexChange]);

  const handleArrowKey = useCallback((event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      setActiveButtonIndex((prevIndex) => {
        const newIndex =
          event.key === 'ArrowLeft'
            ? (prevIndex - 1 + buttons.length) % buttons.length
            : (prevIndex + 1) % buttons.length;
  
        // Update the video source directly based on the new index
        setCurrentVideoSource(buttons[newIndex]?.videoSrc);
  
        return newIndex;
      });
    }
  }, [buttons]);

  useEffect(() => {
    window.addEventListener('keydown', handleArrowKey);
    return () => {
      window.removeEventListener('keydown', handleArrowKey);
    };
  }, [handleArrowKey]);

  return (
    <div className='cards-container'>
      <div className='overview-card'>

        <div className='overview-small-card-title'>
          <h2 className='overview-card-title'>Detalii Eveniment</h2>
        </div>       
        
        <div className='overview-small-card-date'>
          <p className='overview-card-date-title'>Data Eveniment: 10-13 Jun:</p>
        </div>
        <div className='overview-small-card-maxnumber'>
          <p className='overview-card-numar-title'>Numar Participanti: 30</p>
        </div>
        
        <div className='overview-small-card'>
          <h3 className='overview-card-locatie-title'>Locatie</h3>
          <p className='overview-card-locatie-item'>Nume</p>
          <p className='overview-card-locatie-item'>Website</p>
          <p className='overview-card-locatie-item'>Judet</p>
        </div>
        <div className='overview-small-card'>
          <h3 className='overview-card-transport-title'>Transport</h3>
          <p className='overview-card-transport-item'>Centotrans</p>
          <p className='overview-card-transport-item'>Plecare: Piata Mihai Viteazul, 10 Jun, 07:00 - 07:30</p>
          <p className='overview-card-transport-item'>Sosire: Piata Mihai Viteazul, 13 Jun, 18:00 - 18:30</p>
        </div>
        <div className='overview-small-card'>
          <h3 className='overview-card-catering-title'>Catering</h3>
          <p className='overview-card-catering-item'>Mic dejun: 09:00 - 11:00</p>
          <p className='overview-card-catering-item'>Pranz: 14:00 - 16:00</p>
          <p className='overview-card-catering-item'>Cina: 19:00 - 21:00</p>
        </div>
        <div className='overview-small-card'>
          <h3 className='overview-card-activitati-title'>Activitati</h3>
          <p className='overview-card-activitati-item'>Activitatea 1: 16:00 - 17:00</p>
          <p className='overview-card-activitati-item'>Activitatea 2: 17:00 - 18:00</p>
          <p className='overview-card-activitati-item'>Activitatea 3: 18:00 - 18:30</p>
        </div>
      </div>

      <div className='tutorial-card'>
        <div className='tutorial-small-card-title'>
          <h2 className='tutorial-card-title'>Tutorial</h2>
        </div>

        {/*  video player here below */}
        <div className='tutorial-small-card-video'>
          <video src={currentVideoSource} controls controlsList="nodownload" />
        </div>
        {/*  video player here above */}

        <div className='tutorial-small-card-pages'>
          <ul className='tutorial-card-button-pages'>
            {buttons.map((button, index) => (
              <button
                key={index}
                className='homepage-tutorial-button'
                onClick={() => handleButtonClick(index)}
              >
                {activeButtonIndex === index ? (
                  <img src={homepage_tutorial_navigation_button_toggle} alt={`button_toggle_${index}`} />
                ) : (
                  <img src={homepage_tutorial_navigation_button} alt={`button_${index}`} />
                )}
              </button>
            ))}
          </ul>
        </div>       
      </div>
    </div>
  )
}