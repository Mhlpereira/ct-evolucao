/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {

        //aceitar as imagens por link
        remotePatterns : [{
            protocol: 'https',
            hostname: 'www.example.com', //usar o cloudnary qnd for configurar
            port : '',
            pathname : '**' 
        }]
    }
};

export default nextConfig;
