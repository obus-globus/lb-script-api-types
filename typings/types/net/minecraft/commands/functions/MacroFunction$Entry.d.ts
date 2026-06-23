import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ExecutionContext } from '../../../../net/minecraft/commands/execution/ExecutionContext.d.ts'
import type { Frame } from '../../../../net/minecraft/commands/execution/Frame.d.ts'
import type { UnboundEntryAction } from '../../../../net/minecraft/commands/execution/UnboundEntryAction.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export interface MacroFunction$Entry<T extends unknown> extends Object {
    instantiate(substitutions: string[], dispatcher: CommandDispatcher<T>, funtionId: Identifier): (param0: T, param1: ExecutionContext<T>, param2: Frame) => void;
    parameters(): (Object | null)[];
}