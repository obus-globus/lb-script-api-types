import type { Object } from '../../../java/lang/Object.d.ts'
import type { SeqLockPrefixTree$Node } from '../../../org/graalvm/collections/SeqLockPrefixTree$Node.d.ts'
export interface SeqLockPrefixTree$Visitor<R extends unknown> extends Object{
    visit(n: SeqLockPrefixTree$Node, childResults: R[]): R;
}