import type { HashFunction } from '../../../../../com/viaversion/viaversion/codec/hash/HashFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class HashBuilder extends Object {
    constructor(arg0: (param0: number[], param1: number) => kotlin.Int)
    // private bytes: number[];
    // private direct: boolean;
    // private hashFunction: (param0: number[], param1: number) => kotlin.Int;
    // private index: number;
    // private ensureSize(arg0: number): void;
    function(): (param0: number[], param1: number) => kotlin.Int;
    hash(): number;
    preSize(arg0: number): HashBuilder;
    reset(): void;
    writeBoolean(arg0: boolean): HashBuilder;
    writeByte(arg0: number): HashBuilder;
    writeBytes(arg0: number[]): HashBuilder;
    writeBytesDirect(arg0: number[]): void;
    writeChar(arg0: string): HashBuilder;
    writeDouble(arg0: number): HashBuilder;
    writeFloat(arg0: number): HashBuilder;
    writeInt(arg0: number): HashBuilder;
    writeLong(arg0: number): HashBuilder;
    writeShort(arg0: number): HashBuilder;
    writeString(arg0: CharSequence): HashBuilder;
}