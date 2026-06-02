import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Display$GenericInterpolator<T extends Object | number | string | boolean> extends Object{
    get(progress: number): T;
}