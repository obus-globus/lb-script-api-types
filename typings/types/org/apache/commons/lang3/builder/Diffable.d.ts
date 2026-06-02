import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Diff } from '../../../../../org/apache/commons/lang3/builder/Diff.d.ts'
export interface Diffable<T extends Object | number | string | boolean> extends Object{
    diff(arg0: T): Diff<Object>[];
}