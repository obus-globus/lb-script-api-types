import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Vector2i } from '../../../../../../org/joml/Vector2i.d.ts'
export class AbstractContainerScreen$SnapbackData extends Record {
    // private end: Vector2i;
    // private item: ItemStack;
    // private start: Vector2i;
    // private time: number;
    end(): Vector2i;
    equals(o: Object | null): boolean;
    hashCode(): number;
    item(): ItemStack;
    start(): Vector2i;
    time(): number;
    toString(): string;
}