import React from 'react';
import styled from "styled-components";
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

const Container = styled.div`

`;
const HeadTitle = styled.h1`
    margin:1.2rem ;
    color:#FF8E00 ;
`;
const Title = styled.h3`
    margin:1.2rem 2rem 0.5rem 2rem ;
    color:#FF8E00 ;
`;
const Paragraph = styled.p`
    margin:0 3rem 1rem 3rem ;
    padding-right:3rem ;
    color:#706e6c ;
`;
const MiniParagraph = styled.p`
    margin:0 5rem 1rem 5rem ;
    padding-right:3rem ;
    color:#706e6c ;
`;

function Terms() {
  return (
    <div>
        <Container>
            <Announcement />
            <Navbar />
            <HeadTitle>LufuMart Terms And Conditions</HeadTitle>
            <Title>Introduction</Title>
            <Paragraph>
                LufuMart is an e-commerce platform consisting of a website and mobile application
                (“marketplace”), together with supporting logistics and payment infrastructure, for the
                sale and purchase of consumer products in Congo - Kinshasa.
            </Paragraph>
            <Paragraph>
                These general terms and conditions shall apply to buyers and sellers on the marketplace
                and shall govern your use of the marketplace and related services.
            </Paragraph>
            <Paragraph>
                By using our marketplace, you accept these general terms and conditions in full. If you
                disagree with these general terms and conditions or any part of these general terms and
                conditions, you must not use our marketplace.
            </Paragraph>
            <Paragraph>
                If you use our marketplace in the course of a business or other organizational project,
                then by so doing you:
            </Paragraph>
            <MiniParagraph>
                Confirm that you have obtained the necessary authority to agree to these general
                terms and conditions;
            </MiniParagraph>
            <MiniParagraph>
                Bind both yourself and the person, company or other legal entity that operates
                that business or organizational project, to these general terms and conditions;
                and
            </MiniParagraph>
            <MiniParagraph>
                Agree that "you" in these general terms and conditions shall reference both the
                individual user and the relevant person, company or legal entity unless the
                context requires otherwise.
            </MiniParagraph>
            <Title>Registration and account</Title>
            <Paragraph>
                You may not register with our marketplace if you are under 18 years of age (by using our
                marketplace or agreeing to these general terms and conditions, you warrant and
                represent to us that you are at least 18 years of age).
            </Paragraph>
            <Paragraph>
                You may register for an account with our marketplace by completing and submitting the
                registration form on our marketplace.
            </Paragraph>
            <Paragraph>
                You represent and warrant that all information provided in the registration form is
                complete and accurate.
            </Paragraph>
            <Paragraph>
                If you register for an account with our marketplace, you will be asked to provide an email
                address/user ID and password and you agree to:
            </Paragraph>
            <MiniParagraph>
                Keep your password confidential;
            </MiniParagraph>
            <MiniParagraph>
                Notify us in writing immediately (using our contact details provided at section 23)
                if you become aware of any disclosure of your password; and
            </MiniParagraph>
            <MiniParagraph>
                Be responsible for any activity on our marketplace arising out of any failure to
                keep your password confidential, and that you may be held liable for any losses
                arising out of such a failure.
            </MiniParagraph>
            <Paragraph>
                Your account shall be used exclusively by you and you shall not transfer your account to
                any third party. If you authorize any third party to manage your account on your behalf
                this shall be at your own risk.
            </Paragraph>
            <Paragraph>
                We may suspend or cancel your account, and/or edit your account details, at any time in
                our sole discretion and without notice or explanation, providing that if we cancel any
                products or services you have paid for but not received, and you have not breached
                these general terms and conditions, we will refund you in respect of the same.
            </Paragraph>
            <Paragraph>
                You may cancel your account on our marketplace by contacting us as provided in the
                below sections.
            </Paragraph>
            <Title>Terms and conditions of sale</Title>
            <Paragraph>
                You acknowledge and agree that:
            </Paragraph>
            <MiniParagraph>
                The marketplace provides an online location for sellers to sell and buyers to
                purchase products;
            </MiniParagraph>
            <MiniParagraph>
                We shall accept binding sales, on behalf of sellers, but Jumia is not a party to the
                transaction between the seller and the buyer; and
            </MiniParagraph>
            <MiniParagraph>
                A contract for the sale and purchase of a product or products will come into force
                between the buyer and seller, and accordingly you commit to buying or selling the
                relevant product or products, upon the buyer’s confirmation of purchase via the
                marketplace.
            </MiniParagraph>
            <Paragraph>
                Subject to these general terms and conditions, the seller’s terms of business shall
                govern the contract for sale and purchase between the buyer and the seller.
                Notwithstanding this, the following provisions will be incorporated into the contract of
                sale and purchase between the buyer and the seller:
            </Paragraph>
            <MiniParagraph>
                The price for a product will be as stated in the relevant product listing;
            </MiniParagraph>
            <MiniParagraph>
                The price for the product must include all taxes and comply with applicable laws
                in force from time to time;
            </MiniParagraph>
            <MiniParagraph>
                Delivery charges, packaging charges, handling charges, administrative charges,
                insurance costs, other ancillary costs and charges, will only be payable by the
                buyer if this is expressly and clearly stated in the product listing;
            </MiniParagraph>
            <MiniParagraph>
                Products must be of satisfactory quality, fit and safe for any purpose specified in,
                and conform in all material respects to, the product listing and any other
                description of the products supplied or made available by the seller to the buyer;
                and
            </MiniParagraph>
            <MiniParagraph>
                The seller warrants that the seller has good title to, and is the sole legal and
                beneficial owner of, the products, and that the products are not subject to any
                third party rights or restrictions including in respect of third party intellectual
                property rights and/or any criminal, insolvency or tax investigation or
                proceedings.
            </MiniParagraph>
            <Title>Returns and refunds</Title>
            <Paragraph>
                Returns of products by buyers and acceptance of returned products by sellers shall be
                managed by us in accordance with the returns page on the marketplace, as may be
                amended from time to time. Acceptance of returns shall be in our discretion, subject to
                compliance with applicable laws of the territory.
            </Paragraph>
            <Paragraph>
                Refunds in respect of returned products shall be managed in accordance with the
                refunds page on the marketplace, as may be amended from time to time. Our rules on
                refunds shall be exercised in our discretion, subject to applicable laws of the territory. We
                may offer refunds, in our discretion:
            </Paragraph>
            <MiniParagraph>
                In respect of the product price;
            </MiniParagraph>
            <MiniParagraph>
                Local and/or international shipping fees (as stated on the refunds page); and
            </MiniParagraph>
            <MiniParagraph>
                By way of store credits, wallet refunds, vouchers, mobile money transfer, bank
                transfers or such other methods as we may determine from time to time.
            </MiniParagraph>
            <Paragraph>
                Returned products shall be accepted and refunds issued by Jumia, for and on behalf of
                the seller.
            </Paragraph>
            <Paragraph>
                Changes to our returns page or refunds page shall be effective in respect of all
                purchases made from the date of publication of the change on our website.
            </Paragraph>
            <Title>Payments</Title>
            <Paragraph>
                You must make payments due under these general terms and conditions in accordance with the
                Payments Information and Guidelines on the marketplace.
            </Paragraph>
            <Title>Rules about your content</Title>
            <Paragraph>
                In these general terms and conditions, "your content" means:
            </Paragraph>
            <MiniParagraph>
                All works and materials (including without limitation text, graphics, images, audio
                material, video material, audio-visual material, scripts, software and files) that you
                submit to us or our marketplace for storage or publication, processing by, or
                onward transmission; and
            </MiniParagraph>
            <MiniParagraph>
                All communications on the marketplace, including product reviews, feedback and
                comments.
            </MiniParagraph>
            <Paragraph>
                Your content, and the use of your content by us in accordance with these general terms
                and conditions, must be accurate, complete and truthful.
            </Paragraph>
        </Container>
    </div>
  )
}

export default Terms