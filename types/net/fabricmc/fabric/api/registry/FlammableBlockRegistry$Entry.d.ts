import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FlammableBlockRegistry$Entry extends Object {
    constructor(arg0: number, arg1: number)
    readonly burnOdds: number;
    readonly igniteOdds: number;
    equals(arg0: Object | null): boolean;
    getBurnOdds(): number;
    getIgniteOdds(): number;
    hashCode(): number;
}