import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HeapDump } from '../../../../../../org/graalvm/tools/insight/heap/HeapDump.d.ts'
import type { HeapDump$Builder } from '../../../../../../org/graalvm/tools/insight/heap/HeapDump$Builder.d.ts'
import type { HeapDump$ClassInstance } from '../../../../../../org/graalvm/tools/insight/heap/HeapDump$ClassInstance.d.ts'
import type { HeapDump$ObjectInstance } from '../../../../../../org/graalvm/tools/insight/heap/HeapDump$ObjectInstance.d.ts'
import type { HeapGenerator$Dump } from '../../../../../../org/graalvm/tools/insight/heap/instrument/HeapGenerator$Dump.d.ts'
import type { HeapGenerator$SourceKey } from '../../../../../../org/graalvm/tools/insight/heap/instrument/HeapGenerator$SourceKey.d.ts'
import type { HeapGenerator$SourceSectionKey } from '../../../../../../org/graalvm/tools/insight/heap/instrument/HeapGenerator$SourceSectionKey.d.ts'
export class HeapGenerator extends Object {
    constructor(generator: HeapDump$Builder)
    // private classes: JavaMap<string[], HeapDump$ClassInstance>;
    // private frames: number;
    // private generator: HeapDump$Builder;
    // private keyClass: HeapDump$ClassInstance;
    // private languages: JavaMap<string, HeapDump$ClassInstance>;
    // private objects: JavaMap<Object, HeapDump$ObjectInstance>;
    // private pending: HeapGenerator$Dump[];
    // private sourceClass: HeapDump$ClassInstance;
    // private sourceSectionClass: HeapDump$ClassInstance;
    // private sourceSections: JavaMap<HeapGenerator$SourceSectionKey, HeapDump$ObjectInstance>;
    // private sources: JavaMap<HeapGenerator$SourceKey, HeapDump$ObjectInstance>;
    // private unreachable: HeapDump$ObjectInstance;
    dump(args: Object[]): void;
    // private dumpObject(iop: InteropLibrary, seg: HeapDump, metaName: string, obj: Object, depth: number): HeapDump$ObjectInstance;
    // private dumpSource(iop: InteropLibrary, seg: HeapDump, source: Object): HeapDump$ObjectInstance;
    // private dumpSourceSection(seg: HeapDump, sourceId: HeapDump$ObjectInstance, charIndex: number, charLength: number): HeapDump$ObjectInstance;
    // private dumpStack(seg: HeapDump, iop: InteropLibrary, stack: Object, depth: number): void;
    findClass(iop: InteropLibrary, seg: HeapDump, metaHint: string, obj: Object): HeapDump$ClassInstance;
    // private findLanguage(seg: HeapDump, language: string): HeapDump$ClassInstance;
}