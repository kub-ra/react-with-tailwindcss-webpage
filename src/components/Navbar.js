import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className="bg-gray  flex justify-between  sticky top-0 ">
        
        <div class="logo my-10 ml-24">
            <Link path="/">
        <svg  width="119" height="16" viewBox="0 0 119 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.54 0.239999V9.2C12.54 11.1733 12.0267 12.64 11 13.6C9.97333 14.56 8.47333 15.04 6.5 15.04C5.46 15.04 4.47333 14.9133 3.54 14.66C2.60667 14.4067 1.83333 14.04 1.22 13.56L2.46 11.32C2.91333 11.6933 3.48667 11.9867 4.18 12.2C4.87333 12.4267 5.56667 12.54 6.26 12.54C7.34 12.54 8.13333 12.2933 8.64 11.8C9.16 11.32 9.42 10.5867 9.42 9.6V9.14C8.60667 10.0333 7.47333 10.48 6.02 10.48C5.03333 10.48 4.12667 10.2667 3.3 9.84C2.48667 9.4 1.84 8.78667 1.36 8C0.88 7.21333 0.64 6.30667 0.64 5.28C0.64 4.25333 0.88 3.34667 1.36 2.56C1.84 1.77333 2.48667 1.16667 3.3 0.74C4.12667 0.3 5.03333 0.0799999 6.02 0.0799999C7.58 0.0799999 8.76667 0.593333 9.58 1.62V0.239999H12.54ZM6.64 7.92C7.46667 7.92 8.14 7.68 8.66 7.2C9.19333 6.70667 9.46 6.06667 9.46 5.28C9.46 4.49333 9.19333 3.86 8.66 3.38C8.14 2.88667 7.46667 2.64 6.64 2.64C5.81333 2.64 5.13333 2.88667 4.6 3.38C4.06667 3.86 3.8 4.49333 3.8 5.28C3.8 6.06667 4.06667 6.70667 4.6 7.2C5.13333 7.68 5.81333 7.92 6.64 7.92ZM18.9839 0.0799999C20.6506 0.0799999 21.9306 0.48 22.8239 1.28C23.7172 2.06667 24.1639 3.26 24.1639 4.86V11H21.2439V9.66C20.6572 10.66 19.5639 11.16 17.9639 11.16C17.1372 11.16 16.4172 11.02 15.8039 10.74C15.2039 10.46 14.7439 10.0733 14.4239 9.58C14.1039 9.08667 13.9439 8.52667 13.9439 7.9C13.9439 6.9 14.3172 6.11333 15.0639 5.54C15.8239 4.96667 16.9906 4.68 18.5639 4.68H21.0439C21.0439 4 20.8372 3.48 20.4239 3.12C20.0106 2.74667 19.3906 2.56 18.5639 2.56C17.9906 2.56 17.4239 2.65333 16.8639 2.84C16.3172 3.01333 15.8506 3.25333 15.4639 3.56L14.3439 1.38C14.9306 0.966666 15.6306 0.646666 16.4439 0.419999C17.2706 0.193333 18.1172 0.0799999 18.9839 0.0799999ZM18.7439 9.06C19.2772 9.06 19.7506 8.94 20.1639 8.7C20.5772 8.44667 20.8706 8.08 21.0439 7.6V6.5H18.9039C17.6239 6.5 16.9839 6.92 16.9839 7.76C16.9839 8.16 17.1372 8.48 17.4439 8.72C17.7639 8.94667 18.1972 9.06 18.7439 9.06ZM39.9677 0.0799999C41.3143 0.0799999 42.381 0.48 43.1677 1.28C43.9677 2.06667 44.3677 3.25333 44.3677 4.84V11H41.2477V5.32C41.2477 4.46667 41.0677 3.83333 40.7077 3.42C40.361 2.99333 39.861 2.78 39.2077 2.78C38.4743 2.78 37.8943 3.02 37.4677 3.5C37.041 3.96667 36.8277 4.66667 36.8277 5.6V11H33.7077V5.32C33.7077 3.62667 33.0277 2.78 31.6677 2.78C30.9477 2.78 30.3743 3.02 29.9477 3.5C29.521 3.96667 29.3077 4.66667 29.3077 5.6V11H26.1877V0.239999H29.1677V1.48C29.5677 1.02667 30.0543 0.679999 30.6277 0.44C31.2143 0.2 31.8543 0.0799999 32.5477 0.0799999C33.3077 0.0799999 33.9943 0.233333 34.6077 0.54C35.221 0.833333 35.7143 1.26667 36.0877 1.84C36.5277 1.28 37.081 0.846667 37.7477 0.54C38.4277 0.233333 39.1677 0.0799999 39.9677 0.0799999ZM57.0214 5.66C57.0214 5.7 57.0014 5.98 56.9614 6.5H48.8214C48.9681 7.16667 49.3147 7.69333 49.8614 8.08C50.4081 8.46667 51.0881 8.66 51.9014 8.66C52.4614 8.66 52.9547 8.58 53.3814 8.42C53.8214 8.24667 54.2281 7.98 54.6014 7.62L56.2614 9.42C55.2481 10.58 53.7681 11.16 51.8214 11.16C50.6081 11.16 49.5347 10.9267 48.6014 10.46C47.6681 9.98 46.9481 9.32 46.4414 8.48C45.9347 7.64 45.6814 6.68667 45.6814 5.62C45.6814 4.56667 45.9281 3.62 46.4214 2.78C46.9281 1.92667 47.6147 1.26667 48.4814 0.799999C49.3614 0.32 50.3414 0.0799999 51.4214 0.0799999C52.4747 0.0799999 53.4281 0.306666 54.2814 0.76C55.1347 1.21333 55.8014 1.86667 56.2814 2.72C56.7747 3.56 57.0214 4.54 57.0214 5.66ZM51.4414 2.44C50.7347 2.44 50.1414 2.64 49.6614 3.04C49.1814 3.44 48.8881 3.98667 48.7814 4.68H54.0814C53.9747 4 53.6814 3.46 53.2014 3.06C52.7214 2.64667 52.1347 2.44 51.4414 2.44ZM61.2786 1.66C61.6519 1.14 62.1519 0.746666 62.7786 0.48C63.4186 0.213333 64.1519 0.0799999 64.9786 0.0799999V2.96C64.6319 2.93333 64.3986 2.92 64.2786 2.92C63.3853 2.92 62.6853 3.17333 62.1786 3.68C61.6719 4.17333 61.4186 4.92 61.4186 5.92V11H58.2986V0.239999H61.2786V1.66Z" fill="#00EB7A"/>
