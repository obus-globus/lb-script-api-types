import type { Object } from '../../../java/lang/Object.d.ts'
import type { StreamTagVisitor$EntryResult } from '../../../net/minecraft/nbt/StreamTagVisitor$EntryResult.d.ts'
import type { StreamTagVisitor$ValueResult } from '../../../net/minecraft/nbt/StreamTagVisitor$ValueResult.d.ts'
import type { TagType } from '../../../net/minecraft/nbt/TagType.d.ts'
export interface StreamTagVisitor extends Object{
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