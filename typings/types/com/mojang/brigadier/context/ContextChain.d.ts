import type { ResultConsumer } from '../../../../com/mojang/brigadier/ResultConsumer.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { ContextChain$Stage } from '../../../../com/mojang/brigadier/context/ContextChain$Stage.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ContextChainAccessor } from '../../../../net/fabricmc/fabric/mixin/entity/event/effect/ContextChainAccessor.d.ts'
export class ContextChain<S extends unknown> extends Object implements ContextChainAccessor<Object> {
    static runExecutable(paramarg0: CommandContext<Object>, paramarg1: Object | null, paramarg2: (param0: CommandContext<Object>, param1: boolean, param2: number) => void, paramarg3: boolean): number;
    static runModifier(paramarg0: CommandContext<Object>, paramarg1: Object | null, paramarg2: (param0: CommandContext<Object>, param1: boolean, param2: number) => void, paramarg3: boolean): (Object | null)[];
    static tryFlatten(paramarg0: CommandContext<Object>): Optional<ContextChain<Object>>;
    constructor(arg0: CommandContext<S>[], arg1: CommandContext<S>)
    // private executable: CommandContext<S>;
    readonly modifiers: CommandContext<S>[];
    // private nextStageCache: ContextChain<S>;
    executeAll(arg0: S, arg1: (param0: CommandContext<S>, param1: boolean, param2: number) => void): number;
    getStage(): ContextChain$Stage;
    getTopContext(): CommandContext<S>;
    nextStage(): ContextChain<S>;
}