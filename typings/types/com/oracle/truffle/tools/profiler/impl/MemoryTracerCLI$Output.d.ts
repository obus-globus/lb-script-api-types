import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class MemoryTracerCLI$Output extends Enum<MemoryTracerCLI$Output> {
    static CALLTREE: MemoryTracerCLI$Output;
    static LOCATION_HISTOGRAM: MemoryTracerCLI$Output;
    static TYPE_HISTOGRAM: MemoryTracerCLI$Output;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): MemoryTracerCLI$Output;
    static values(): MemoryTracerCLI$Output[];
    private constructor()
    toString(): string;
    name(): "TYPE_HISTOGRAM" | "LOCATION_HISTOGRAM" | "CALLTREE";
}