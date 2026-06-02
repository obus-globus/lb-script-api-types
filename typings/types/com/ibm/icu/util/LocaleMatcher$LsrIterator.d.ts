import type { LSR } from '../../../../com/ibm/icu/impl/locale/LSR.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export abstract class LocaleMatcher$LsrIterator extends Object implements Iterator<LSR> {
    private constructor()
    // private bestDesiredIndex: number;
    forEachRemaining(arg0: (param0: T) => void): void;
    rememberCurrent(arg0: number): void;
    remove(): void;
}