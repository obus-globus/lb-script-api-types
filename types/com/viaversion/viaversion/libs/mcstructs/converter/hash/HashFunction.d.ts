import type { HashBuilder } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/hash/HashBuilder.d.ts'
import type { HashCode } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/hash/HashCode.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class HashFunction extends Object {
    static CRC32C: HashFunction;
    constructor()
    builder(): HashBuilder;
    builder(arg0: number): HashBuilder;
    hash(arg0: number[]): HashCode;
}