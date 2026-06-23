import type { Object } from '../../../java/lang/Object.d.ts'
export interface StaticCache2D$Initializer<T extends unknown> extends Object{
    get(x: number, z: number): T;
}