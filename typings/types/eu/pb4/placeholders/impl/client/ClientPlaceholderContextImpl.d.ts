import type { GameProfile } from '../../../../../com/mojang/authlib/GameProfile.d.ts'
import type { ParserContext } from '../../../../../eu/pb4/placeholders/api/ParserContext.d.ts'
import type { ParserContext$Key } from '../../../../../eu/pb4/placeholders/api/ParserContext$Key.d.ts'
import type { PlaceholderContext } from '../../../../../eu/pb4/placeholders/api/PlaceholderContext.d.ts'
import type { PlaceholderContext$ViewObject } from '../../../../../eu/pb4/placeholders/api/PlaceholderContext$ViewObject.d.ts'
import type { ClientPlaceholderContext } from '../../../../../eu/pb4/placeholders/api/client/ClientPlaceholderContext.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { NameAndId } from '../../../../../net/minecraft/server/players/NameAndId.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ClientPlaceholderContextImpl extends Record implements ClientPlaceholderContext {
    static CLIENT_KEY: ParserContext$Key<ClientPlaceholderContext>;
    static COMMON_KEY: ParserContext$Key<PlaceholderContext>;
    static get(): ClientPlaceholderContext;
    constructor(minecraft: Minecraft, view: PlaceholderContext$ViewObject)
    // private minecraft: Minecraft;
    // private view: PlaceholderContext$ViewObject;
    addToContext(arg0: ParserContext): void;
    asParserContext(): ParserContext;
    blockPosition(): BlockPos;
    entity(): Entity;
    equals(arg0: Object | null): boolean;
    gameProfile(): GameProfile;
    hashCode(): number;
    holderLookup(): HolderLookup$Provider;
    level(): ClientLevel;
    minecraft(): Minecraft;
    nameAndId(): NameAndId;
    player(): LocalPlayer;
    position(): Vec3;
    toString(): string;
    view(): PlaceholderContext$ViewObject;
    withView(arg0: PlaceholderContext$ViewObject): ClientPlaceholderContext;
}