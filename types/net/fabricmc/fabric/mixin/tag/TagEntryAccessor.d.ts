import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export interface TagEntryAccessor extends Object{
    fabric_getId(): Identifier;
    fabric_getTag(): boolean;
}