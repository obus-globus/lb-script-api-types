import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface FabricPack extends Object {
    fabric$isHidden(): boolean;
    fabric$parentsEnabled(arg0: string[]): boolean;
    fabric$setParentsPredicate(arg0: (param0: string[]) => boolean): void;
}