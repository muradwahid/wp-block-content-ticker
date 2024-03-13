const iconColor = '#4527a4';

export const blockIcon = (
  <svg version="1.0" style={{color:iconColor}} xmlns="http://www.w3.org/2000/svg"
    width="84.000000pt" height="82.000000pt" viewBox="0 0 84.000000 82.000000"
    preserveAspectRatio="xMidYMid meet">
    <g fill="currentColor" transform="translate(0.000000,82.000000) scale(0.100000,-0.100000)"
      stroke="none">
      <path d="M42 754 c-22 -15 -22 -17 -22 -303 0 -271 1 -289 19 -305 11 -10 27
        -16 37 -14 24 4 30 28 7 28 -41 0 -43 13 -43 291 0 214 3 269 14 278 9 8 100
        11 312 9 l299 -3 3 -22 c5 -31 32 -30 32 1 0 53 -18 56 -340 56 -251 0 -299
        -2 -318 -16z"/>
              <path d="M137 642 c-15 -16 -17 -52 -17 -300 0 -242 2 -283 16 -296 13 -14 57
        -16 329 -16 313 0 314 0 329 22 24 33 24 553 0 586 -15 22 -16 22 -328 22
        -290 0 -314 -1 -329 -18z m638 -297 l0 -280 -310 0 -310 0 -3 270 c-1 148 0
        275 3 282 3 11 70 13 312 11 l308 -3 0 -280z"/>
              <path d="M223 595 c0 -8 9 -15 19 -15 10 0 18 7 18 15 0 8 -8 15 -18 15 -10 0
        -19 -7 -19 -15z"/>
              <path d="M177 553 c-4 -3 -7 -10 -7 -15 0 -4 133 -8 296 -8 232 0 295 3 292
        13 -4 9 -72 13 -290 15 -156 1 -287 -1 -291 -5z"/>
              <path d="M482 409 c5 -16 188 -18 188 -1 0 9 -26 12 -96 12 -64 0 -94 -4 -92
        -11z"/>
              <path d="M315 398 c-23 -62 -55 -164 -55 -175 0 -8 12 -13 31 -13 22 0 32 5
        36 20 4 14 14 20 34 20 22 0 29 -5 29 -20 0 -16 7 -20 36 -20 25 0 35 4 31 13
        -2 6 -16 51 -31 100 l-27 87 -40 0 c-23 0 -42 -5 -44 -12z m96 -85 c26 -77 26
        -83 9 -83 -10 0 -20 9 -23 20 -4 15 -14 20 -40 20 -27 0 -37 -5 -42 -20 -6
        -18 -35 -29 -35 -14 0 4 12 42 27 86 24 72 29 79 51 76 22 -3 29 -14 53 -85z"/>
              <path d="M341 339 c-16 -47 -14 -59 13 -59 33 0 37 10 25 53 -12 45 -24 47
        -38 6z"/>
              <path d="M480 350 c0 -6 38 -10 95 -10 57 0 95 4 95 10 0 6 -38 10 -95 10 -57
        0 -95 -4 -95 -10z"/>
    </g>
  </svg>


);

export const leftangle = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="16"
    width="10"
    viewBox="0 0 320 512"
  >
    <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
  </svg>
);
export const rightAngel = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="16"
    width="10"
    viewBox="0 0 320 512"
  >
    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
  </svg>
);

export const FaAngleLeft = (...props) => {
  return <svg {...props} xmlns = "http://www.w3.org/2000/svg" height="1em" width="1em" viewBox = "0 0 320 512" ><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
}
export const FaAngleRight = (...props) => {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
}

export const FaPlus = (...props) => {
  return <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path></svg>
}

export const ArrowDown = (...props)=>{ 
  return <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
}

export const ArrowUp = (...props) => { 
  return <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path></svg>
}