import type { Instrumentation } from '../../../../java/lang/instrument/Instrumentation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { Level } from '../../../../org/spongepowered/asm/logging/Level.d.ts'
import type { IMixinTransformer } from '../../../../org/spongepowered/asm/mixin/transformer/IMixinTransformer.d.ts'
import type { IHotSwap } from '../../../../org/spongepowered/asm/mixin/transformer/ext/IHotSwap.d.ts'
export class MixinAgent extends Object implements IHotSwap {
    static ERROR_BYTECODE: number[];
    static agentmain(paramarg0: string, paramarg1: Instrumentation): void;
    static init(paramarg0: Instrumentation): void;
    static log(paramarg0: Level, paramarg1: string, ...paramarg2: (Object | null)[]): void;
    static premain(paramarg0: string, paramarg1: Instrumentation): void;
    constructor(arg0: IMixinTransformer)
    // private classTransformer: IMixinTransformer;
    // private initTransformer(): void;
    registerMixinClass(arg0: string): void;
    registerTargetClass(arg0: string, arg1: ClassNode): void;
}