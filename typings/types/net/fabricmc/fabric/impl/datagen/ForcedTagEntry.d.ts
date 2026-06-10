import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { TagEntry } from '../../../../../net/minecraft/tags/TagEntry.d.ts'
export class ForcedTagEntry extends TagEntry {
    static CODEC: Codec<TagEntry>;
    static element(paramid: Identifier): TagEntry;
    static optionalElement(paramid: Identifier): TagEntry;
    static optionalTag(paramid: Identifier): TagEntry;
    static tag(paramid: Identifier): TagEntry;
    constructor(arg0: Identifier)
    verifyIfPresent(arg0: (param0: Identifier) => boolean, arg1: (param0: Identifier) => boolean): boolean;
}