import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Head$Companion } from '../../../../../../net/ccbluex/liquidbounce/features/creativetab/tabs/Head$Companion.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class Head extends Object {
    static Companion: Head$Companion;
    constructor(name: string, uuid: UUID, value: string)
    readonly name: string;
    readonly uuid: UUID;
    readonly value: string;
    asItemStack(): ItemStack;
    component1(): string;
    component2(): UUID;
    component3(): string;
    copy(name: string, uuid: UUID, value: string): Head;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}