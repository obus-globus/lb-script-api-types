import type { HashCode } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/hash/HashCode.d.ts'
import type { HashFunction } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/hash/HashFunction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
export class HashBuilder extends Object {
    constructor(arg0: HashFunction)
    constructor(arg0: HashFunction, arg1: number)
    // private bytes: number[];
    // private hashFunction: HashFunction;
    // private index: number;
    addByte(arg0: number): HashBuilder;
    addBytes(arg0: number[]): HashBuilder;
    addChar(arg0: string): HashBuilder;
    addCharSequence(arg0: CharSequence): HashBuilder;
    addDouble(arg0: number): HashBuilder;
    addFloat(arg0: number): HashBuilder;
    addInt(arg0: number): HashBuilder;
    addLong(arg0: number): HashBuilder;
    addShort(arg0: number): HashBuilder;
    // private ensureSize(arg0: number): void;
    hash(): HashCode;
}