import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
export class AmbientParticle extends Record {
    static CODEC: Codec<AmbientParticle>;
    static of(paramparticle: ParticleOptions, paramprobability: number): AmbientParticle[];
    // private particle: ParticleOptions;
    // private probability: number;
    canSpawn(random: RandomSource): boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    particle(): ParticleOptions;
    probability(): number;
    toString(): string;
}