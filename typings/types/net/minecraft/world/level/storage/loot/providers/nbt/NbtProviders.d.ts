import type { Codec } from '../../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { NbtProvider } from '../../../../../../../../net/minecraft/world/level/storage/loot/providers/nbt/NbtProvider.d.ts'
export class NbtProviders extends Object {
    static CODEC: Codec<NbtProvider>;
    static bootstrap(paramregistry: MapCodec<NbtProvider>[]): MapCodec<NbtProvider>;
    constructor()
}