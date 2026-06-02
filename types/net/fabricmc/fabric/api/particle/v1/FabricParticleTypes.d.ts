import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ParticleType } from '../../../../../../net/minecraft/core/particles/ParticleType.d.ts'
import type { SimpleParticleType } from '../../../../../../net/minecraft/core/particles/SimpleParticleType.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class FabricParticleTypes extends Object {
    static complex(paramarg0: boolean, paramarg1: MapCodec<Object>, paramarg2: StreamCodec<Object, Object>): ParticleType<Object>;
    static complex(paramarg0: boolean, paramarg1: (param0: Object | null) => Object | null, paramarg2: (param0: Object | null) => Object | null): ParticleType<Object>;
    static complex(paramarg0: MapCodec<Object>, paramarg1: StreamCodec<Object, Object>): ParticleType<Object>;
    static complex(paramarg0: (param0: Object | null) => Object | null, paramarg1: (param0: Object | null) => Object | null): ParticleType<Object>;
    static simple(): SimpleParticleType;
    static simple(paramarg0: boolean): SimpleParticleType;
    private constructor()
}