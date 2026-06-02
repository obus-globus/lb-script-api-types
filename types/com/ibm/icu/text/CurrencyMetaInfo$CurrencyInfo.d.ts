import type { Object } from '../../../../java/lang/Object.d.ts'
export class CurrencyMetaInfo$CurrencyInfo extends Object {
    constructor(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number)
    constructor(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: boolean)
    code: string;
    from: number;
    priority: number;
    region: string;
    readonly tender: boolean;
    to: number;
    isTender(): boolean;
    toString(): string;
}