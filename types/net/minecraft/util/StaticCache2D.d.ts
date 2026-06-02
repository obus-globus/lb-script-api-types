import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { StaticCache2D$Initializer } from '../../../net/minecraft/util/StaticCache2D$Initializer.d.ts'
export class StaticCache2D<T extends Object | number | string | boolean> extends Object {
    static create(paramcenterX: number, paramcenterZ: number, paramrange: number, paraminitializer: (param0: Object | null, param1: number) => unknown): StaticCache2D<Object>;
    private constructor(minX: number, minZ: number, sizeX: number, sizeZ: number, initializer: (param0: T, param1: number) => unknown)
    // private cache: Object[];
    // private minX: number;
    // private minZ: number;
    // private sizeX: number;
    // private sizeZ: number;
    contains(x: number, z: number): boolean;
    forEach(consumer: (param0: T) => void): void;
    get(x: number, z: number): T;
    // private getIndex(x: number, z: number): number;
    toString(): string;
}