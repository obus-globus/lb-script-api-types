import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { ParticleType } from '../../../../net/minecraft/core/particles/ParticleType.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class PowerParticleOption extends Object implements ParticleOptions {
    static codec(paramtype: ParticleType<PowerParticleOption>): MapCodec<PowerParticleOption>;
    static create(paramtype: ParticleType<PowerParticleOption>, parampower: number): PowerParticleOption;
    static streamCodec(paramtype: ParticleType<PowerParticleOption>): StreamCodec<Object, PowerParticleOption>;
    private constructor(type: ParticleType<PowerParticleOption>, power: number)
    readonly power: number;
    readonly type: ParticleType<PowerParticleOption>;
    getPower(): number;
    getType(): ParticleType<PowerParticleOption>;
}