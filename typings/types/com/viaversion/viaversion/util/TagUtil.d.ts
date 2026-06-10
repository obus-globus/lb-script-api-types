import type { NumberTag } from '../../../../com/viaversion/nbt/tag/NumberTag.d.ts'
import type { StringTag } from '../../../../com/viaversion/nbt/tag/StringTag.d.ts'
import type { Tag } from '../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { TagUtil$TagUpdater } from '../../../../com/viaversion/viaversion/util/TagUtil$TagUpdater.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class TagUtil extends Object {
    static containsNamespaced(paramarg0: Map$Entry<string, Tag>[], paramarg1: string): boolean;
    static getNamespacedCompoundTag(paramarg0: Map$Entry<string, Tag>[], paramarg1: string): Map$Entry<string, Tag>[];
    static getNamespacedCompoundTagList(paramarg0: Map$Entry<string, Tag>[], paramarg1: string): Map$Entry<string, Tag>[][];
    static getNamespacedNumberTag(paramarg0: Map$Entry<string, Tag>[], paramarg1: string): NumberTag;
    static getNamespacedStringTag(paramarg0: Map$Entry<string, Tag>[], paramarg1: string): StringTag;
    static getNamespacedTag(paramarg0: Map$Entry<string, Tag>[], paramarg1: string): Tag;
    static getNamespacedTagKey(paramarg0: Map$Entry<string, Tag>[], paramarg1: string): string;
    static getNamespacedTagList(paramarg0: Map$Entry<string, Tag>[], paramarg1: string): Tag[];
    static getRegistryEntries(paramarg0: Map$Entry<string, Tag>[], paramarg1: string): Map$Entry<string, Tag>[][];
    static getRegistryEntries(paramarg0: Map$Entry<string, Tag>[], paramarg1: string, paramarg2: Map$Entry<string, Tag>[][]): Map$Entry<string, Tag>[][];
    static handleDeep(paramarg0: Tag, paramarg1: (param0: string, param1: Tag) => Tag): Tag;
    static removeNamespaced(paramarg0: Map$Entry<string, Tag>[], paramarg1: string): boolean;
    static removeRegistryEntries(paramarg0: Map$Entry<string, Tag>[], paramarg1: string): Map$Entry<string, Tag>[][];
    static removeRegistryEntries(paramarg0: Map$Entry<string, Tag>[], paramarg1: string, paramarg2: Map$Entry<string, Tag>[][]): Map$Entry<string, Tag>[][];
    constructor()
}