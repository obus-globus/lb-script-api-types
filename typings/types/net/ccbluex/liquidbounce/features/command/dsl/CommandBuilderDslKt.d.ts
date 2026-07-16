import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
import type { Command$Handler$Context } from '../../../../../../net/ccbluex/liquidbounce/features/command/Command$Handler$Context.d.ts'
import type { Parameter } from '../../../../../../net/ccbluex/liquidbounce/features/command/Parameter.d.ts'
import type { CommandBuilder } from '../../../../../../net/ccbluex/liquidbounce/features/command/builder/CommandBuilder.d.ts'
export class CommandBuilderDslKt extends Object {
    static buildCommand(name: string, block: (param0: CommandBuilder) => void): Command;
    static cast<T extends unknown>(context: Command$Handler$Context, self: Parameter<T>): T;
    static castNotRequired<T extends unknown>(context: Command$Handler$Context, self: Parameter<T>): T | null;
    static castVararg<T extends unknown>(context: Command$Handler$Context, self: Parameter<T>): T[];
    static castVarargNotRequired<T extends unknown>(context: Command$Handler$Context, self: Parameter<T>): T[] | null;
    static commandFactory(name: string, block: (param0: CommandBuilder) => void): Command$Factory;
}