export type IconToolNameType = "bold" | "italic" | "underline" | "undo" | "redo" | "ordered_list" | "bullet_list" | "align_left" | "align_center" | "align_right" | "align_justify" | "indent_left" | "indent_right" | "link" | "quote" | "table"
export function setIconValue(name: IconToolNameType): string {
  let iconValue = ``
  switch (name) {
    case "bold":
      iconValue = `<b>B</b>`;
      break;
    case "italic":
      iconValue = `<i>I</i>`;
      break;
    case "underline":
      iconValue = `<u>U</u>`;
      break;
    case "undo":
      iconValue = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.904 18q-.214 0-.357-.143t-.143-.357t.143-.357t.357-.143h6.754q1.556 0 2.65-1.067q1.096-1.067 1.096-2.606t-1.095-2.596q-1.096-1.058-2.651-1.058H6.916l2.611 2.611q.16.16.16.354t-.16.354t-.363.15q-.204-.01-.345-.15L5.565 9.74q-.13-.131-.183-.268q-.053-.136-.053-.298t.053-.298t.184-.267l3.253-3.254q.16-.16.354-.16t.354.16t.15.363t-.15.345l-2.611 2.61h7.742q1.963 0 3.355 1.354q1.39 1.354 1.39 3.3t-1.39 3.31T14.657 18z"/></svg>`;
      break;
    case "redo":
      iconValue = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.342 18q-1.963 0-3.355-1.364t-1.39-3.309t1.39-3.3Q7.38 8.673 9.343 8.673h7.743L14.12 5.708L14.828 5L19 9.173l-4.173 4.173l-.708-.707l2.966-2.966H9.342q-1.556 0-2.65 1.058q-1.096 1.058-1.096 2.596t1.095 2.606Q7.787 17 9.342 17h7.254v1z"/></svg>`;
      break;
    case "ordered_list":
      iconValue = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M3.59 3.03h12.2v1.26H3.59zm0 4.29h12.2v1.26H3.59zm0 4.35h12.2v1.26H3.59zM.99 4.79h.49V2.52H.6v.45h.39zm.87 3.88H.91l.14-.11l.3-.24c.35-.28.49-.5.49-.79A.74.74 0 0 0 1 6.8a.77.77 0 0 0-.81.84h.52A.34.34 0 0 1 1 7.25a.31.31 0 0 1 .31.31a.6.6 0 0 1-.22.44l-.87.75v.39h1.64zm-.36 3.56a.52.52 0 0 0 .28-.48a.67.67 0 0 0-.78-.62a.71.71 0 0 0-.77.75h.5a.3.3 0 0 1 .27-.32a.26.26 0 1 1 0 .51H.91v.38H1c.23 0 .37.11.37.29a.29.29 0 0 1-.33.29a.35.35 0 0 1-.36-.35H.21a.76.76 0 0 0 .83.8a.74.74 0 0 0 .83-.72a.53.53 0 0 0-.37-.53"/></svg>`;
      break;
    case "bullet_list":
      iconValue = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8.75 5.5h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5m0 6h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5m0 6h11.5a.75.75 0 0 1 0 1.5H8.75a.75.75 0 0 1 0-1.5M5 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0M4 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 12a1 1 0 1 1 0-2a1 1 0 0 1 0 2"/></svg>`;
      break;
    case "align_left":
      iconValue = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-5 -7 24 24"><path fill="currentColor" d="M1 0h6a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m0 8h8a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m0-4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"/></svg>`;
      break;
    case "align_center":
      iconValue = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-5 -7 24 24"><path fill="currentColor" d="M3 0h8a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2m0 8h8a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2M1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"/></svg>`;
      break;
    case "align_justify":
      iconValue = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-5 -7 24 24"><path fill="currentColor" d="M1 0h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2m0 8h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2m0-4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"/></svg>`;
      break;
    case "align_right":
      iconValue = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-5 -7 24 24"><path fill="currentColor" d="M7 0h6a1 1 0 0 1 0 2H7a1 1 0 1 1 0-2M5 8h8a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2M1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"/></svg>`;
      break;
    case "indent_left":
      iconValue = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 7H4V5h16zm0 4h-8V9h8zm-8 4h8v-2h-8zM9 9l-5 3l5 3zm-5 8v2h16v-2z"/></svg>`;
      break;
    case "indent_right":
      iconValue = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 7H4V5h16zm0 4h-8V9h8zm-8 4h8v-2h-8zm-8 0l5-3l-5-3zm0 2v2h16v-2z"/></svg>`;
      break;
    case "link":
      iconValue = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12.762 5.2a4.275 4.275 0 0 1 6.045 6.045l-.006.006l-2.265 2.265a4.277 4.277 0 0 1-6.446-.461a.5.5 0 1 1 .8-.6a3.275 3.275 0 0 0 4.939.354l2.262-2.262a3.275 3.275 0 0 0-4.631-4.63l-1.296 1.288a.5.5 0 1 1-.705-.709zm-3.77 4.3a4.275 4.275 0 0 1 4.918 1.445a.5.5 0 1 1-.8.6a3.277 3.277 0 0 0-4.94-.354l-2.26 2.262a3.275 3.275 0 0 0 4.63 4.63l1.289-1.287a.5.5 0 0 1 .707.707L11.238 18.8a4.275 4.275 0 0 1-6.045-6.045l.006-.006l2.265-2.265A4.3 4.3 0 0 1 8.993 9.5" clip-rule="evenodd"/></svg>`;
      break;
    case "quote":
      iconValue = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M176.61 254.781q-43.886-9.752-43.886-51.2q0-24.076 14.629-39.01q14.934-15.237 39.01-15.238q24.075 0 38.4 14.934q14.628 14.933 14.628 39.619q0 57.905-84.114 158.781l-24.076-18.286q35.961-48.762 45.409-89.6m142.019 0q-43.885-9.752-43.885-51.2q0-24.076 14.628-39.01q14.934-15.237 39.01-15.238q23.77 0 38.4 14.934q14.628 14.933 14.628 39.619q0 58.818-84.114 158.781l-24.076-18.286q35.962-48.457 45.409-89.6"/></svg>`;
      break;
    case "table":
      iconValue = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3 15h18M3 9h18M9 21V3m6 18V3M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"/></svg>`
      break;
    default:
      iconValue =
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q1.465 0 2.82-.514q1.357-.515 2.465-1.494L6.008 6.716q-.96 1.107-1.484 2.463T4 12q0 3.35 2.325 5.675T12 20m5.992-2.716q.98-1.107 1.493-2.463Q20 13.465 20 12q0-3.35-2.325-5.675T12 4q-1.471 0-2.834.505q-1.362.504-2.45 1.503z"/></svg>`;
      break;
  }
  return iconValue
}