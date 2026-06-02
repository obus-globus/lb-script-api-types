import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { StackTraceEntry } from '../../../../../com/oracle/truffle/tools/profiler/StackTraceEntry.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CPUTracer$Payload extends Object {
    constructor(location: StackTraceEntry)
    readonly countCompiled: number;
    readonly countInterpreted: number;
    // private location: StackTraceEntry;
    getCount(): number;
    getCountCompiled(): number;
    getCountInterpreted(): number;
    getRootName(): string;
    getSourceSection(): SourceSection;
    getTags(): Class<Object>[];
}