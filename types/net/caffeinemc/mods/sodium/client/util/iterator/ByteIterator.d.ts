import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ByteIterator extends Object{
    hasNext(): boolean;
    nextByteAsInt(): number;
}