import { LX } from 'lexgui';

window.LX = LX;

// Init library and get main area
const area = LX.init();
area.attach( document.getElementById( "content" ) );

const buttonContainer = document.getElementById( "button-container" );
const panel = new LX.Panel();
buttonContainer.appendChild( panel.root );

panel.sameLine(2);
const buttonWidget = panel.addButton(null, "Enter Rooms", () => {
    Module["webxr_request_session_func"]('immersive-vr', ['webgpu']);
}, { disabled: true });
panel.addButton(null, "Learn More", () => { window.open( "https://github.com/upf-gti/rooms", "_blank" ) });

window.onXrReady = () => {
    buttonWidget.querySelector( "button" ).disabled = false;
}

const footer = new LX.Footer( {
    parent: area.root,
    columns: [
        {
            title: "About Rooms",
            items: [
                { title: "Desktop download", link: "" },
                // { title: "Documentation", link: "" },
            ]
        },
        {
            title: "About wgpuEngine",
            items: [
                { title: "Source code", link: "https://github.com/upf-gti/wgpuEngine" },
                { title: "Documentation", link: "https://upf-gti.github.io/wgpuEngine/" },
            ]
        },
        {
            title: "MAX-R Project",
            items: [
                { title: "Official webpage", link: "https://www.upf.edu/web/max-r" },
                { title: "Partners", link: "https://www.upf.edu/web/max-r/the-consortium" }
            ]
        },
        {
            title: "About UPF-GTI",
            items: [
                { title: "Web page", link: "http://upf.edu/web/gti" },
                { title: "Other projects", link: "https://www.upf.edu/web/gti/projects" }
            ]
        }
    ],
    credits: `2022-${ new Date().getUTCFullYear() } Pablo L. Garcia, Juan S. Marquerie, Alex Rodríguez.<br>
    Developed with partial financial support of: MAX-R Project (HORIZON), Wi-XR Project (PID2021-123995NB-I00).`,
    socials: [
        { title: "Github", link: "https://github.com/upf-gti/rooms", icon: `<a class="fa-brands fa-github"></a>` },
        // { title: "BlueSky", link: "", icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M407.8 294.7c-3.3-.4-6.7-.8-10-1.3 3.4.4 6.7.9 10 1.3zM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3 61.6-9.4 37.5-1.7 21.6 5.5 3.3 13.8.0 41.9.0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7 3.3-.5 6.6-.9 10-1.4-3.3.5-6.6 1-10 1.4-93.9 14-177.3 48.2-67.9 169.9C220.6 589.1 265.1 437.8 288 361.1c22.9 76.7 49.2 222.5 185.6 103.4 102.4-103.4 28.1-156-65.8-169.9-3.3-.4-6.7-.8-10-1.3 3.4.4 6.7.9 10 1.3 64.1 7.1 133.6-15.1 153.2-80.7C566.9 194 576 75 576 58.4s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8C385.1 81.9 314.1 176.4 288 227.1z"></path></svg>` },
        // { title: "Mastodon", link: "", icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M433 179.1c0-97.2-63.7-125.7-63.7-125.7-62.5-28.7-228.6-28.4-290.5.0.0.0-63.7 28.5-63.7 125.7.0 115.7-6.6 259.4 105.6 289.1 40.5 10.7 75.3 13 103.3 11.4 50.8-2.8 79.3-18.1 79.3-18.1l-1.7-36.9s-36.3 11.4-77.1 10.1c-40.4-1.4-83-4.4-89.6-54a102.5 102.5.0 01-.9-13.9c85.6 20.9 158.7 9.1 178.8 6.7 56.1-6.7 105-41.3 111.2-72.9 9.8-49.8 9-121.5 9-121.5zm-75.1 125.2h-46.6V190.1c0-49.7-64-51.6-64 6.9v62.5H201V197c0-58.5-64-56.6-64-6.9v114.2H90.2c0-122.1-5.2-147.9 18.4-175 25.9-28.9 79.8-30.8 103.8 6.1l11.6 19.5 11.6-19.5c24.1-37.1 78.1-34.8 103.8-6.1 23.7 27.3 18.4 53 18.4 175z"></path></svg>` },
        // { title: "Discord", link: "", icon: `<a class="fa-brands fa-discord"></a>` },
        { title: "X", link: "https://x.com/GTI_UPF", icon: `<a class="fa-brands fa-x-twitter"></a>` }
    ]
} );