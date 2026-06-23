import type { Object } from '../../../java/lang/Object.d.ts'
export class Symbol extends Object {
    constructor(symbol: string)
    symbol: string;
    toString(): string;
    unbox<T extends unknown>(value: Object | null): T;
}