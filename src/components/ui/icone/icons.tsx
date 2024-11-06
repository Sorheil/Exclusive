// src/icons/icons.js
interface IconProps {
  size?: number;
  color?: string;
}
export const icons: { [key: string]: React.FC<IconProps> } = {
  Phones: ({ size = 24, color = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path d="M17.25 18H6.75V4h10.5M14 21h-4v-1h4m2-19H8a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z" fill={color} /></svg>
  ),

  Computers: ({ size = 24, color = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <path fill={color} d="M21 14H3V4h18m0-2H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h7l-2 3v1h8v-1l-2-3h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
    </svg>
  ),

  Smartwatch: ({ size = 24, color = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill={color} d="m8 0l-.83 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h.17L8 24h8l.83-5H17a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-.17L16 0zM7 7h10v10H7z" /></svg>
  ),
  Camera: ({ size = 24, color = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill={color} d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m8 3a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 2a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3" /></svg>),

  Headphones: ({ size = 24, color = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill={color} d="M12 1c-5 0-9 4-9 9v7a3 3 0 0 0 3 3h3v-8H5v-2a7 7 0 0 1 7-7a7 7 0 0 1 7 7v2h-4v8h3a3 3 0 0 0 3-3v-7c0-5-4.03-9-9-9" /></svg>),
  Gaming: ({ size = 24, color = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill={color} d="M21 6H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m0 10H3V8h18M6 15h2v-2h2v-2H8V9H6v2H4v2h2m8.5-1a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5m4-3a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 18.5 9" /></svg>
  ),
  Fastdelivery: ({ size = 24, color = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill={color} d="M3 13.5L2.25 12H7.5l-.6-1.5H2L1.25 9h7.8l-.6-1.5H1.11L.25 6H4a2 2 0 0 1 2-2h12v4h3l3 4v5h-2a3 3 0 0 1-3 3a3 3 0 0 1-3-3h-4a3 3 0 0 1-3 3a3 3 0 0 1-3-3H4v-3.5zm16 5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5m1.5-9H18V12h4.46zM9 18.5a1.5 1.5 0 0 0 1.5-1.5A1.5 1.5 0 0 0 9 15.5A1.5 1.5 0 0 0 7.5 17A1.5 1.5 0 0 0 9 18.5" /></svg>),
  menu: ({ size = 24, color = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 1200 1200"><path fill={color} d="M0 99.202v178.006h1200V99.202zm0 274.53v178.006h1200V373.732zm0 274.53v178.006h1200V648.262zm0 274.53v178.006h1200V922.792z" /></svg>),
  search: ({ size = 24, color = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 1200 1200"><path fill={color} d="M672.633 0C389.326 0 159.634 229.652 159.634 512.958c0 100.662 28.986 194.563 79.083 273.79c-.368.16-.729.305-1.098.471l-223.21 223.172L204.019 1200l231.249-231.288c-.069-.326-.162-.651-.234-.979c71.035 37.19 151.865 58.224 237.6 58.224c283.309 0 512.959-229.69 512.959-512.997C1185.59 229.652 955.939 0 672.633 0m0 227.877c157.441 0 285.041 127.639 285.041 285.081s-127.6 285.081-285.041 285.081c-157.442 0-285.082-127.639-285.082-285.081S515.19 227.877 672.633 227.877" /></svg>),
  heart: ({ size = 24, color = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill={color} stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0" /></svg>),
  shopping: ({ size = 24, color = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill={color} stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-8 2a2 2 0 1 1-4 0a2 2 0 0 1 4 0" /></svg>),
};

export default icons;
