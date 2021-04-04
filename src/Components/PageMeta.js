import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Helmet from 'react-helmet'

export function HomeMeta() {
    const [collectionMeta, setCollectionMeta] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://api.opensea.io/api/v1/collections?asset_owner=0x9f9662d40f4dc862f0a1d43bf6b1e4ac200ae1af&slug=100-bees-hexel-collection`).then(response => {
            console.log(response.data)
            // debugger
            setCollectionMeta(response.data)
        }).catch(error => {
            console.log(error)
        }).then(() => setLoading(false))
    }, [])
    return (
        <>
            {!loading && (
                <Helmet>

                    {/* <!-- HTML Meta Tags --> */}
                    <title>{collectionMeta[0].name} - Hundred Dollar Bees</title>
                    <meta
                        name="description"
                        content={collectionMeta[0].description}
                    />

                    {/* <!-- Google / Search Engine Tags --> */}
                    <meta property="name" content={collectionMeta[0].name} />
                    <meta
                        property="description"
                        content={collectionMeta[0].description}
                    />
                    <meta
                        property="image"
                        content={collectionMeta[0].banner_image_url}
                    />

                    {/* <!-- Facebook Meta Tags --> */}
                    <meta property="og:url" content="https://hundreddollarbees.io/" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={collectionMeta[0].name} />
                    <meta
                        property="og:description"
                        content={collectionMeta[0].description}
                    />
                    <meta
                        property="og:image"
                        content={collectionMeta[0].banner_image_url}
                    />

                    {/* <!-- Twitter Meta Tags --> */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={collectionMeta[0].name} />
                    <meta
                        name="twitter:description"
                        content={collectionMeta[0].description}
                    />
                    <meta
                        name="twitter:image"
                        content={collectionMeta[0].banner_image_url}
                    />

                </Helmet>
            )
            }
        </>
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
