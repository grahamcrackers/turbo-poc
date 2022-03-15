export const logger = (str: any) => {
    console.log(`logger: `, str);
};

console.log('package-a loaded');

logger('post something');
window.postMessage('package-a', '*');
window.postMessage({ foo: 'bar' }, '*');
