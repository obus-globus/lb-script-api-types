import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { SpawnParticlesEffect$PositionSourceType } from '../../../../../../net/minecraft/world/item/enchantment/effects/SpawnParticlesEffect$PositionSourceType.d.ts'
export class SpawnParticlesEffect$PositionSource extends Record {
    static CODEC: MapCodec<SpawnParticlesEffect$PositionSource>;
    // private offset: number;
    // private scale: number;
    // private type: SpawnParticlesEffect$PositionSourceType;
    equals(o: Object | null): boolean;
    getCoordinate(position: number, center: number, boundingBoxSpan: number, random: RandomSource): number;
    hashCode(): number;
    offset(): number;
    scale(): number;
    toString(): string;
    type(): SpawnParticlesEffect$PositionSourceType;
}