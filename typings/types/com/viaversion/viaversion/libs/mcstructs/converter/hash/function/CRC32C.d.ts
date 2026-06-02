import type { HashCode } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/hash/HashCode.d.ts'
import type { HashFunction } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/hash/HashFunction.d.ts'
export class CRC32C extends HashFunction {
    static CRC32C: HashFunction;
    constructor()
    hash(arg0: number[]): HashCode;
}