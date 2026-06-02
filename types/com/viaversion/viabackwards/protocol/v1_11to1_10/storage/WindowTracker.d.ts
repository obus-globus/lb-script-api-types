import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WindowTracker extends Object implements StorableObject {
    constructor()
    readonly entityId: number;
    readonly inventory: string;
    getEntityId(): number;
    getInventory(): string;
    onRemove(): void;
    setEntityId(arg0: number): void;
    setInventory(arg0: string): void;
    toString(): string;
}