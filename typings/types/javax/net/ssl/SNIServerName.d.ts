import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class SNIServerName extends Object {
    constructor(arg0: number, arg1: number[])
    readonly encoded: number[];
    readonly type: number;
    equals(arg0: Object | null): boolean;
    getEncoded(): number[];
    getType(): number;
    hashCode(): number;
    toString(): string;
}