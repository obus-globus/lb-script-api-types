import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WorldNameTracker extends Object implements StorableObject {
    constructor()
    readonly worldName: string;
    getWorldName(): string;
    onRemove(): void;
    setWorldName(arg0: string): void;
}