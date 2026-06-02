import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { ParserContext } from '../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { ParserContext$Key } from '../../../../eu/pb4/placeholders/api/ParserContext$Key.d.ts'
import type { PlaceholderContext } from '../../../../eu/pb4/placeholders/api/PlaceholderContext.d.ts'
import type { PlaceholderContext$ViewObject } from '../../../../eu/pb4/placeholders/api/PlaceholderContext$ViewObject.d.ts'
import type { ServerPlaceholderContext } from '../../../../eu/pb4/placeholders/api/ServerPlaceholderContext.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { MinecraftServer } from '../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { NameAndId } from '../../../../net/minecraft/server/players/NameAndId.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ServerPlaceholderContextImpl extends Record implements ServerPlaceholderContext {
    static COMMON_KEY: ParserContext$Key<PlaceholderContext>;
    static SERVER_KEY: ParserContext$Key<ServerPlaceholderContext>;
    static of(paramarg0: GameProfile, paramarg1: MinecraftServer): ServerPlaceholderContext;
    static of(paramarg0: GameProfile, paramarg1: MinecraftServer, paramarg2: PlaceholderContext$ViewObject): ServerPlaceholderContext;
    static of(paramarg0: CommandSourceStack): ServerPlaceholderContext;
    static of(paramarg0: CommandSourceStack, paramarg1: PlaceholderContext$ViewObject): ServerPlaceholderContext;
    static of(paramarg0: MinecraftServer): ServerPlaceholderContext;
    static of(paramarg0: MinecraftServer, paramarg1: PlaceholderContext$ViewObject): ServerPlaceholderContext;
    static of(paramarg0: ServerPlayer): ServerPlaceholderContext;
    static of(paramarg0: ServerPlayer, paramarg1: PlaceholderContext$ViewObject): ServerPlaceholderContext;
    static of(paramarg0: Entity): ServerPlaceholderContext;
    static of(paramarg0: Entity, paramarg1: PlaceholderContext$ViewObject): ServerPlaceholderContext;
    constructor(server: MinecraftServer, lazySource: () => CommandSourceStack, level: ServerLevel, player: ServerPlayer, entity: Entity, gameProfile: GameProfile, view: PlaceholderContext$ViewObject)
    // private entity: Entity;
    // private gameProfile: GameProfile;
    // private lazySource: () => CommandSourceStack;
    // private level: ServerLevel;
    // private player: ServerPlayer;
    // private server: MinecraftServer;
    // private view: PlaceholderContext$ViewObject;
    addToContext(arg0: ParserContext): void;
    asParserContext(): ParserContext;
    blockPosition(): BlockPos;
    commandSourceStack(): CommandSourceStack;
    entity(): Entity;
    equals(arg0: Object | null): boolean;
    gameProfile(): GameProfile;
    hasServerPlayer(): boolean;
    hashCode(): number;
    holderLookup(): HolderLookup$Provider;
    lazySource(): () => CommandSourceStack;
    level(): ServerLevel;
    nameAndId(): NameAndId;
    player(): ServerPlayer;
    position(): Vec3;
    server(): MinecraftServer;
    serverLevel(): ServerLevel;
    serverPlayer(): ServerPlayer;
    source(): CommandSourceStack;
    toString(): string;
    view(): PlaceholderContext$ViewObject;
    withView(arg0: PlaceholderContext$ViewObject): ServerPlaceholderContext;
}