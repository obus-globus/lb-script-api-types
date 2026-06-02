import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MappedItem extends Object {
    constructor(arg0: number, arg1: string)
    constructor(arg0: number, arg1: string, arg2: number)
    // private customModelData: number;
    // private id: number;
    // private jsonName: string;
    // private tagName: Tag;
    customModelData(): number;
    id(): number;
    jsonName(): string;
    tagName(): Tag;
}