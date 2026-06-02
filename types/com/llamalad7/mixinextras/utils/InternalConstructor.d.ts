import type { Object } from '../../../../java/lang/Object.d.ts'
export interface InternalConstructor<T extends Object | number | string | boolean> extends Object{
    newInstance(arg0: Object[]): T;
}