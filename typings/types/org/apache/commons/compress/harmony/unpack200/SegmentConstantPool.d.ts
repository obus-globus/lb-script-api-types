import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CpBands } from '../../../../../../org/apache/commons/compress/harmony/unpack200/CpBands.d.ts'
import type { SegmentConstantPoolArrayCache } from '../../../../../../org/apache/commons/compress/harmony/unpack200/SegmentConstantPoolArrayCache.d.ts'
import type { ClassFileEntry } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ClassFileEntry.d.ts'
import type { ConstantPoolEntry } from '../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/ConstantPoolEntry.d.ts'
export class SegmentConstantPool extends Object {
    static ALL: number;
    static CP_CLASS: number;
    static CP_DESCR: number;
    static CP_DOUBLE: number;
    static CP_FIELD: number;
    static CP_FLOAT: number;
    static CP_IMETHOD: number;
    static CP_INT: number;
    static CP_LONG: number;
    static CP_METHOD: number;
    static CP_STRING: number;
    static SIGNATURE: number;
    static UTF_8: number;
    constructor(arg0: CpBands)
    // private arrayCache: SegmentConstantPoolArrayCache;
    // private bands: CpBands;
    getClassPoolEntry(arg0: string): ConstantPoolEntry;
    getClassSpecificPoolEntry(arg0: number, arg1: number, arg2: string): ConstantPoolEntry;
    getConstantPoolEntry(arg0: number, arg1: number): ConstantPoolEntry;
    getInitMethodPoolEntry(arg0: number, arg1: number, arg2: string): ConstantPoolEntry;
    getValue(arg0: number, arg1: number): ClassFileEntry;
    matchSpecificPoolEntryIndex(arg0: string[], arg1: string[], arg2: string, arg3: string, arg4: number): number;
    matchSpecificPoolEntryIndex(arg0: string[], arg1: string, arg2: number): number;
}