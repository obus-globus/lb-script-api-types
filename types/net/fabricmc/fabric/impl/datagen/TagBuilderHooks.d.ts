import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { TagEntry } from '../../../../../net/minecraft/tags/TagEntry.d.ts'
export interface TagBuilderHooks extends Object{
    fabric_forceAddTag(arg0: Identifier): void;
    fabric_getRemove(): TagEntry[];
    fabric_isReplaced(): boolean;
    fabric_removeElement(arg0: Identifier): void;
    fabric_removeTag(arg0: Identifier): void;
    fabric_setReplace(arg0: boolean): void;
}