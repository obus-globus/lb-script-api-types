import type { Accessor$MemorySupport } from '../../../../../com/oracle/truffle/api/impl/Accessor$MemorySupport.d.ts'
import type { ByteArraySupport } from '../../../../../com/oracle/truffle/api/memory/ByteArraySupport.d.ts'
export class MemoryAccessor$MemorySupportImpl extends Accessor$MemorySupport {
    constructor()
    getNativeChecked(): ByteArraySupport;
    getNativeUnsafe(): ByteArraySupport;
}