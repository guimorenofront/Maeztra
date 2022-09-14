import React, { useState } from 'react';
import './index.global.scss'
import maeztraIcon from '../../assets/HeaderIcons/logo-maeztra-novo.png.svg'
import cart from '../../assets/HeaderIcons/User.svg'
import Fav from '../../assets/HeaderIcons/Fav.svg'
import user from '../../assets/HeaderIcons/cart.svg'
import nov from '../../assets/HeaderIcons/icon-dress.svg'
import Banner from '../../assets/Banner.png'
import d from '../../assets/BannerIcons/Vector-1.svg'
import f from '../../assets/BannerIcons/Vector.svg'
import QTD from '../../assets/BannerIcons/Qtd.svg'
import first from '../../assets/CardsIcon/f.svg'
import s from '../../assets/CardsIcon/s.svg'
import t from '../../assets/CardsIcon/t.svg'
import fo from '../../assets/CardsIcon/fo.svg'
import fi from '../../assets/CardsIcon/fi.svg'
import Card from '../../components/Card';

import ann from '../../assets/Marcas/ann.png'
import comma from '../../assets/Marcas/comma.png'
import fore from '../../assets/Marcas/fore.png'
import me from '../../assets/Marcas/me.png'
import zara from '../../assets/Marcas/zara.png'

import BannerInfoCard from '../../assets/BannerInfoCard.png'
import ProductCard from '../../components/ProductCard';
import Product1 from '../../assets/Produto 01.png'
import Product2 from '../../assets/Produto 03.png'

import menu from '../../assets/Menu.svg'
import minicart from '../../assets/minicart.v2.svg'
import search from '../../assets/search-button.svg'
import BannerMobile from '../../assets/BannerMobile.png'
import Modal from '../../components/Modal';
// import { Container } from './styles';

