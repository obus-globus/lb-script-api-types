import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class MemoryTracerCLI$Output extends Enum<MemoryTracerCLI$Output> {
    static CALLTREE: MemoryTracerCLI$Output;
    static LOCATION_HISTOGRAM: MemoryTracerCLI$Output;
    static TYPE_HISTOGRAM: MemoryTracerCLI$Output;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): MemoryTracerCLI$Output;
    static values(): MemoryTracerCLI$Output[];
    private constructor()
    toString(): string;
    name(): "TYPE_HISTOGRAM" | "LOCATION_HISTOGRAM" | "CALLTREE";
}