import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ExecutionCommandSource } from '../../../../net/minecraft/commands/ExecutionCommandSource.d.ts'
import type { ExecutionContext } from '../../../../net/minecraft/commands/execution/ExecutionContext.d.ts'
import type { UnboundEntryAction } from '../../../../net/minecraft/commands/execution/UnboundEntryAction.d.ts'
import type { CommandFunction } from '../../../../net/minecraft/commands/functions/CommandFunction.d.ts'
import type { MacroFunction$Entry } from '../../../../net/minecraft/commands/functions/MacroFunction$Entry.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class FunctionBuilder<T extends ExecutionCommandSource<T>> extends Object {
    constructor()
    // private macroArguments: string[];
    // private macroEntries: MacroFunction$Entry<T>[];
    // private plainEntries: (param0: T, param1: Object | null, param2: ExecutionContext<Object>) => void[];
    addCommand(command: (param0: T, param1: Object | null, param2: ExecutionContext<Object>) => void): void;
    addMacro(command: string, line: number, compilationContext: T): void;
    build(id: Identifier): CommandFunction<T>;
    // private convertToIndices(ids: string[]): (Object | null)[];
    // private getArgumentIndex(id: string): number;
}