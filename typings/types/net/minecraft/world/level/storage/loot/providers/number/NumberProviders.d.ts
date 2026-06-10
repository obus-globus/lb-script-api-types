import type { Codec } from '../../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { NumberProvider } from '../../../../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export class NumberProviders extends Object {
    static CODEC: Codec<NumberProvider>;
    static bootstrap(paramregistry: MapCodec<NumberProvider>[]): MapCodec<NumberProvider>;
    constructor()
}