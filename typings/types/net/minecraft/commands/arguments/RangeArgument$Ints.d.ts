import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MinMaxBounds$Ints } from '../../../../net/minecraft/advancements/criterion/MinMaxBounds$Ints.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { RangeArgument } from '../../../../net/minecraft/commands/arguments/RangeArgument.d.ts'
import type { RangeArgument$Floats } from '../../../../net/minecraft/commands/arguments/RangeArgument$Floats.d.ts'
export class RangeArgument$Ints extends Object implements RangeArgument<MinMaxBounds$Ints> {
    static floatRange(): RangeArgument$Floats;
    static getRange(paramcontext: CommandContext<CommandSourceStack>, paramname: string): MinMaxBounds$Ints;
    static intRange(): RangeArgument$Ints;
    constructor()
    getExamples(): E[];
    parse(reader: StringReader): MinMaxBounds$Ints;
}