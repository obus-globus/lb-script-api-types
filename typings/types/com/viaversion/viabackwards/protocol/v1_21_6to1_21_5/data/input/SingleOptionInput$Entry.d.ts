import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../../java/util/Map$Entry.d.ts'
export class SingleOptionInput$Entry extends Object {
    constructor(arg0: Map$Entry<string, Tag>[])
    // private display: Tag;
    // private id: string;
    // private initial: boolean;
    computeDisplay(): Tag;
    display(): Tag;
    id(): string;
    initial(): boolean;
}