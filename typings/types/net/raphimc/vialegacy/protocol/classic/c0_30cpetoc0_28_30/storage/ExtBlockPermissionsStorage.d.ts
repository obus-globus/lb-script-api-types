import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ExtBlockPermissionsStorage extends Object implements StorableObject {
    constructor()
    // private breakingDenied: (Object | null)[];
    // private placingDenied: (Object | null)[];
    addBreakable(arg0: number): void;
    addPlaceable(arg0: number): void;
    isBreakingDenied(arg0: number): boolean;
    isPlacingDenied(arg0: number): boolean;
    onRemove(): void;
    removeBreakable(arg0: number): void;
    removePlaceable(arg0: number): void;
}