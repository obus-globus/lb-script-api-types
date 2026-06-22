import type { GameProfile } from '../../../../../com/mojang/authlib/GameProfile.d.ts'
import type { ParserContext } from '../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { PlaceholderContext } from '../../../../../eu/pb4/placeholders/api/PlaceholderContext.d.ts'
import type { PlaceholderContext$ViewObject } from '../../../../../eu/pb4/placeholders/api/PlaceholderContext$ViewObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { NameAndId } from '../../../../../net/minecraft/server/players/NameAndId.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface ClientPlaceholderContext extends PlaceholderContext, Object{
    addToContext(arg0: ParserContext): void;
    asParserContext(): ParserContext;
    blockPosition(): BlockPos;
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
    holderLookup(): HolderLookup$Provider;
    level(): ClientLevel;
    nameAndId(): NameAndId;
    player(): LocalPlayer;
    position(): Vec3;
    view(): PlaceholderContext$ViewObject;
    withView(arg0: PlaceholderContext$ViewObject): ClientPlaceholderContext;
}