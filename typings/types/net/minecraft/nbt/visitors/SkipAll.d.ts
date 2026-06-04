import type { Object } from '../../../../java/lang/Object.d.ts'
import type { StreamTagVisitor } from '../../../../net/minecraft/nbt/StreamTagVisitor.d.ts'
import type { StreamTagVisitor$EntryResult } from '../../../../net/minecraft/nbt/StreamTagVisitor$EntryResult.d.ts'
import type { StreamTagVisitor$ValueResult } from '../../../../net/minecraft/nbt/StreamTagVisitor$ValueResult.d.ts'
import type { TagType } from '../../../../net/minecraft/nbt/TagType.d.ts'
export interface SkipAll extends Object, StreamTagVisitor{
    visit(value: number): StreamTagVisitor$ValueResult;
    visit(value: number[]): StreamTagVisitor$ValueResult;
    visit(value: string): StreamTagVisitor$ValueResult;
    visitContainerEnd(): StreamTagVisitor$ValueResult;
    visitElement(type: TagType<Object>, index: number): StreamTagVisitor$EntryResult;
    visitEnd(): StreamTagVisitor$ValueResult;
    visitEntry(type: TagType<Object>): StreamTagVisitor$EntryResult;
    visitEntry(type: TagType<Object>, id: string): StreamTagVisitor$EntryResult;
    visitList(elementType: TagType<Object>, size: number): StreamTagVisitor$ValueResult;
    visitRootEntry(type: TagType<Object>): StreamTagVisitor$ValueResult;
}