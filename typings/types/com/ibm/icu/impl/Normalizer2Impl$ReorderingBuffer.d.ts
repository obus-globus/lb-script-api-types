import type { Normalizer2Impl } from '../../../../com/ibm/icu/impl/Normalizer2Impl.d.ts'
import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Normalizer2Impl$ReorderingBuffer extends Object implements Appendable {
    constructor(arg0: Normalizer2Impl, arg1: Appendable, arg2: number)
    // private app: Appendable;
    // private appIsStringBuilder: boolean;
    // private codePointLimit: number;
    // private codePointStart: number;
    // private impl: Normalizer2Impl;
    readonly lastCC: number;
    // private reorderStart: number;
    // private str: StringBuilder;
    append(arg0: string): Normalizer2Impl$ReorderingBuffer;
    append(arg0: CharSequence): Normalizer2Impl$ReorderingBuffer;
    append(arg0: CharSequence, arg1: number, arg2: number): Normalizer2Impl$ReorderingBuffer;
    append(arg0: CharSequence, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: number): void;
    append(arg0: number, arg1: number): void;
    appendZeroCC(arg0: number): void;
    equals(other: Object | null): boolean;
    equals(arg0: CharSequence, arg1: number, arg2: number): boolean;
    flush(): void;
    flushAndAppendZeroCC(arg0: CharSequence, arg1: number, arg2: number): Normalizer2Impl$ReorderingBuffer;
    getLastCC(): number;
    getStringBuilder(): StringBuilder;
    // private insert(arg0: number, arg1: number): void;
    isEmpty(): boolean;
    length(): number;
    // private previousCC(): number;
    remove(): void;
    removeSuffix(arg0: number): void;
    // private setIterator(): void;
    // private skipPrevious(): void;
}