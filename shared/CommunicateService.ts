export class CommunicateService {
  static postMessage(message: string, targetOrigin: string = '*') {
    window.parent.postMessage(message, targetOrigin); 
    console.log('Message sent to', targetOrigin);
  }

  static onMessage(callback: (event: MessageEvent) => void) {
    window.addEventListener('message', (event) => {
      if (['http://localhost:4173', 'http://localhost:5002'].includes(event.origin)) {
        callback(event);
        console.log('Message received from', event.origin);
      }
    });
  }
}
