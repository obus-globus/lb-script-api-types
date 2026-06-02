import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { ClientLevel } from '../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { NeedleDirectionHelper } from '../../../../../../../net/minecraft/client/renderer/item/properties/numeric/NeedleDirectionHelper.d.ts'
import type { NeedleDirectionHelper$Wobbler } from '../../../../../../../net/minecraft/client/renderer/item/properties/numeric/NeedleDirectionHelper$Wobbler.d.ts'
import type { RangeSelectItemModelProperty } from '../../../../../../../net/minecraft/client/renderer/item/properties/numeric/RangeSelectItemModelProperty.d.ts'
import type { Time$TimeSource } from '../../../../../../../net/minecraft/client/renderer/item/properties/numeric/Time$TimeSource.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { ItemOwner } from '../../../../../../../net/minecraft/world/entity/ItemOwner.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class Time extends NeedleDirectionHelper implements RangeSelectItemModelProperty {
    static MAP_CODEC: MapCodec<Time>;
    static nonWobbler(): NeedleDirectionHelper$Wobbler;
    static standardWobbler(paramfactor: number): NeedleDirectionHelper$Wobbler;
    constructor(wooble: boolean, source: Time$TimeSource)
    // private randomSource: RandomSource;
    // private source: Time$TimeSource;
    // private wobbler: NeedleDirectionHelper$Wobbler;
    calculate(itemStack: ItemStack, level: ClientLevel, seed: number, owner: ItemOwner): number;
    type(): MapCodec<Time>;
}