import type { IntBiomeLayer } from '../../../../com/seedfinding/mcbiome/layer/IntBiomeLayer.d.ts'
import type { LayeredBiomeSource } from '../../../../com/seedfinding/mcbiome/source/LayeredBiomeSource.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Restriction extends Object {
    constructor(arg0: string, arg1: number, arg2: number)
    readonly name: string;
    readonly x: number;
    readonly z: number;
    getBitPoints(): number[];
    getName(): string;
    getX(): number;
    getZ(): number;
    testSeed(arg0: number, arg1: number): boolean;
    testSource(arg0: LayeredBiomeSource<IntBiomeLayer>): boolean;
    toString(): string;
}