import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { HolderType } from '../../../../../com/viaversion/viaversion/api/type/types/misc/HolderType.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PaintingVariant extends Record {
    static TYPE1_21: HolderType<PaintingVariant>;
    static TYPE1_21_2: HolderType<PaintingVariant>;
    // private assetId: string;
    // private author: Tag;
    // private height: number;
    // private title: Tag;
    // private width: number;
    assetId(): string;
    author(): Tag;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    height(): number;
    title(): Tag;
    toString(): string;
    width(): number;
}