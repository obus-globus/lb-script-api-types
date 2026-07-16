import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ParticleOptions } from '../../../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { ParticleType } from '../../../../../../net/minecraft/core/particles/ParticleType.d.ts'
import type { SimpleParticleType } from '../../../../../../net/minecraft/core/particles/SimpleParticleType.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class FabricParticleTypes extends Object {
    static complex<T extends ParticleOptions>(paramarg0: boolean, paramarg1: MapCodec<T>, paramarg2: StreamCodec<Object, T>): ParticleType<T>;
    static complex<T extends ParticleOptions>(paramarg0: boolean, paramarg1: (param0: ParticleType<T>) => MapCodec<T>, paramarg2: (param0: ParticleType<T>) => StreamCodec<Object, T>): ParticleType<T>;
    static complex<T extends ParticleOptions>(paramarg0: MapCodec<T>, paramarg1: StreamCodec<Object, T>): ParticleType<T>;
    static complex<T extends ParticleOptions>(paramarg0: (param0: ParticleType<T>) => MapCodec<T>, paramarg1: (param0: ParticleType<T>) => StreamCodec<Object, T>): ParticleType<T>;
    static simple(): SimpleParticleType;
    static simple(paramarg0: boolean): SimpleParticleType;
    private constructor()
}