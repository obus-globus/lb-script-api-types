import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class HashCode extends Object {
    static fromBytes(parambytes: number[]): HashCode;
    static fromInt(paramhash: number): HashCode;
    static fromLong(paramhash: number): HashCode;
    static fromString(paramstring: string): HashCode;
    constructor()
    asBytes(): number[];
    asInt(): number;
    asLong(): number;
    bits(): number;
    equals(object: Object | null): boolean;
    equalsSameBits(that: HashCode): boolean;
    getBytesInternal(): number[];
    hashCode(): number;
    padToLong(): number;
    toString(): string;
    writeBytesTo(dest: number[], offset: number, maxLength: number): number;
    writeBytesToImpl(dest: number[], offset: number, maxLength: number): void;
}