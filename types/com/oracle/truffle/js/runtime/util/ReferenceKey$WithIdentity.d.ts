import type { ReferenceKey } from '../../../../../../com/oracle/truffle/js/runtime/util/ReferenceKey.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ReferenceKey$WithIdentity<T extends Object | number | string | boolean> extends ReferenceKey<T>, Object{
    refersTo(key: T): boolean;
}