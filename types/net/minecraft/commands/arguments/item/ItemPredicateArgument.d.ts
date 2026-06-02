import type { CommandContext } from '../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { CommandBuildContext } from '../../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { CommandSourceStack } from '../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { ItemPredicateArgument$Result } from '../../../../../net/minecraft/commands/arguments/item/ItemPredicateArgument$Result.d.ts'
import type { ParserBasedArgument } from '../../../../../net/minecraft/util/parsing/packrat/commands/ParserBasedArgument.d.ts'
export class ItemPredicateArgument extends ParserBasedArgument<ItemPredicateArgument$Result> {
    static getItemPredicate(paramcontext: CommandContext<CommandSourceStack>, paramname: string): ItemPredicateArgument$Result;
    static itemPredicate(paramcontext: CommandBuildContext): ItemPredicateArgument;
    constructor(registries: CommandBuildContext)
    getExamples(): E[];
}