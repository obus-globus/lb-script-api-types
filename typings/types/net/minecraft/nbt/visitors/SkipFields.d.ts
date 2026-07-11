import type { StreamTagVisitor$EntryResult } from '../../../../net/minecraft/nbt/StreamTagVisitor$EntryResult.d.ts'
import type { StreamTagVisitor$ValueResult } from '../../../../net/minecraft/nbt/StreamTagVisitor$ValueResult.d.ts'
import type { TagType } from '../../../../net/minecraft/nbt/TagType.d.ts'
import type { CollectToTag } from '../../../../net/minecraft/nbt/visitors/CollectToTag.d.ts'
import type { FieldSelector } from '../../../../net/minecraft/nbt/visitors/FieldSelector.d.ts'
import type { FieldTree } from '../../../../net/minecraft/nbt/visitors/FieldTree.d.ts'
export class SkipFields extends CollectToTag {
    constructor(...wantedFields: FieldSelector[])
    // private stack: FieldTree[];
    visitContainerEnd(): StreamTagVisitor$ValueResult;
    visitEntry(type: TagType<any>): StreamTagVisitor$EntryResult;
    visitEntry(type: TagType<any>, id: string): StreamTagVisitor$EntryResult;
}