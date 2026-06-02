import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { Normalizer2Impl } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Normalizer2Impl.d.ts'
export class Normalizer2Impl$ReorderingBuffer extends Object implements Appendable {
    constructor(ni: Normalizer2Impl, dest: Appendable, destCapacity: number)
    // private app: Appendable;
    // private appIsStringBuilder: boolean;
    // private codePointLimit: number;
    // private codePointStart: number;
    // private impl: Normalizer2Impl;
    readonly lastCC: number;
    // private reorderStart: number;
    // private str: StringBuilder;
    append(c: string): Normalizer2Impl$ReorderingBuffer;
    append(s: CharSequence): Normalizer2Impl$ReorderingBuffer;
    append(s: CharSequence, start: number, limit: number): Normalizer2Impl$ReorderingBuffer;
    append(s: CharSequence, start: number, limit: number, isNFD: boolean, leadCC: number, trailCC: number): void;
    append(c: number, cc: number): void;
    appendZeroCC(c: number): void;
    equals(s: CharSequence, start: number, limit: number): boolean;
    flush(): void;
    flushAndAppendZeroCC(s: CharSequence, start: number, limit: number): Normalizer2Impl$ReorderingBuffer;
    getLastCC(): number;
    getStringBuilder(): StringBuilder;
    // private insert(c: number, cc: number): void;
    isEmpty(): boolean;
    length(): number;
    // private previousCC(): number;
    remove(): void;
    removeSuffix(suffixLength: number): void;
    // private setIterator(): void;
    // private skipPrevious(): void;
}