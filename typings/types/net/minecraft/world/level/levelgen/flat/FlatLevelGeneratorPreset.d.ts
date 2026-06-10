import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { FlatLevelGeneratorSettings } from '../../../../../../net/minecraft/world/level/levelgen/flat/FlatLevelGeneratorSettings.d.ts'
export class FlatLevelGeneratorPreset extends Record {
    static CODEC: Codec<Holder<FlatLevelGeneratorPreset>>;
    static DIRECT_CODEC: Codec<FlatLevelGeneratorPreset>;
    constructor(displayItem: Holder<Item>, settings: FlatLevelGeneratorSettings)
    // private displayItem: Holder<Item>;
    // private settings: FlatLevelGeneratorSettings;
    displayItem(): Holder<Item>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    settings(): FlatLevelGeneratorSettings;
    toString(): string;
}