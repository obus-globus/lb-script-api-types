import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { DynamicCommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/DynamicCommandExceptionType.d.ts'
import type { CommandBuildContext } from '../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { ParserBasedArgument } from '../../../../net/minecraft/util/parsing/packrat/commands/ParserBasedArgument.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
export class ComponentArgument extends ParserBasedArgument<Component> {
    static ERROR_INVALID_COMPONENT: DynamicCommandExceptionType;
    static getRawComponent(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Component;
    static getResolvedComponent(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Component;
    static getResolvedComponent(paramcontext: CommandContext<CommandSourceStack>, paramname: string, paramcontentEntity: Entity): Component;
    static textComponent(paramcontext: CommandBuildContext): ComponentArgument;
    private constructor(registries: HolderLookup$Provider)
    getExamples(): string[];
}