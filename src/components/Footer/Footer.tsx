import { Link } from 'react-router-dom'
// import './Footer.styles.css'
import './images/Plogo.png'
// ./src//assets//images/logo.png
export default function Footer() {
  return (
    <footer className='bg-slate-400'>
      <div className='m-auto max-w-[1200px]'>
        <div className='grid grid-cols-12 pb-5 pt-10'>
          <div className='col-span-3'>
            <div className='footer__logo'>
              <Link to='/'>
                <img src='' alt='' />
              </Link>
            </div>
            <p className='py-2 text-base font-medium text-white hover:opacity-80'>
              In 2020, ShopDunk becomes an authorized Apple reseller. We develop standard chain stores and Apple Mono
              Store to bring the best experience of Apple products and services to Vietnamese users.
            </p>
            <div className='my-4 flex'>
              <div className='hover:opacity-60'>
                <Link to='https://www.facebook.com/bunnnnn.bb'>
                  <img src='https://shopdunk.com/images/uploaded/icon/Face.png' alt='' />
                </Link>
              </div>
              <div className='hover:opacity-60'>
                <Link to='/'>
                  <img src='https://shopdunk.com/images/uploaded/icon/Tiktok.png' alt='' />
                </Link>
              </div>
              <div className='hover:opacity-60'>
                <Link to='/'>
                  <img src='https://shopdunk.com/images/uploaded/icon/Zalo.png' alt='' />
                </Link>
              </div>
              <div className='hover:opacity-60'>
                <Link to='/'>
                  <img src='https://shopdunk.com/images/uploaded/icon/Youtube.png' alt='' />
                </Link>
              </div>
            </div>
          </div>

          <div className='col-span-3 pl-6'>
            <h2 className='text-base font-extralight uppercase text-white hover:opacity-70'>Information</h2>
            <ul>
              <li>
                <Link to='/'>
                  <p className='my-4 font-extralight hover:opacity-60 '>News</p>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <p className='my-4 font-extralight hover:opacity-60'>About</p>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <p className='my-4 font-extralight hover:opacity-60'>Check IMEI</p>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <p className='my-4 font-extralight hover:opacity-60'>Payment method</p>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <p className='my-4 font-extralight hover:opacity-60'>Rent retail location</p>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <p className='my-4 font-extralight hover:opacity-60'>Warrantly and repair</p>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <p className='my-4 font-extralight hover:opacity-60'>Careers</p>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <p className='my-4 font-extralight hover:opacity-60'>admin</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className='col-span-3 pl-6'>
            <h2 className='text-base font-extralight uppercase text-white hover:opacity-70'>Customer service</h2>
            <ul>
              <li>
                <Link to='/'>
                  <p className='my-4 font-extralight hover:opacity-60'>Trade in sale</p>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <p className='my-4 font-extralight hover:opacity-60'> Delivery</p>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <p className='my-4 font-extralight hover:opacity-60'>Delivery (ZaloPay)</p>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <p className='my-4 font-extralight hover:opacity-60'>Cancel the transaction</p>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <p className='my-4 font-extralight hover:opacity-60'>Product return</p>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <p className='my-4 font-extralight hover:opacity-60'>Apple warrantly</p>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <p className='my-4 font-extralight hover:opacity-60'>Resolve complaints</p>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <p className='my-4 font-extralight hover:opacity-60'>Security policy</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className='col-span-3 pl-6'>
            <h2 className='text-base font-extralight uppercase text-white hover:opacity-70'>Address & Contact</h2>
            <ul>
              <li>
                <Link to='/'>
                  <p className='my-4 font-extralight hover:opacity-60'>My account</p>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <p className='my-4 font-extralight hover:opacity-60'>Orders</p>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <p className='my-4 font-extralight hover:opacity-60'>Branches</p>
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <p className='my-4 font-extralight hover:opacity-60'>Find Store on Google Map</p>
                </Link>
              </li>

              <li>
                <Link to='/' className='footer__heading-link footer__heading-link--active'>
                  Purchase:
                  <span className='my-4 font-medium text-blue-600 hover:opacity-80'>1900.6626</span>
                </Link>
              </li>
              <li>
                <Link to='/' className='footer__heading-link footer__heading-link--active'>
                  Complaint:
                  <span className=' my-4 font-medium text-blue-600 hover:opacity-80'>0886308688</span>
                </Link>
              </li>
              <li>
                <Link to='/' className='footer__heading-link footer__heading-link--active'>
                  Enterprise:
                  <span className=' my-4 font-medium text-blue-600 hover:opacity-80'>0822688668</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='m-auto max-w-[1200px] border-t-2 border-opacity-80 py-5'>
        <div className='flex justify-between p-4'>
          <div>
            <p>
              © 2016 Công ty Cổ Phần HESMAN Việt Nam GPDKKD: 0107465657 do Sở KH & ĐT TP. Hà Nội cấp ngày 08/06/2016.
            </p>
            <p>Địa chỉ: Số 76 Thái Hà, phường Trung Liệt, quận Đống Đa, thành phố Hà Nội, Việt Nam</p>
            <p>Đại diện pháp luật: PHẠM MẠNH HÒA | ĐT: 0247.305.9999 | Email: lienhe@shopdunk.com</p>
          </div>

          <div className='pr-4'>
            <img
              className='float-right w-[140px]'
              src='https://shopdunk.com/images/uploaded-source/Trang%20ch%E1%BB%A7/Bocongthuong.png'
              alt=''
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
