import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ServerLinks extends Object implements StorableObject {
    constructor()
    // private links: Map<Tag, string>;
    links(): Map<Tag, string>;
    onRemove(): void;
    storeLink(arg0: Tag, arg1: string): void;
    storeLink(arg0: number, arg1: string): void;
}