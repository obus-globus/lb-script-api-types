import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ScopedValue } from '../../../../../java/lang/ScopedValue.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { TagFile } from '../../../../../net/minecraft/tags/TagFile.d.ts'
import type { TagLoader$EntryWithSource } from '../../../../../net/minecraft/tags/TagLoader$EntryWithSource.d.ts'
export class TagRemovalInternals extends Object {
    static TAG_ID_SCOPED_VALUE: ScopedValue<Identifier>;
    static addRemoveEntry(paramarg0: Identifier, paramarg1: TagLoader$EntryWithSource): void;
    static addTagSource(paramarg0: Identifier, paramarg1: string): void;
    static isEntryRemove(paramarg0: TagLoader$EntryWithSource): boolean;
    static mergeAddedAndRemovedEntries(paramarg0: Identifier, paramarg1: TagLoader$EntryWithSource[]): TagLoader$EntryWithSource[];
    static modifyTagFileCodec(paramarg0: Codec<TagFile>): Codec<TagFile>;
    static removeTagRemovalReference(paramarg0: Identifier): void;
    static removeTagRemovalReferences(): void;
    constructor()
}