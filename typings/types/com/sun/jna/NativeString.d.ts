import type { Pointer } from '../../../com/sun/jna/Pointer.d.ts'
import type { WString } from '../../../com/sun/jna/WString.d.ts'
import type { IntStream } from '../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export class NativeString extends Object implements CharSequence, Comparable<Object> {
    static compare(paramarg0: CharSequence, paramarg1: CharSequence): number;
    constructor(arg0: WString)
    constructor(arg0: string)
    constructor(arg0: string, arg1: boolean)
    constructor(arg0: string, arg1: string)
    // private encoding: string;
    /*not mapped: */ length(): number;
    readonly pointer: Pointer;
    chars(): IntStream;
    codePoints(): IntStream;
    compareTo(arg0: Object | null): number;
    equals(arg0: Object | null): boolean;
    get(arg0: number): string;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    getPointer(): Pointer;
    hashCode(): number;
    isEmpty(): boolean;
    subSequence(arg0: number, arg1: number): CharSequence;
    toString(): string;
}