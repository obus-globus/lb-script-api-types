import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CauldronInteraction$Dispatcher } from '../../../../net/minecraft/core/cauldron/CauldronInteraction$Dispatcher.d.ts'
export class CauldronInteractions extends Object {
    static CODEC: Codec<CauldronInteraction$Dispatcher>;
    static EMPTY: CauldronInteraction$Dispatcher;
    static LAVA: CauldronInteraction$Dispatcher;
    static POWDER_SNOW: CauldronInteraction$Dispatcher;
    static WATER: CauldronInteraction$Dispatcher;
    static bootStrap(): void;
    constructor()
}