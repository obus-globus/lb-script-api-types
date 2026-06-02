import type { Object } from '../../java/lang/Object.d.ts'
import type { Segment } from '../../kotlinx/coroutines/internal/Segment.d.ts'
export interface Waiter extends Object{
    invokeOnCancellation(segment: Segment<Object>, index: number): void;
}