import type { Object } from '../../../java/lang/Object.d.ts'
export interface StaticCache2D$Initializer<T extends Object | number | string | boolean> extends Object{
    get(x: number, z: number): T;
}