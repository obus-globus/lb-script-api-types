import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { ParticleType } from '../../../../net/minecraft/core/particles/ParticleType.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class SpellParticleOption extends Object implements ParticleOptions {
    static codec(paramtype: ParticleType<SpellParticleOption>): MapCodec<SpellParticleOption>;
    static create(paramtype: ParticleType<SpellParticleOption>, paramred: number, paramgreen: number, paramblue: number, parampower: number): SpellParticleOption;
    static create(paramtype: ParticleType<SpellParticleOption>, paramcolor: number, parampower: number): SpellParticleOption;
    static streamCodec(paramtype: ParticleType<SpellParticleOption>): StreamCodec<Object, SpellParticleOption>;
    private constructor(type: ParticleType<SpellParticleOption>, color: number, power: number)
    // private color: number;
    readonly power: number;
    readonly type: ParticleType<SpellParticleOption>;
    getBlue(): number;
    getGreen(): number;
    getPower(): number;
    getRed(): number;
    getType(): ParticleType<SpellParticleOption>;
}