import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FloatProvider } from '../../../../net/minecraft/util/valueproviders/FloatProvider.d.ts'
export class FloatProviders extends Object {
    static CODEC: Codec<FloatProvider>;
    static bootstrap(paramregistry: (Object | null)[]): MapCodec<Object>;
    static codec(paramminValue: number, parammaxValue: number): Codec<FloatProvider>;
    constructor()
}