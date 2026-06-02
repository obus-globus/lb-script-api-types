import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { ExecutionCommandSource } from '../../../../net/minecraft/commands/ExecutionCommandSource.d.ts'
import type { ExecutionContext } from '../../../../net/minecraft/commands/execution/ExecutionContext.d.ts'
import type { UnboundEntryAction } from '../../../../net/minecraft/commands/execution/UnboundEntryAction.d.ts'
import type { CommandFunction } from '../../../../net/minecraft/commands/functions/CommandFunction.d.ts'
import type { InstantiatedFunction } from '../../../../net/minecraft/commands/functions/InstantiatedFunction.d.ts'
import type { MacroFunction$Entry } from '../../../../net/minecraft/commands/functions/MacroFunction$Entry.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class MacroFunction<T extends ExecutionCommandSource<T>> extends Object implements CommandFunction<T> {
    static checkCommandLineLength(paramline: CharSequence): void;
    static fromLines(paramid: Identifier, paramdispatcher: CommandDispatcher<Object>, paramcompilationContext: Object | null, paramlines: string[]): CommandFunction<Object>;
    static parseCommand(paramdispatcher: CommandDispatcher<Object>, paramcompilationContext: Object | null, paraminput: StringReader): (param0: Object | null, param1: Object | null, param2: ExecutionContext<Object>) => void;
    constructor(id: Identifier, entries: MacroFunction$Entry<T>[], parameters: string[])
    // private cache: Map<string[], InstantiatedFunction<T>>;
    // private entries: MacroFunction$Entry<T>[];
    // private id: Identifier;
    // private parameters: string[];
    id(): Identifier;
    instantiate(arguments: CompoundTag, dispatcher: CommandDispatcher<T>): InstantiatedFunction<T>;
    // private substituteAndParse(keys: string[], values: string[], dispatcher: CommandDispatcher<T>): InstantiatedFunction<T>;
}