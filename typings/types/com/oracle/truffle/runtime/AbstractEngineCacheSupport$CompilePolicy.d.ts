import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class AbstractEngineCacheSupport$CompilePolicy extends Enum<AbstractEngineCacheSupport$CompilePolicy> {
    static aot: AbstractEngineCacheSupport$CompilePolicy;
    static compiled: AbstractEngineCacheSupport$CompilePolicy;
    static executed: AbstractEngineCacheSupport$CompilePolicy;
    static hot: AbstractEngineCacheSupport$CompilePolicy;
    static none: AbstractEngineCacheSupport$CompilePolicy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): AbstractEngineCacheSupport$CompilePolicy;
    static values(): AbstractEngineCacheSupport$CompilePolicy[];
    private constructor()
    name(): "executed" | "aot" | "hot" | "compiled" | "none";
}