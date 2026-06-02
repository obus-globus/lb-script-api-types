import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FetchKey extends Object implements Serializable {
    constructor()
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: number, arg3: number)
    readonly fetchKey: string;
    readonly fetcherName: string;
    readonly rangeEnd: number;
    readonly rangeStart: number;
    equals(arg0: Object | null): boolean;
    getFetchKey(): string;
    getFetcherName(): string;
    getRangeEnd(): number;
    getRangeStart(): number;
    hasRange(): boolean;
    hashCode(): number;
    toString(): string;
}