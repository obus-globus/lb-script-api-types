import type { Object } from '../../../../java/lang/Object.d.ts'
export class EndFlashStorage extends Object {
    constructor()
    readonly currentEndFlash: number;
    readonly lastEndFlash: number;
    getCurrentEndFlash(): number;
    getLastEndFlash(): number;
    tick(): void;
}