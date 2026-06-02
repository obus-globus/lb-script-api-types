import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StreamTagVisitor$EntryResult } from '../../../../net/minecraft/nbt/StreamTagVisitor$EntryResult.d.ts'
import type { StreamTagVisitor$ValueResult } from '../../../../net/minecraft/nbt/StreamTagVisitor$ValueResult.d.ts'
import type { TagType } from '../../../../net/minecraft/nbt/TagType.d.ts'
import type { CollectToTag } from '../../../../net/minecraft/nbt/visitors/CollectToTag.d.ts'
import type { FieldSelector } from '../../../../net/minecraft/nbt/visitors/FieldSelector.d.ts'
import type { FieldTree } from '../../../../net/minecraft/nbt/visitors/FieldTree.d.ts'
export class CollectFields extends CollectToTag {
    constructor(wantedFields: FieldSelector[])
    // private fieldsToGetCount: number;
    // private stack: FieldTree[];
    // private wantedTypes: TagType<Object>[];
    getMissingFieldCount(): number;
    visitContainerEnd(): StreamTagVisitor$ValueResult;
    visitEntry(type: TagType<Object>): StreamTagVisitor$EntryResult;
    visitEntry(type: TagType<Object>, id: string): StreamTagVisitor$EntryResult;
    visitRootEntry(type: TagType<Object>): StreamTagVisitor$ValueResult;
}