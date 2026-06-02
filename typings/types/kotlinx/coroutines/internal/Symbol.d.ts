import type { Object } from '../../../java/lang/Object.d.ts'
export class Symbol extends Object {
    constructor(symbol: string)
    symbol: string;
    toString(): string;
    unbox<T extends Object | number | string | boolean>(value: Object | null): T;
}