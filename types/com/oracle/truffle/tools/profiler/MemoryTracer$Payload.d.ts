import type { MemoryTracer$AllocationEventInfo } from '../../../../../com/oracle/truffle/tools/profiler/MemoryTracer$AllocationEventInfo.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MemoryTracer$Payload extends Object {
    constructor()
    readonly events: MemoryTracer$AllocationEventInfo[];
    readonly totalAllocations: number;
    getEvents(): MemoryTracer$AllocationEventInfo[];
    getTotalAllocations(): number;
    incrementTotalAllocations(): void;
}