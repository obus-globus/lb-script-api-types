import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ExecutionContext } from '../../../../net/minecraft/commands/execution/ExecutionContext.d.ts'
import type { UnboundEntryAction } from '../../../../net/minecraft/commands/execution/UnboundEntryAction.d.ts'
import type { MacroFunction$Entry } from '../../../../net/minecraft/commands/functions/MacroFunction$Entry.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class MacroFunction$PlainTextEntry<T extends Object | number | string | boolean> extends Object implements MacroFunction$Entry<T> {
    constructor(compiledAction: (param0: T, param1: Object | null, param2: ExecutionContext<Object>) => void)
    // private compiledAction: (param0: T, param1: Object | null, param2: ExecutionContext<Object>) => void;
    instantiate(substitutions: string[], dispatcher: CommandDispatcher<T>, functionId: Identifier): (param0: T, param1: Object | null, param2: ExecutionContext<Object>) => void;
    parameters(): (Object | null)[];
}