import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HeapDump$Builder } from '../../../../../../org/graalvm/tools/insight/heap/HeapDump$Builder.d.ts'
import type { CacheReplacement } from '../../../../../../org/graalvm/tools/insight/heap/instrument/CacheReplacement.d.ts'
import type { MemoryDump$MetaObjectCopy } from '../../../../../../org/graalvm/tools/insight/heap/instrument/MemoryDump$MetaObjectCopy.d.ts'
import type { MemoryDump$ObjectCopy } from '../../../../../../org/graalvm/tools/insight/heap/instrument/MemoryDump$ObjectCopy.d.ts'
import type { WeakIdentityHashMap } from '../../../../../../org/graalvm/tools/insight/heap/instrument/WeakIdentityHashMap.d.ts'
export class MemoryDump extends Object implements TruffleObject {
    constructor(limit: number, replacement: CacheReplacement, heapDumpBuilder: () => HeapDump$Builder)
    // private events: Object[];
    // private heapDumpBuilder: () => HeapDump$Builder;
    // private limit: number;
    // private maxDepth: number;
    // private metaObjectCache: JavaMap<string, MemoryDump$MetaObjectCopy>;
    // private objectCache: WeakIdentityHashMap<Object, MemoryDump$ObjectCopy>;
    // private replacement: CacheReplacement;
    addDump(dump: Object[]): void;
    clear(): void;
    eventCount(): number;
    flush(): void;
    getMembers(includeInternal: boolean): Object;
    hasMembers(): boolean;
    isMemberReadable(member: string): boolean;
    readMember(name: string): Object;
}