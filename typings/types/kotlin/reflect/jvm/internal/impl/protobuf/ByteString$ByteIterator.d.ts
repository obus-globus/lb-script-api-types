import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
export interface ByteString$ByteIterator extends Object, Iterator<number> {
    forEachRemaining(arg0: (param0: number) => void): void;
    nextByte(): number;
}