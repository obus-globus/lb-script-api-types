import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { InteractionResult } from '../../../../../../net/minecraft/world/InteractionResult.d.ts'
import type { UseOnContext } from '../../../../../../net/minecraft/world/item/context/UseOnContext.d.ts'
export interface ItemEvents$UseOnCallback extends Object{
    useOn(arg0: UseOnContext): InteractionResult;
}