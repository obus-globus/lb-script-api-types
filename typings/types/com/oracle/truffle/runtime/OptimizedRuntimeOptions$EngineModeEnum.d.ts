import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class OptimizedRuntimeOptions$EngineModeEnum extends Enum<OptimizedRuntimeOptions$EngineModeEnum> {
    static DEFAULT: OptimizedRuntimeOptions$EngineModeEnum;
    static LATENCY: OptimizedRuntimeOptions$EngineModeEnum;
    static THROUGHPUT: OptimizedRuntimeOptions$EngineModeEnum;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): OptimizedRuntimeOptions$EngineModeEnum;
    static values(): OptimizedRuntimeOptions$EngineModeEnum[];
    private constructor()
    toString(): string;
    name(): "DEFAULT" | "LATENCY" | "THROUGHPUT";
}