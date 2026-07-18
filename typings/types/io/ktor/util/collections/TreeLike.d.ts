import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Sequence } from '../../../../kotlin/sequences/Sequence.d.ts'
export interface TreeLike<T extends TreeLike<T>> extends Object{
    readonly children: T[];
    readonly parent: T | null;
    descendants(): Sequence<T>;
    isLeaf(): boolean;
    isRoot(): boolean;
    lineage(): Sequence<T>;
}