import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { MlgPlacementActionType } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/MlgPlacementActionType.d.ts'
import type { PlacementPlan } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/PlacementPlan.d.ts'
import type { Item } from '../../../../../../../../../net/minecraft/world/item/Item.d.ts'
export class NoFallMLG$PlacementAction extends Object {
    constructor(plan: PlacementPlan, type: MlgPlacementActionType, item: Item, requiresSneak: boolean, collisionTick: number | null)
    readonly collisionTick: number | null;
    readonly item: Item;
    readonly plan: PlacementPlan;
    readonly requiresSneak: boolean;
    readonly type: MlgPlacementActionType;
    component1(): PlacementPlan;
    component2(): MlgPlacementActionType;
    component3(): Item;
    component4(): boolean;
    component5(): number | null;
    copy(plan: PlacementPlan, type: MlgPlacementActionType, item: Item, requiresSneak: boolean, collisionTick: number | null): NoFallMLG$PlacementAction;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}