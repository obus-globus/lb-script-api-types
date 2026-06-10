import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Frog } from '../../../../../../net/minecraft/world/entity/animal/frog/Frog.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class FrogAi extends Object {
    static getTemptations(): (param0: ItemStack) => boolean;
    static updateActivity(parambody: Frog): void;
    constructor()
}