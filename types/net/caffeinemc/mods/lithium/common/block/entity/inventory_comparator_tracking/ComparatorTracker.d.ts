import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
export interface ComparatorTracker extends Object{
    lithium$hasAnyComparatorNearby(): boolean;
    lithium$onComparatorAdded(arg0: Direction, arg1: number): void;
}