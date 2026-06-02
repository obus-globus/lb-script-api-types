import type { Restriction } from '../../../../com/seedfinding/mcbiome/device/Restriction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BiomeDevice$BitGroup extends Object {
    constructor(arg0: number, arg1: Restriction[])
    bits: number;
    next: BiomeDevice$BitGroup;
    restrictions: Restriction[];
    testSeed(arg0: number): boolean;
    testSource(arg0: number): boolean;
    toString(): string;
}