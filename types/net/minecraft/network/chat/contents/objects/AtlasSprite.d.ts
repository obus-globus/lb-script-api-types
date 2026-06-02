import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FontDescription } from '../../../../../../net/minecraft/network/chat/FontDescription.d.ts'
import type { ObjectInfo } from '../../../../../../net/minecraft/network/chat/contents/objects/ObjectInfo.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class AtlasSprite extends Record implements ObjectInfo {
    static DEFAULT_ATLAS: Identifier;
    static MAP_CODEC: MapCodec<AtlasSprite>;
    constructor(atlas: Identifier, sprite: Identifier)
    // private atlas: Identifier;
    // private sprite: Identifier;
    atlas(): Identifier;
    codec(): MapCodec<AtlasSprite>;
    defaultFallback(): string;
    equals(o: Object | null): boolean;
    fontDescription(): FontDescription;
    hashCode(): number;
    sprite(): Identifier;
    toString(): string;
}