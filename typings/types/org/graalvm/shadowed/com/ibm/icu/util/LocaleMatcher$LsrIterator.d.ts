import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { LSR } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/locale/LSR.d.ts'
export abstract class LocaleMatcher$LsrIterator extends Object implements Iterator<LSR> {
    private constructor()
    // private bestDesiredIndex: number;
    forEachRemaining(arg0: (param0: LSR) => void): void;
    rememberCurrent(desiredIndex: number): void;
    remove(): void;
}