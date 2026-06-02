import type { IOException } from '../../../../java/io/IOException.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { IOExceptionWithCause } from '../../../../org/apache/commons/io/IOExceptionWithCause.d.ts'
export class TaggedIOException extends IOExceptionWithCause {
    static isTaggedWith(paramarg0: Throwable, paramarg1: Object): boolean;
    static throwCauseIfTaggedWith(paramarg0: Throwable, paramarg1: Object): void;
    constructor(arg0: IOException, arg1: Serializable)
    readonly cause: IOException | null;
    readonly tag: Serializable;
    getTag(): Serializable;
}