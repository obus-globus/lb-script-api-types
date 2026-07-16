import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CPUTracerCLI$Output extends Enum<CPUTracerCLI$Output> {
    static HISTOGRAM: CPUTracerCLI$Output;
    static JSON: CPUTracerCLI$Output;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CPUTracerCLI$Output;
    static values(): CPUTracerCLI$Output[];
    private constructor()
    toString(): string;
    name(): "HISTOGRAM" | "JSON";
}