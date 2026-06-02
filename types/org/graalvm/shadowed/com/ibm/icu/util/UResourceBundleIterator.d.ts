import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { UResourceBundle } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/UResourceBundle.d.ts'
export class UResourceBundleIterator extends Object {
    constructor(bndl: UResourceBundle)
    // private bundle: UResourceBundle;
    // private index: number;
    // private size: number;
    hasNext(): boolean;
    next(): UResourceBundle;
    nextString(): string;
    reset(): void;
}