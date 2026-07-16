import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { StaticCache2D$Initializer } from '../../../net/minecraft/util/StaticCache2D$Initializer.d.ts'
export class StaticCache2D<T extends unknown> extends Object {
    static create<T extends unknown>(paramcenterX: number, paramcenterZ: number, paramrange: number, paraminitializer: (param0: number, param1: number) => T): StaticCache2D<T>;
    private constructor(minX: number, minZ: number, sizeX: number, sizeZ: number, initializer: (param0: number, param1: number) => T)
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