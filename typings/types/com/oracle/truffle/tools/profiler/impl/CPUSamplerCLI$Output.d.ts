import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CPUSamplerCLI$Output extends Enum<CPUSamplerCLI$Output> {
    static CALLTREE: CPUSamplerCLI$Output;
    static FLAMEGRAPH: CPUSamplerCLI$Output;
    static HISTOGRAM: CPUSamplerCLI$Output;
    static JSON: CPUSamplerCLI$Output;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CPUSamplerCLI$Output;
    static values(): (Object | null)[];
    private constructor()
    toString(): string;
    name(): "HISTOGRAM" | "CALLTREE" | "JSON" | "FLAMEGRAPH";
}