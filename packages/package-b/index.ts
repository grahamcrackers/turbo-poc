export const logger = (str: any) => {
    console.log(`logger: `, str);
};

console.log('package-b loaded');

(() => {
    const handler = (event: MessageEvent) => {
        console.log(event);
        // console.log(event.data);
    };

    window.addEventListener('message', handler, false);
})();
