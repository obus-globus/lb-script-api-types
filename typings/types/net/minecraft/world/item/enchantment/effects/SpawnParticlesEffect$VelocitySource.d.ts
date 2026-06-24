import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { FloatProvider } from '../../../../../../net/minecraft/util/valueproviders/FloatProvider.d.ts'
export class SpawnParticlesEffect$VelocitySource extends Record {
    static CODEC: MapCodec<SpawnParticlesEffect$VelocitySource>;
    constructor(movementScale: number, base: FloatProvider)
    // private base: FloatProvider;
    // private movementScale: number;
    base(): FloatProvider;
    equals(o: Object | null): boolean;
    getVelocity(movement: number, random: RandomSource): number;
    hashCode(): number;
    movementScale(): number;
    toString(): string;
}