import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TagEntry } from '../../../../../net/minecraft/tags/TagEntry.d.ts'
export interface TagFileHooks extends Object{
    fabric_setRemove(arg0: TagEntry[]): void;
}