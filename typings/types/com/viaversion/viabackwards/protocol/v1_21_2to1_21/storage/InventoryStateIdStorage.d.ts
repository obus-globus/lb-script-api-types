import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InventoryStateIdStorage extends Object {
    constructor()
    nextClearedSlot(): number;
    setNextClearedSlot(arg0: number): void;
    setSmithingTableOpen(arg0: boolean): void;
    setStateId(arg0: number): void;
    smithingTableOpen(): boolean;
    stateId(): number;
}