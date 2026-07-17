import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class KeepAliveTracker extends Object implements StorableObject {
    constructor()
    // private nextId: number;
    // private pending: JavaMap<number, number>;
    consume(arg0: number): number;
    onRemove(): void;
    track(arg0: number): number;
}