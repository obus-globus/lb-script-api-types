import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class UVPair extends Record {
    static pack(paramu: number, paramv: number): number;
    static unpackU(parampackedUV: number): number;
    static unpackV(parampackedUV: number): number;
    constructor(u: number, v: number)
    // private u: number;
    // private v: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    u(): number;
    v(): number;
}