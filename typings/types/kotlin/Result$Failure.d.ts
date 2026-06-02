import type { Serializable } from '../java/io/Serializable.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Throwable } from '../java/lang/Throwable.d.ts'
export class Result$Failure extends Object implements Serializable {
    constructor(exception: Throwable)
    exception: Throwable;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}