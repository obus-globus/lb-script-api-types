import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ItemTagStorage extends Object implements StorableObject {
    constructor()
    // private itemTags: JavaMap<string, number[]>;
    itemTag(arg0: string): number[];
    onRemove(): void;
    readItemTags(arg0: PacketWrapper): void;
}