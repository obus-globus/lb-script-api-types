import type { BiomeDevice$BitGroup } from '../../../../com/seedfinding/mcbiome/device/BiomeDevice$BitGroup.d.ts'
import type { Restriction } from '../../../../com/seedfinding/mcbiome/device/Restriction.d.ts'
import type { Restriction$Factory } from '../../../../com/seedfinding/mcbiome/device/Restriction$Factory.d.ts'
import type { MCVersion } from '../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
import type { LongConsumer } from '../../../../java/util/function/LongConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BiomeDevice extends Object {
    constructor(arg0: MCVersion)
    // private restrictions: Restriction[];
    // private version: MCVersion;
    add(arg0: Restriction): BiomeDevice;
    add(arg0: (param0: MCVersion, param1: number, param2: number) => unknown, arg1: number, arg2: number): BiomeDevice;
    findSeeds(arg0: (param0: number) => void): void;
    // private groupRestrictions(): BiomeDevice$BitGroup[];
    search(arg0: BiomeDevice$BitGroup, arg1: number, arg2: number, arg3: (param0: number) => void): void;
}