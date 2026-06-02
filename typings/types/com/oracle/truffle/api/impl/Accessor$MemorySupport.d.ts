import type { Accessor$Support } from '../../../../../com/oracle/truffle/api/impl/Accessor$Support.d.ts'
import type { ByteArraySupport } from '../../../../../com/oracle/truffle/api/memory/ByteArraySupport.d.ts'
export abstract class Accessor$MemorySupport extends Accessor$Support {
    constructor()
    getNativeChecked(): ByteArraySupport;
    getNativeUnsafe(): ByteArraySupport;
}