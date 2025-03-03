import {html} from 'hono/html'

export const Layout = () => html`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta content="width=device-width,initial-scale=1,maximum-scale=3" name="viewport">

        <!-- section:seometa -->
        <meta property="og:type" content="website">
        <meta property="og:site_name" content="Discord">
        <meta property="og:title" content="Discord - Group Chat That’s All Fun &amp; Games">
        <meta property="og:description" content="Discord is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and hang out.">
        <meta property="og:image" content="https://cdn.discordapp.com/assets/og_img_discord_home.png">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@discord">
        <meta name="twitter:creator" content="@discord">
        <!-- endsection -->
        <script nonce="MjM1LDE3LDE3OSwyMDIsMjA4LDkxLDE2NiwyMzU=">window.GLOBAL_ENV = {
          API_ENDPOINT: \`//\${location.hostname}/api\`,
          API_VERSION: 9,
          GATEWAY_ENDPOINT: \`wss://\${location.hostname}\`,
          WEBAPP_ENDPOINT: \`//\${location.hostname}\`,
          CDN_HOST: 'cdn.discordapp.com',
          ASSET_ENDPOINT: \`//\${location.hostname}\`,
          MEDIA_PROXY_ENDPOINT: \`//media.discordapp.net\`,
          WIDGET_ENDPOINT: \`//\${location.hostname}/widget\`,
          INVITE_HOST: 'discord.gg',
          GUILD_TEMPLATE_HOST: 'discord.new',
          GIFT_CODE_HOST: 'discord.gift',
          RELEASE_CHANNEL: 'stable',
          DEVELOPERS_ENDPOINT: \`//\${location.hostname}\`,
          MARKETING_ENDPOINT: \`//\${location.hostname}\`,
          BRAINTREE_KEY: 'production_ktzp8hfp_49pp2rp4phym7387',
          STRIPE_KEY: 'pk_live_CUQtlpQUF0vufWpnpUmQvcdi',
          ADYEN_KEY: 'live_E3OQ33V6GVGTXOVQZEAFQJ6DJIDVG6SY',
          NETWORKING_ENDPOINT: '//router.discordapp.net',
          RTC_LATENCY_ENDPOINT: '//latency.discord.media/rtc',
          ACTIVITY_APPLICATION_HOST: 'discordsays.com',
          PROJECT_ENV: 'production',
          REMOTE_AUTH_ENDPOINT: \`//\${location.hostname}\`,
          SENTRY_TAGS: {"buildId":"681804634ffb813f5a705117cbf72b9eb7958702","buildType":"normal"},
          MIGRATION_SOURCE_ORIGIN: \`https://\${location.hostname}\`,
          MIGRATION_DESTINATION_ORIGIN: \`https://\${location.hostname}\`,
          HTML_TIMESTAMP: Date.now(),
          ALGOLIA_KEY: 'aca0d7082e4e63af5ba5917d5e96bed0',
          PUBLIC_PATH: '/assets/'
        };</script><script nonce="MjM1LDE3LDE3OSwyMDIsMjA4LDkxLDE2NiwyMzU=">!function(){if(null==window.WebSocket)return;var n=function(n){try{var o=localStorage.getItem(n);return null==o?null:JSON.parse(o)}catch(n){return null}};if(!n("token")||window.__OVERLAY__)return;var o=null!=window.DiscordNative||null!=window.require?"etf":"json",e=window.GLOBAL_ENV.GATEWAY_ENDPOINT+"/?encoding="+o+"&v="+window.GLOBAL_ENV.API_VERSION;"true"===n("zstd_fast_connect")&&null!=window.DiscordNative&&void 0!==window.Uint8Array&&void 0!==window.TextDecoder?e+="&compress=zstd-stream":void 0!==window.Uint8Array&&(e+="&compress=zlib-stream"),console.log("[FAST CONNECT] "+e+", encoding: "+o+", version: "+window.GLOBAL_ENV.API_VERSION);var i=new WebSocket(e);i.binaryType="arraybuffer";var r=Date.now(),t={open:!1,identify:!1,gateway:e,messages:[]};i.onopen=function(){console.log("[FAST CONNECT] connected in "+(Date.now()-r)+"ms"),t.open=!0},i.onclose=i.onerror=function(){window._ws=null},i.onmessage=function(n){t.messages.push(n)},window._ws={ws:i,state:t}}()</script>
        <!-- section:title -->
        <title>Discord</title>
        <!-- endsection -->
        <link rel="icon" href="/assets/favicon.ico" /><link href="/assets/12633.38eb90943f753be0a776.css" rel="stylesheet" />
      </head>
      <body>
        <div id="app-mount">
        </div>
        <script nonce="">window.__OVERLAY__=/overlay/.test(location.pathname)</script>
        <script nonce="">window.__BILLING_STANDALONE__=/^\\/billing/.test(location.pathname)</script>
        <script src="/assets/web.9d457f3338f5f9a398fe.js" defer></script><script nonce="MjMyLDEyMCw4Nyw0NywxMzYsMTY2LDIyNywxODc=">(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.nonce='MjMyLDEyMCw4Nyw0NywxMzYsMTY2LDIyNywxODc=';d.innerHTML="window.__CF$cv$params={r:'89fca41748fac199',t:'MTcyMDQwNTcwNy4wMDAwMDA='};var a=document.createElement('script');a.nonce='MjMyLDEyMCw4Nyw0NywxMzYsMTY2LDIyNywxODc=';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script>
      </body>
    </html>
`
