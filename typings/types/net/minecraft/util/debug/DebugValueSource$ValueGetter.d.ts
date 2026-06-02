import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DebugValueSource$ValueGetter<T extends Object | number | string | boolean> extends Object{
    get(): T;
}