<path d="M72.4719 0.0799999C73.4719 0.0799999 74.3785 0.313333 75.1919 0.779999C76.0185 1.23333 76.6652 1.88 77.1319 2.72C77.5985 3.54667 77.8319 4.51333 77.8319 5.62C77.8319 6.72667 77.5985 7.7 77.1319 8.54C76.6652 9.36667 76.0185 10.0133 75.1919 10.48C74.3785 10.9333 73.4719 11.16 72.4719 11.16C71.0985 11.16 70.0185 10.7267 69.2319 9.86V14.88H66.1119V0.239999H69.0919V1.48C69.8652 0.546667 70.9919 0.0799999 72.4719 0.0799999ZM71.9319 8.6C72.7319 8.6 73.3852 8.33333 73.8919 7.8C74.4119 7.25333 74.6719 6.52667 74.6719 5.62C74.6719 4.71333 74.4119 3.99333 73.8919 3.46C73.3852 2.91333 72.7319 2.64 71.9319 2.64C71.1319 2.64 70.4719 2.91333 69.9519 3.46C69.4452 3.99333 69.1919 4.71333 69.1919 5.62C69.1919 6.52667 69.4452 7.25333 69.9519 7.8C70.4719 8.33333 71.1319 8.6 71.9319 8.6ZM83.2847 0.0799999C84.9514 0.0799999 86.2314 0.48 87.1247 1.28C88.018 2.06667 88.4647 3.26 88.4647 4.86V11H85.5447V9.66C84.958 10.66 83.8647 11.16 82.2647 11.16C81.438 11.16 80.718 11.02 80.1047 10.74C79.5047 10.46 79.0447 10.0733 78.7247 9.58C78.4047 9.08667 78.2447 8.52667 78.2447 7.9C78.2447 6.9 78.618 6.11333 79.3647 5.54C80.1247 4.96667 81.2914 4.68 82.8647 4.68H85.3447C85.3447 4 85.138 3.48 84.7247 3.12C84.3114 2.74667 83.6914 2.56 82.8647 2.56C82.2914 2.56 81.7247 2.65333 81.1647 2.84C80.618 3.01333 80.1514 3.25333 79.7647 3.56L78.6447 1.38C79.2314 0.966666 79.9314 0.646666 80.7447 0.419999C81.5714 0.193333 82.418 0.0799999 83.2847 0.0799999ZM83.0447 9.06C83.578 9.06 84.0514 8.94 84.4647 8.7C84.878 8.44667 85.1714 8.08 85.3447 7.6V6.5H83.2047C81.9247 6.5 81.2847 6.92 81.2847 7.76C81.2847 8.16 81.438 8.48 81.7447 8.72C82.0647 8.94667 82.498 9.06 83.0447 9.06ZM99.3484 8.6V11H89.7484V9.12L95.2284 2.64H89.8884V0.239999H99.1684V2.12L93.6884 8.6H99.3484ZM104.888 0.0799999C106.554 0.0799999 107.834 0.48 108.728 1.28C109.621 2.06667 110.068 3.26 110.068 4.86V11H107.148V9.66C106.561 10.66 105.468 11.16 103.868 11.16C103.041 11.16 102.321 11.02 101.708 10.74C101.108 10.46 100.648 10.0733 100.328 9.58C100.008 9.08667 99.8478 8.52667 99.8478 7.9C99.8478 6.9 100.221 6.11333 100.968 5.54C101.728 4.96667 102.894 4.68 104.468 4.68H106.948C106.948 4 106.741 3.48 106.328 3.12C105.914 2.74667 105.294 2.56 104.468 2.56C103.894 2.56 103.328 2.65333 102.768 2.84C102.221 3.01333 101.754 3.25333 101.368 3.56L100.248 1.38C100.834 0.966666 101.534 0.646666 102.348 0.419999C103.174 0.193333 104.021 0.0799999 104.888 0.0799999ZM104.648 9.06C105.181 9.06 105.654 8.94 106.068 8.7C106.481 8.44667 106.774 8.08 106.948 7.6V6.5H104.808C103.528 6.5 102.888 6.92 102.888 7.76C102.888 8.16 103.041 8.48 103.348 8.72C103.668 8.94667 104.101 9.06 104.648 9.06ZM115.072 1.66C115.445 1.14 115.945 0.746666 116.572 0.48C117.212 0.213333 117.945 0.0799999 118.772 0.0799999V2.96C118.425 2.93333 118.192 2.92 118.072 2.92C117.178 2.92 116.478 3.17333 115.972 3.68C115.465 4.17333 115.212 4.92 115.212 5.92V11H112.092V0.239999H115.072V1.66Z" fill="white"/>
</svg></Link>

        </div>
        <div className='flex justify-end mx-5 mx-14 '>
            <Link path="/blog"><p className='text-green    my-7'>Topluluk</p></Link>
            <Link path="/login"><button className='bg-green text-gray rounded-r px-3  my-7 mr-24 py-1 ml-7'>Giriş Yap</button></Link>
        
        
        </div>
        
        </div>
    )
}

export default Navbar
