import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface Transform<S extends unknown, D extends unknown> extends Object{
    transform(source: S): D;
}