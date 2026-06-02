import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ValueInput } from '../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export interface InventoryCarrier extends Object{
    getInventory(): (Object | null)[];
    readInventoryFromTag(input: ValueInput): void;
    writeInventoryToTag(output: ValueOutput): void;
}