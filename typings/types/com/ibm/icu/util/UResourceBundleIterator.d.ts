import type { UResourceBundle } from '../../../../com/ibm/icu/util/UResourceBundle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UResourceBundleIterator extends Object {
    constructor(arg0: UResourceBundle)
    // private bundle: UResourceBundle;
    // private index: number;
    // private size: number;
    hasNext(): boolean;
    next(): UResourceBundle;
    nextString(): string;
    reset(): void;
}