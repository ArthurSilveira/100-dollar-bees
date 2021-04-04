import React from 'react'
import Helmet from 'react-helmet'

export const homeMetaData = {
    name: "$100 BEES - Hexel Collection",
    description: "There's over 20,000 bee species in the world, get to know some of them! The crypto bee collective engages in bee conservation cryptophilanthropy. At least 50% of the proceeds will be donated to bee conservation. The remainder will go to support the artist and the bee collective. Bzzzz",
    banner: "https://lh3.googleusercontent.com/Eqd6B5-74Ti4YHjKmDVuhJa9XMcRYijTr0GKgsLVGNQ1GEk0RHRSGfisa8cC8bMmay5HLR58qrGtFPgyTemjhXh3Jnipk4ooSHJT_hk=s2500"
}
export function HomeMeta() {
    return (
        <Helmet>
            {/* <!-- HTML Meta Tags --> */}
            <title>{homeMetaData.name} - Hundred Dollar Bees</title>
            <meta
                name="description"
                content={homeMetaData.description}
            />

            {/* <!-- Google / Search Engine Tags --> */}
            <meta property="name" content={homeMetaData.name} />
            <meta
                property="description"
                content={homeMetaData.description}
            />
            <meta
                property="image"
                content={homeMetaData.banner}
            />

            {/* <!-- Facebook Meta Tags --> */}
            <meta property="og:url" content="https://hundreddollarbees.io/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={homeMetaData.name} />
            <meta
                property="og:description"
                content={homeMetaData.description}
            />
            <meta
                property="og:image"
                content={homeMetaData.banner}
            />

            {/* <!-- Twitter Meta Tags --> */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={homeMetaData.name} />
            <meta
                name="twitter:description"
                content={homeMetaData.description}
            />
            <meta
                name="twitter:image"
                content={homeMetaData.banner}
            />
        </Helmet>
    )
}

export function AssetMeta(props) {
    const { name, description, image_preview_url } = props.asset
    return (
        <Helmet>
            <title>{name}</title>
            <meta
                name="description"
                content={description}
            />
            <meta itemprop="name" content={name} />
            <meta
                itemprop="description"
                content={description}
            />
            <meta
                itemprop="image"
                content={image_preview_url}
            />
            <meta property="og:url" content="https://hundreddollarbees.io/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={name} />
            <meta
                property="og:description"
                content={description}
            />
            <meta
                property="og:image"
                content={image_preview_url}
            />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={name} />
            <meta
                name="twitter:description"
                content={description}
            />
            <meta
                name="twitter:image"
                content={image_preview_url}
            />
        </Helmet>
    )
}
