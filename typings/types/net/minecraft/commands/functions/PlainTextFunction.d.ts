import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { ExecutionCommandSource } from '../../../../net/minecraft/commands/ExecutionCommandSource.d.ts'
import type { ExecutionContext } from '../../../../net/minecraft/commands/execution/ExecutionContext.d.ts'
import type { Frame } from '../../../../net/minecraft/commands/execution/Frame.d.ts'
import type { UnboundEntryAction } from '../../../../net/minecraft/commands/execution/UnboundEntryAction.d.ts'
import type { CommandFunction } from '../../../../net/minecraft/commands/functions/CommandFunction.d.ts'
import type { InstantiatedFunction } from '../../../../net/minecraft/commands/functions/InstantiatedFunction.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class PlainTextFunction<T extends unknown> extends Record implements CommandFunction<T>, InstantiatedFunction<T> {
    static checkCommandLineLength(paramline: CharSequence): void;
    static fromLines<T extends ExecutionCommandSource<T>>(paramid: Identifier, paramdispatcher: CommandDispatcher<T>, paramcompilationContext: T, paramlines: string[]): CommandFunction<T>;
    static parseCommand<T extends ExecutionCommandSource<T>>(paramdispatcher: CommandDispatcher<T>, paramcompilationContext: T, paraminput: StringReader): (param0: T, param1: ExecutionContext<T>, param2: Frame) => void;
    constructor(id: Identifier, entries: (param0: T, param1: ExecutionContext<T>, param2: Frame) => void[])
    // private entries: (param0: T, param1: ExecutionContext<T>, param2: Frame) => void[];
    // private id: Identifier;
    entries(): (param0: T, param1: ExecutionContext<T>, param2: Frame) => void[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): Identifier;
    instantiate(arguments: CompoundTag, dispatcher: CommandDispatcher<T>): InstantiatedFunction<T>;
    toString(): string;
}