import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MinecartComparatorLogic } from '../../../../../../../../net/fabricmc/fabric/api/object/builder/v1/entity/MinecartComparatorLogic.d.ts'
import type { EntityType } from '../../../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { AbstractMinecart } from '../../../../../../../../net/minecraft/world/entity/vehicle/minecart/AbstractMinecart.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class MinecartComparatorLogicRegistry extends Object {
    static getCustomComparatorLogic(paramarg0: EntityType<Object>): (param0: AbstractMinecart, param1: Object | null, param2: BlockState) => kotlin.Int;
    static register(paramarg0: EntityType<Object>, paramarg1: (param0: Object | null, param1: Object | null, param2: BlockState) => kotlin.Int): void;
    private constructor()
}