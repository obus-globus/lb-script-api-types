import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Nautilus } from '../../../../../../net/minecraft/world/entity/animal/nautilus/Nautilus.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class NautilusAi extends Object {
    static getActivities(): (Object | null)[];
    static getTemptations(): (param0: ItemStack) => kotlin.Boolean;
    static updateActivity(parambody: Nautilus): void;
    constructor()
}