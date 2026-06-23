import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Transform<S extends unknown, D extends unknown> extends Object{
    transform(arg0: S): D;
}