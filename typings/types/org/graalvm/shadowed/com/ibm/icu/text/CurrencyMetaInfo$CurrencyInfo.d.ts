import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class CurrencyMetaInfo$CurrencyInfo extends Object {
    constructor(region: string, code: string, from: number, to: number, priority: number)
    constructor(region: string, code: string, from: number, to: number, priority: number, tender: boolean)
    code: string;
    from: number;
    priority: number;
    region: string;
    readonly tender: boolean;
    to: number;
    isTender(): boolean;
    toString(): string;
}