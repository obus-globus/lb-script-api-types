import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Ticker extends Object {
    static systemTicker(): Ticker;
    constructor()
    read(): number;
}