function DesafioDeLayout() {
    const [ModalView, setModalView] = useState("flex")
    return (
        <section>
            <Modal func={setModalView} value={ModalView}/>
            <header>
                <div className='HeaderContainerDesktop'>
                    <div className='Logo'>
                        <img src={maeztraIcon} alt='Sim' />
                    </div>
                    <div className='Searchbar'>
                        <input placeholder='Oque você busca ?' type="text" />
                        <button>Buscar</button>
                    </div>
                    <div className='UserButtons'>
                        <button> <img src={user} alt="" /> Minha Conta</button>
                        <button><img src={Fav} alt="" /> Minha Conta</button>
                        <button> <img src={cart} alt="" /> Meu Carrinho</button>
                    </div>
                </div>
                <div className='HeaderContainMobile'>
                    <div className='Group'>
                        <div className='Icon'>
                            <img src={menu} alt='Sim' />
                        </div>
                        <div className='Logo'>
                            <img src={maeztraIcon} alt='Sim' />
                        </div>
                    </div>
                    <div className='Group'>
                        <div className='Search'>
                            <img src={search} alt='Sim' />
                        </div>
                        <div className='Minicart'>
                            <img src={minicart} alt='Sim' />
                        </div>

                    </div>
                </div>
                <div className='SubHeaderBar'>
                    <div>
                        <a href="#"><img src={nov} alt="icon" />Novidades</a>
                        <a href="#">Vestidos</a>
                        <a href="#">Roupas</a>
                        <a href="#">Sapatos</a>
                        <a href="#">Lingerie</a>
                        <a href="#">Acessórios</a>
                        <a href="#">OUTLET</a>
                    </div>
                </div>
            </header>
            <div className='BannerContainer'>
                <img className='Desk' src={Banner} alt="Banner" />
                <img className='Mobile' src={BannerMobile} alt="Banner" />
                <button className='l'><img src={d} alt="" /></button>
                <button className='r'><img src={f} alt="" /></button>
                <img className='qtd' src={QTD} alt="Sim" />
            </div>
            <p className='Title'>Por que comprar na Maeztra?</p>
            <div className='CardBar'>
                <Card img={first} Title="Produtos importados" text={"Produto de Alta Qualidade"} />
                <Card img={s} Title="Estoque no Brazil" text={"Produtos mais perto de você!"} />
                <Card img={t} Title="Trocas Garantidas" text={"Trocas em até 48 horas, vejas as regras"} />
                <Card img={fo} Title="Ganhe 5% off" text={"Pagando à vista no Cartão"} />
                <Card img={fi} Title="Frete Grátis" text={"Em compras acima de R$ 499,00"} />
            </div>

            <p className='TitleBrand' style={{ textAlign: "center", marginTop: "74px" }}>Marcas Parceiras</p>
            <div className='BrandBar'>
                <img src={comma} alt="Marca" />
                <img src={me} alt="Marca" />
                <img src={fore} alt="Marca" />
                <img src={zara} alt="Marca" />
                <img src={ann} alt="Marca" />
            </div>
            <p className='TitleBrand' style={{ textAlign: "center", marginTop: "108px" }}>As Mais Pedidas</p>

            <div className='PDPSlider'>
                <ProductCard img={Product1} Name="Faux Suede Mini Skirt" Desc={"A faux suede mini skirt featuring exposed button-front closures and panel seam construction."} Price="R$ 500,00" color1={"#DEAC71"} color2={"#D37164"} color3={"#6497D3"} color4={"#3C3B79"} />
                <ProductCard img={Product2} Name="Ruched Rose Print Mini Skirt" Desc={"A faux suede mini skirt featuring exposed button-front closures and panel seam construction."} Price="R$ 320,00" color1={"#1C1A19"} color2={"#D84E4B"} color3={"#CFC9B0"} color4={"#EAE9E5"} />
                <ProductCard img={Product1} Name="Faux Suede Mini Skirt" Desc={"A faux suede mini skirt featuring exposed button-front closures and panel seam construction."} Price="R$ 500,00" color1={"#DEAC71"} color2={"#D37164"} color3={"#6497D3"} color4={"#3C3B79"} />
                <ProductCard img={Product2} Name="Ruched Rose Print Mini Skirt" Desc={"A faux suede mini skirt featuring exposed button-front closures and panel seam construction."} Price="R$ 320,00" color1={"#1C1A19"} color2={"#D84E4B"} color3={"#CFC9B0"} color4={"#EAE9E5"} />
                <ProductCard img={Product1} Name="Faux Suede Mini Skirt" Desc={"A faux suede mini skirt featuring exposed button-front closures and panel seam construction."} Price="R$ 500,00" color1={"#DEAC71"} color2={"#D37164"} color3={"#6497D3"} color4={"#3C3B79"} />
                <button className='l'><img src={d} alt="" /></button>
                <button className='r'><img src={f} alt="" /></button>
            </div>

            <div className='InfoCard'>
                <div>
                    <h2>Lorem ipsum </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien.</p>
                </div>
                <img src={BannerInfoCard} alt="Sim" />
            </div>
            <div className='Newsletter'>
                <p>
                    Recebe Nossa Newsletter
                </p>
                <div className='InputBox'>
                    <input placeholder='Digite seu e-mail' type="text" />
                    <button>Enviar</button>
                </div>
            </div>
            <footer>
                <div>
                    <ul>
                        <li>Informações</li>
                        <li>Quem Somos</li>
                        <li>Prazo de Envio</li>
                        <li>Trocas e Devoluções</li>
                        <li>Promoções e Cupons</li>
                    </ul>
                    <ul>
                        <li>Minha Conta</li>
                        <li>Minha Conta</li>
                        <li>Meus Pedidos</li>
                        <li>Cadastre-se</li>
                    </ul>
                    <ul>
                        <li>Onde nos Encontrar</li>
                        <li>Lojas</li>
                        <li>Endereço</li>
                    </ul>
                </div>
            </footer>
        </section>
    );
}

export default DesafioDeLayout;