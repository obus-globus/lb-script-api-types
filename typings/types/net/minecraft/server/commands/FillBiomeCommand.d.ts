import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { CommandSyntaxException } from '../../../../com/mojang/brigadier/exceptions/CommandSyntaxException.d.ts'
import type { SimpleCommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/SimpleCommandExceptionType.d.ts'
import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Biome } from '../../../../net/minecraft/world/level/biome/Biome.d.ts'
export class FillBiomeCommand extends Object {
    static ERROR_NOT_LOADED: SimpleCommandExceptionType;
    static fill(paramlevel: ServerLevel, paramrawFrom: BlockPos, paramrawTo: BlockPos, parambiome: Holder<Biome>): Either<number, CommandSyntaxException>;
    static fill(paramlevel: ServerLevel, paramrawFrom: BlockPos, paramrawTo: BlockPos, parambiome: Holder<Biome>, paramfilter: (param0: Holder<Biome>) => boolean, paramsuccessMessageConsumer: (param0: () => Component) => void): Either<number, CommandSyntaxException>;
    static register(paramdispatcher: CommandDispatcher<CommandSourceStack>, paramcontext: CommandBuildContext): void;
    constructor()
}