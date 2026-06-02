import type { ReferenceKey$WithIdentity } from '../../../../../../com/oracle/truffle/js/runtime/util/ReferenceKey$WithIdentity.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReferenceKey$StrongKeyWithIdentity<T extends Object | number | string | boolean> extends Object implements ReferenceKey$WithIdentity<T> {
    constructor(key: T)
    // private hashcode: number;
    // private key: T;
    clear(): void;
    equals(obj: Object | null): boolean;
    get(): T;
    hashCode(): number;
    refersTo(otherKey: T): boolean;
}