'use client';

import { useState } from 'react';
import './main.css';
import axios from 'axios';

export default function Home() {
  const [image, setImage] = useState();

  const handleClick = async () => {
    // eslint-disable-next-line no-console
    console.log('Button clicked');
    try {
      // eslint-disable-next-line no-console
      console.log('Before API call');
      const { data } = await axios.get('/api/profile');
      // eslint-disable-next-line no-console
      console.log('Profile data:', data);
      setImage(data.profile);
    } catch (error) {
      console.log('Error:', error.response);
      if (error.response.status === 401) {
        if (window.confirm('권한없음')) {
          window.location.assign('/api/authorize');
        }
      }
    }
  };

  const handleChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  console.log(image);

  return (
    <main>
      <h1>사진 인화 서비스</h1>

      <p>
        사진을 선택해 주세요.
        <input onChange={handleChange} accept="image/*" type="file" />
      </p>

      <p>
        깃헙 프로필 사진
        <button onClick={handleClick} type="button">
          불러오기
        </button>
      </p>

      {image ? (
        <div className="box">
          <span style={{ backgroundImage: `url(${image})` }} />
        </div>
      ) : 'no image'}
    </main>
  );
}
