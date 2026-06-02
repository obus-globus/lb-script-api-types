import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MemoryDump$Location } from '../../../../../../org/graalvm/tools/insight/heap/instrument/MemoryDump$Location.d.ts'
export class MemoryDump$StackTraceElement extends Object implements TruffleObject {
    private constructor(at: MemoryDump$Location, frame: Object)
    // private at: MemoryDump$Location;
    // private frame: Object;
    getMembers(includeInternal: boolean): Object;
    hasMembers(): boolean;
    isMemberReadable(member: string): boolean;
    readMember(name: string): Object;
}