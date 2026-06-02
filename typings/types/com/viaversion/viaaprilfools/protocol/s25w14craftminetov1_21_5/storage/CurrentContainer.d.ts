import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CurrentContainer extends Object implements StorableObject {
    static BLAST_FURNACE: number;
    static DIMENSION_CONTROL: number;
    static FURNACE: number;
    static MAP_MAKING: number;
    constructor()
    // private containerId: number;
    // private containerTypeId: number;
    close(): void;
    isOpen(arg0: number, arg1: number): boolean;
    onRemove(): void;
    openContainer(arg0: number, arg1: number): void;
}