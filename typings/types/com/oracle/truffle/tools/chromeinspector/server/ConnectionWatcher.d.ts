import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ConnectionWatcher extends Object {
    constructor()
    // private doWaitForClose: boolean;
    // private opened: boolean;
    // private isClosed(): boolean;
    notifyClosing(): void;
    notifyOpen(): void;
    setWaitForClose(): void;
    shouldWaitForClose(): boolean;
    // private shouldWaitForOpen(): boolean;
    waitForClose(): void;
    waitForOpen(): void;
}