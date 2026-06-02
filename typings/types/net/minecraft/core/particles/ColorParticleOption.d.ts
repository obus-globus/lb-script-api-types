import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { ParticleType } from '../../../../net/minecraft/core/particles/ParticleType.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class ColorParticleOption extends Object implements ParticleOptions {
    static codec(paramtype: ParticleType<ColorParticleOption>): MapCodec<ColorParticleOption>;
    static create(paramtype: ParticleType<ColorParticleOption>, paramred: number, paramgreen: number, paramblue: number): ColorParticleOption;
    static create(paramtype: ParticleType<ColorParticleOption>, paramcolor: number): ColorParticleOption;
    static streamCodec(paramtype: ParticleType<ColorParticleOption>): StreamCodec<Object, ColorParticleOption>;
    private constructor(type: ParticleType<ColorParticleOption>, color: number)
    // private color: number;
    readonly type: ParticleType<ColorParticleOption>;
    getAlpha(): number;
    getBlue(): number;
    getGreen(): number;
    getRed(): number;
    getType(): ParticleType<ColorParticleOption>;
}