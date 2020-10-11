import PsiLifePromo from '../../../assets/images/psi-iphone-promo.png';
import React from 'react';
import './_PsiLife.scss';

const PsiLife = () => {
  return (
    <>
      <section>
        <img className="psilife-promo" src={PsiLifePromo} />
      </section>
    </>
  );
};

export default PsiLife;
