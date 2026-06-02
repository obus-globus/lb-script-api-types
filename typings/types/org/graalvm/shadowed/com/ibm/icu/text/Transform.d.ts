import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface Transform<S extends Object | number | string | boolean, D extends Object | number | string | boolean> extends Object{
    transform(source: S): D;
}