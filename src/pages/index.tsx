import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header>
            <div className="container">
                <h1 className="title">
                    <Translate>Home</Translate>
                </h1>
                <p>
                    <Translate>
                        OKP4 SAS develops the OKP4 protocol. OKP4 is an open
                        source and decentralized computing protocol that
                        simplifies and maximizes data sharing.
                    </Translate>
                </p>
                <p>
                    <Translate>
                        Our ambition is to create ecosystems for the fluid
                        sharing of data and services that interact according to
                        common governance rules, guaranteeing the trust and
                        interest of stakeholders in contributing : Data Spaces.
                        These Data Spaces are the crucible of new value chains
                        in the knowledge economy.
                    </Translate>
                </p>
                <p>
                    <Translate>
                        The decentralized computer protocol OKP4 allows the
                        custom creation of these Data Spaces, and to optimize
                        their functioning by automating the application of the
                        governance rules established by the stakeholders. In
                        short, the protocol offers the possibility of
                        orchestrating the execution of databases and services
                        without a trusted third party.
                    </Translate>
                </p>
                <p>
                    <Translate>
                        Autonomous, open and decentralized, it automatically
                        governs the valuation of data through a wide variety of
                        services, the management of consents, the calculation of
                        contributions to the production of knowledge and the
                        optimal remuneration of actors according to the value
                        generated in common within an economy enabled by the
                        protocol token.
                    </Translate>
                </p>

                <iframe
                    width="850"
                    height="500"
                    src="https://www.youtube.com/embed/YQOafk1NQdI"
                    title="OKP4 video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="okp4-video"
                ></iframe>
                <div></div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout>
            <HomepageHeader />
        </Layout>
    );
}
