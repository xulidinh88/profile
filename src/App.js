import './App.css';
import { Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import GithubIcon from '@material-ui/icons/GitHub';

function App() {
  return (
    <div className="App">
        <div class="avatar">
          <div class="avatar--content">
            <img class="img" src="avatar.jpg"></img>
          </div>
        </div>
      <div class="main">
        <div class="name">
          <h1>Đinh Xuân Linh</h1>
          <h2>Đại học Công nghệ - ĐHQGHN</h2>
        </div>
        <div class="main__list">
        <a href="https://www.facebook.com/xuanlinh05092000/" class="a--link">
              <Button
              class="a__btn"
              variant="outlined"
              startIcon={<FacebookIcon />}
              ><span class="spanButton">Facebook: Xuân Linh</span></Button>
            </a>

            <a href="https://www.instagram.com/xulidinh88/" class="a--link">
              <Button
              class="a__btn"
              startIcon={<InstagramIcon />}
              ><span class="spanButton">Instagram: xulidinh88</span></Button>
            </a>

            <a href="https://github.com/xulidinh88" class="a--link">
              <Button
              class="a__btn"
              startIcon={<GithubIcon />}
              ><span class="spanButton">Github: xulidinh88</span></Button>
            </a>

            <a href="" class="a--link">
              <Button
              class="a__btn"
              startIcon={<EmailIcon />}
              >xuan.linh88@gmail.com</Button>
            </a>
            <a href="" class="a--link">
              <Button
              class="a__btn"
              startIcon={<PhoneIcon />}
              >0333497360</Button>
            </a>
        </div>
        <h5>Thank you for visiting!!</h5>
      </div>
    </div>
  );
}

export default App;
