import type { Command } from '../../../../../com/mojang/brigadier/Command.d.ts'
import type { CommandContext } from '../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CoroutineScope } from '../../../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { KAsyncCommand$Handler } from '../../../../../net/ccbluex/liquidbounce/features/command/KAsyncCommand$Handler.d.ts'
export class KAsyncCommand<S extends unknown> extends Object implements Command<S> {
    static SINGLE_SUCCESS: number;
    constructor(allowParallel: boolean, scope: CoroutineScope, handler: KAsyncCommand$Handler<S>)
    readonly allowParallel: boolean;
    readonly handler: KAsyncCommand$Handler<S>;
    // private scope: CoroutineScope;
    run(ctx: CommandContext<S>): number;
}