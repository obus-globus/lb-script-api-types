import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Display$GenericInterpolator<T extends unknown> extends Object{
    get(progress: number): T;
}