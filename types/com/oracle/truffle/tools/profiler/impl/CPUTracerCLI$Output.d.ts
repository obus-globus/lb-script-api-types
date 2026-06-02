import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CPUTracerCLI$Output extends Enum<CPUTracerCLI$Output> {
    static HISTOGRAM: CPUTracerCLI$Output;
    static JSON: CPUTracerCLI$Output;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CPUTracerCLI$Output;
    static values(): (Object | null)[];
    private constructor()
    toString(): string;
    name(): "HISTOGRAM" | "JSON";
}