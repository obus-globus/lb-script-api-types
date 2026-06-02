import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Vec2 } from '../../../../net/minecraft/world/phys/Vec2.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ServerPlayer$SavedPosition extends Record {
    static EMPTY: ServerPlayer$SavedPosition;
    static MAP_CODEC: MapCodec<ServerPlayer$SavedPosition>;
    constructor(dimension: Optional<ResourceKey<Level>>, position: Optional<Vec3>, rotation: Optional<Vec2>)
    // private dimension: Optional<ResourceKey<Level>>;
    // private position: Optional<Vec3>;
    // private rotation: Optional<Vec2>;
    dimension(): Optional<ResourceKey<Level>>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    position(): Optional<Vec3>;
    rotation(): Optional<Vec2>;
    toString(): string;
}