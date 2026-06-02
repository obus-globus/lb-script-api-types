import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BundleStateTracker extends Object implements StorableObject {
    constructor()
    readonly bundling: boolean;
    isBundling(): boolean;
    onRemove(): void;
    toggleBundling(): void;
}