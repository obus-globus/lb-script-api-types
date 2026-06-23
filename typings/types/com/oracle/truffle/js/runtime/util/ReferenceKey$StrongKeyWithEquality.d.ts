import type { ReferenceKey$WithEquality } from '../../../../../../com/oracle/truffle/js/runtime/util/ReferenceKey$WithEquality.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReferenceKey$StrongKeyWithEquality<T extends unknown> extends Object implements ReferenceKey$WithEquality<T> {
    constructor(key: T)
    // private hashcode: number;
    // private key: T;
    clear(): void;
    equals(obj: Object | null): boolean;
    get(): T;
    hashCode(): number;
}