import React from 'react';
import iconmoney from '../img/icon-money.png'
import chaticon from '../img/icon-chat.png'
import featureicon from '../img/icon-security.png'
import FeatureItem from './FeatureItem'

function Feature (){

    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            <FeatureItem 
                source={chaticon}
                alt="Chat Icon" 
                title="You are our #1 priority"
                description="Need to talk to a representative? You can get in touch through our
                    24/7 chat or through a phone call in less than 5 minutes." />
            <FeatureItem 
                source={iconmoney}
                alt="Bill Icon" 
                title="More savings means higher rates"
                description="The more you save with us, the higher your interest rate will be!" />
            <FeatureItem 
                source={featureicon}
                alt="Shield Icon" 
                title="Security you can trust"
                description="We use top of the line encryption to make sure your data and money
                is always safe." />  
        </section>
    )       
}

export default Feature