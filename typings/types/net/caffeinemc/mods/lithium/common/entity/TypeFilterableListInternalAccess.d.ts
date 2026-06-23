import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface TypeFilterableListInternalAccess<T extends unknown> extends Object {
    lithium$getOrCreateAllOfTypeRaw<S extends T>(arg0: Class<S>): S[];
    lithium$replaceCollectionAndGet<S extends T>(arg0: Class<S>, arg1: S[]): S[];
    lithium$replaceCollectionAndGet<S extends T>(arg0: Class<S>, arg1: (param0: S[]) => S[]): S[];
}