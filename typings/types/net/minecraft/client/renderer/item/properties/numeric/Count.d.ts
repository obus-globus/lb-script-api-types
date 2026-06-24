import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { RangeSelectItemModelProperty } from '../../../../../../../net/minecraft/client/renderer/item/properties/numeric/RangeSelectItemModelProperty.d.ts'
import type { ItemOwner } from '../../../../../../../net/minecraft/world/entity/ItemOwner.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class Count extends Record implements RangeSelectItemModelProperty {
    static MAP_CODEC: MapCodec<Count>;
    constructor(normalize: boolean)
    // private normalize: boolean;
    equals(o: Object | null): boolean;
    get(itemStack: ItemStack, level: ClientLevel, owner: ItemOwner, seed: number): number;
    hashCode(): number;
    normalize(): boolean;
    toString(): string;
    type(): MapCodec<Count>;
}