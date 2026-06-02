import type { BooleanConsumer } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { BooleanIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanIterator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanBidirectionalIterator extends BooleanIterator, ObjectBidirectionalIterator<boolean>, Object{
    back(arg0: number): number;
    back(arg0: number): number;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    forEachRemaining(arg0: (param0: boolean) => void): void;
    next(): boolean;
    previous(): boolean;
    previousBoolean(): boolean;
    skip(arg0: number): number;
    skip(arg0: number): number;
    skip(arg0: number): number;
}