import type { ParserContext } from '../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { PlaceholderContext } from '../../../../eu/pb4/placeholders/api/PlaceholderContext.d.ts'
import type { PlaceholderContext$ViewObject } from '../../../../eu/pb4/placeholders/api/PlaceholderContext$ViewObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { MinecraftServer } from '../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
export interface ServerPlaceholderContext extends PlaceholderContext, Object{
    addToContext(arg0: ParserContext): void;
    asParserContext(): ParserContext;
    commandSourceStack(): CommandSourceStack;
    hasBlockPosition(): boolean;
    hasEntity(): boolean;
    hasGameProfile(): boolean;
    hasHolderLookup(): boolean;
    hasLevel(): boolean;
    hasNameAndId(): boolean;
    hasPlayer(): boolean;
    hasPosition(): boolean;
    hasServerPlayer(): boolean;
    server(): MinecraftServer;
    serverLevel(): ServerLevel;
    serverPlayer(): ServerPlayer;
    withView(arg0: PlaceholderContext$ViewObject): ServerPlaceholderContext;
}