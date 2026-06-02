import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MinMaxBounds$Doubles } from '../../../../net/minecraft/advancements/criterion/MinMaxBounds$Doubles.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { RangeArgument } from '../../../../net/minecraft/commands/arguments/RangeArgument.d.ts'
import type { RangeArgument$Ints } from '../../../../net/minecraft/commands/arguments/RangeArgument$Ints.d.ts'
export class RangeArgument$Floats extends Object implements RangeArgument<MinMaxBounds$Doubles> {
    static floatRange(): RangeArgument$Floats;
    static getRange(paramcontext: CommandContext<CommandSourceStack>, paramname: string): MinMaxBounds$Doubles;
    static intRange(): RangeArgument$Ints;
    constructor()
    getExamples(): E[];
    parse(reader: StringReader): MinMaxBounds$Doubles;
}