import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StreamTagVisitor } from '../../../../net/minecraft/nbt/StreamTagVisitor.d.ts'
import type { StreamTagVisitor$EntryResult } from '../../../../net/minecraft/nbt/StreamTagVisitor$EntryResult.d.ts'
import type { StreamTagVisitor$ValueResult } from '../../../../net/minecraft/nbt/StreamTagVisitor$ValueResult.d.ts'
import type { Tag } from '../../../../net/minecraft/nbt/Tag.d.ts'
import type { TagType } from '../../../../net/minecraft/nbt/TagType.d.ts'
import type { CollectToTag$ContainerBuilder } from '../../../../net/minecraft/nbt/visitors/CollectToTag$ContainerBuilder.d.ts'
export class CollectToTag extends Object implements StreamTagVisitor {
    constructor()
    // private containerStack: CollectToTag$ContainerBuilder[];
    // private appendEntry(instance: Tag): void;
    depth(): number;
    // private enterContainerIfNeeded(type: TagType<any>): void;
    getResult(): Tag;
    visit(value: number): StreamTagVisitor$ValueResult;
    visit(value: number[]): StreamTagVisitor$ValueResult;
    visit(value: string): StreamTagVisitor$ValueResult;
    visitContainerEnd(): StreamTagVisitor$ValueResult;
    visitElement(type: TagType<any>, index: number): StreamTagVisitor$EntryResult;
    visitEnd(): StreamTagVisitor$ValueResult;
    visitEntry(type: TagType<any>): StreamTagVisitor$EntryResult;
    visitEntry(type: TagType<any>, id: string): StreamTagVisitor$EntryResult;
    visitList(elementType: TagType<any>, size: number): StreamTagVisitor$ValueResult;
    visitRootEntry(type: TagType<any>): StreamTagVisitor$ValueResult;
}