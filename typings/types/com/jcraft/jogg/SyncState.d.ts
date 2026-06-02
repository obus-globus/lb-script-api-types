import type { Page } from '../../../com/jcraft/jogg/Page.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class SyncState extends Object {
    constructor()
    // private bodybytes: number;
    // private chksum: number[];
    data: number[];
    // private fill: number;
    // private headerbytes: number;
    // private pageseek: Page;
    // private returned: number;
    // private storage: number;
    // private unsynced: number;
    buffer(arg0: number): number;
    clear(): number;
    getBufferOffset(): number;
    getDataOffset(): number;
    init(): void;
    pageout(arg0: Page): number;
    pageseek(arg0: Page): number;
    reset(): number;
    wrote(arg0: number): number;
}