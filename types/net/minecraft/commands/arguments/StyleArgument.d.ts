import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { DynamicCommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/DynamicCommandExceptionType.d.ts'
import type { CommandBuildContext } from '../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { Style } from '../../../../net/minecraft/network/chat/Style.d.ts'
import type { ParserBasedArgument } from '../../../../net/minecraft/util/parsing/packrat/commands/ParserBasedArgument.d.ts'
export class StyleArgument extends ParserBasedArgument<Style> {
    static ERROR_INVALID_STYLE: DynamicCommandExceptionType;
    static getStyle(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Style;
    static style(paramcontext: CommandBuildContext): StyleArgument;
    private constructor(registries: HolderLookup$Provider)
    getExamples(): E[];
}