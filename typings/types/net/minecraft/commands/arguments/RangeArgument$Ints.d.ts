import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MinMaxBounds$Ints } from '../../../../net/minecraft/advancements/predicates/MinMaxBounds$Ints.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { RangeArgument } from '../../../../net/minecraft/commands/arguments/RangeArgument.d.ts'
export class RangeArgument$Ints extends Object implements RangeArgument<MinMaxBounds$Ints> {
    static getRange(paramcontext: CommandContext<CommandSourceStack>, paramname: string): MinMaxBounds$Ints;
    constructor()
    getExamples(): string[];
    parse(reader: StringReader): MinMaxBounds$Ints;
    parse<S extends unknown>(arg0: StringReader, arg1: S): MinMaxBounds$Ints;
}