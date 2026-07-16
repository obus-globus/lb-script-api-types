import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CPUSamplerCLI$Output extends Enum<CPUSamplerCLI$Output> {
    static CALLTREE: CPUSamplerCLI$Output;
    static FLAMEGRAPH: CPUSamplerCLI$Output;
    static HISTOGRAM: CPUSamplerCLI$Output;
    static JSON: CPUSamplerCLI$Output;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CPUSamplerCLI$Output;
    static values(): CPUSamplerCLI$Output[];
    private constructor()
    toString(): string;
    name(): "HISTOGRAM" | "CALLTREE" | "JSON" | "FLAMEGRAPH";
}