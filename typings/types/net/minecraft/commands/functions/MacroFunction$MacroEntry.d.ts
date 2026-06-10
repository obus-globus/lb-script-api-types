import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ExecutionCommandSource } from '../../../../net/minecraft/commands/ExecutionCommandSource.d.ts'
import type { ExecutionContext } from '../../../../net/minecraft/commands/execution/ExecutionContext.d.ts'
import type { Frame } from '../../../../net/minecraft/commands/execution/Frame.d.ts'
import type { UnboundEntryAction } from '../../../../net/minecraft/commands/execution/UnboundEntryAction.d.ts'
import type { MacroFunction$Entry } from '../../../../net/minecraft/commands/functions/MacroFunction$Entry.d.ts'
import type { StringTemplate } from '../../../../net/minecraft/commands/functions/StringTemplate.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class MacroFunction$MacroEntry<T extends ExecutionCommandSource<T>> extends Object implements MacroFunction$Entry<T> {
    constructor(template: StringTemplate, parameters: (Object | null)[], compilationContext: T)
    // private compilationContext: T;
    // private parameters: (Object | null)[];
    // private template: StringTemplate;
    instantiate(substitutions: string[], dispatcher: CommandDispatcher<T>, functionId: Identifier): (param0: T, param1: ExecutionContext<T>, param2: Frame) => void;
    parameters(): (Object | null)[];
}