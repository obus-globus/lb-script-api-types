import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FontDescription } from '../../../../../../net/minecraft/network/chat/FontDescription.d.ts'
import type { ObjectInfo } from '../../../../../../net/minecraft/network/chat/contents/objects/ObjectInfo.d.ts'
import type { ResolvableProfile } from '../../../../../../net/minecraft/world/item/component/ResolvableProfile.d.ts'
export class PlayerSprite extends Record implements ObjectInfo {
    static MAP_CODEC: MapCodec<PlayerSprite>;
    constructor(player: ResolvableProfile, hat: boolean)
    // private hat: boolean;
    // private player: ResolvableProfile;
    codec(): MapCodec<PlayerSprite>;
    defaultFallback(): string;
    equals(o: Object | null): boolean;
    fontDescription(): FontDescription;
    hashCode(): number;
    hat(): boolean;
    player(): ResolvableProfile;
    toString(): string;
}