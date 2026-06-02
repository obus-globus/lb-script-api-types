import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ResourcePackTracker extends Object implements StorableObject {
    constructor()
    readonly lastHash: string;
    getLastHash(): string;
    onRemove(): void;
    setLastHash(arg0: string): void;
}