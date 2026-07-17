import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Ingredient } from '../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
export class ShapedRecipePattern$Data extends Record {
    static MAP_CODEC: MapCodec<ShapedRecipePattern$Data>;
    constructor(key: JavaMap<string, Ingredient>, pattern: string[])
    // private key: JavaMap<string, Ingredient>;
    // private pattern: string[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    key(): JavaMap<string, Ingredient>;
    pattern(): string[];
    toString(): string;
}