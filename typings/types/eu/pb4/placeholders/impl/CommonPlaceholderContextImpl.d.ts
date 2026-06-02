import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { ParserContext } from '../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { ParserContext$Key } from '../../../../eu/pb4/placeholders/api/ParserContext$Key.d.ts'
import type { PlaceholderContext } from '../../../../eu/pb4/placeholders/api/PlaceholderContext.d.ts'
import type { PlaceholderContext$ViewObject } from '../../../../eu/pb4/placeholders/api/PlaceholderContext$ViewObject.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { NameAndId } from '../../../../net/minecraft/server/players/NameAndId.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class CommonPlaceholderContextImpl extends Record implements PlaceholderContext {
    static COMMON_KEY: ParserContext$Key<PlaceholderContext>;
    constructor(level: Level, player: Player, entity: Entity, gameProfile: GameProfile, view: PlaceholderContext$ViewObject)
    // private entity: Entity;
    // private gameProfile: GameProfile;
    // private level: Level;
    // private player: Player;
    // private view: PlaceholderContext$ViewObject;
    addToContext(arg0: ParserContext): void;
    asParserContext(): ParserContext;
    blockPosition(): BlockPos;
    entity(): Entity;
    equals(arg0: Object | null): boolean;
    gameProfile(): GameProfile;
    hasBlockPosition(): boolean;
    hasEntity(): boolean;
    hasGameProfile(): boolean;
    hasHolderLookup(): boolean;
    hasLevel(): boolean;
    hasNameAndId(): boolean;
    hasPlayer(): boolean;
    hasPosition(): boolean;
    hashCode(): number;
    holderLookup(): HolderLookup$Provider;
    level(): Level;
    nameAndId(): NameAndId;
    player(): Player;
    position(): Vec3;
    toString(): string;
    view(): PlaceholderContext$ViewObject;
    withView(arg0: PlaceholderContext$ViewObject): CommonPlaceholderContextImpl;
}