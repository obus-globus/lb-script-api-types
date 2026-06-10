import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IntProvider } from '../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
export class IntProviders extends Object {
    static CODEC: Codec<IntProvider>;
    static NON_NEGATIVE_CODEC: Codec<IntProvider>;
    static POSITIVE_CODEC: Codec<IntProvider>;
    static bootstrap(paramregistry: MapCodec<IntProvider>[]): MapCodec<IntProvider>;
    static codec(paramminValue: number, parammaxValue: number): Codec<IntProvider>;
    static validateCodec(paramminValue: number, parammaxValue: number, paramcodec: Codec<IntProvider>): Codec<IntProvider>;
    constructor()
}