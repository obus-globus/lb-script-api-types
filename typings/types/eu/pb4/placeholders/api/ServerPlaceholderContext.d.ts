import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { ParserContext } from '../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { PlaceholderContext } from '../../../../eu/pb4/placeholders/api/PlaceholderContext.d.ts'
import type { PlaceholderContext$ViewObject } from '../../../../eu/pb4/placeholders/api/PlaceholderContext$ViewObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { MinecraftServer } from '../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { NameAndId } from '../../../../net/minecraft/server/players/NameAndId.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface ServerPlaceholderContext extends PlaceholderContext, Object{
    addToContext(arg0: ParserContext): void;
    asParserContext(): ParserContext;
    blockPosition(): BlockPos;
    commandSourceStack(): CommandSourceStack;
    entity(): Entity;
    gameProfile(): GameProfile;
    hasBlockPosition(): boolean;
    hasEntity(): boolean;
    hasGameProfile(): boolean;
    hasHolderLookup(): boolean;
    hasLevel(): boolean;
    hasNameAndId(): boolean;
    hasPlayer(): boolean;
    hasPosition(): boolean;
    hasServerPlayer(): boolean;
    holderLookup(): HolderLookup$Provider;
    level(): Level;
    nameAndId(): NameAndId;
    player(): Player;
    position(): Vec3;
    server(): MinecraftServer;
    serverLevel(): ServerLevel;
    serverPlayer(): ServerPlayer;
    view(): PlaceholderContext$ViewObject;
    withView(arg0: PlaceholderContext$ViewObject): ServerPlaceholderContext;
}