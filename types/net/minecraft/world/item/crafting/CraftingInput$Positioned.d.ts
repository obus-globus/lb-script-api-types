import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CraftingInput } from '../../../../../net/minecraft/world/item/crafting/CraftingInput.d.ts'
export class CraftingInput$Positioned extends Record {
    static EMPTY: CraftingInput$Positioned;
    // private input: CraftingInput;
    // private left: number;
    // private top: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    input(): CraftingInput;
    left(): number;
    toString(): string;
    top(): number;
}