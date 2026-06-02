import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ConditionalBlockModelProperty } from '../../../../../../../../net/minecraft/client/renderer/block/model/properties/conditional/ConditionalBlockModelProperty.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class IsXmas extends Object implements ConditionalBlockModelProperty {
    constructor()
    get(blockState: BlockState): boolean;
}