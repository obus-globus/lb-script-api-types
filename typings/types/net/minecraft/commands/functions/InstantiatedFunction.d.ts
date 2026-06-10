import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ExecutionContext } from '../../../../net/minecraft/commands/execution/ExecutionContext.d.ts'
import type { Frame } from '../../../../net/minecraft/commands/execution/Frame.d.ts'
import type { UnboundEntryAction } from '../../../../net/minecraft/commands/execution/UnboundEntryAction.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export interface InstantiatedFunction<T extends Object | number | string | boolean> extends Object {
    entries(): (param0: T, param1: ExecutionContext<T>, param2: Frame) => void[];
    id(): Identifier;
}