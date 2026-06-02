import type { Restriction } from '../../../../com/seedfinding/mcbiome/device/Restriction.d.ts'
import type { Restriction$Factory } from '../../../../com/seedfinding/mcbiome/device/Restriction$Factory.d.ts'
import type { BiomeLayer } from '../../../../com/seedfinding/mcbiome/layer/BiomeLayer.d.ts'
import type { LayeredBiomeSource } from '../../../../com/seedfinding/mcbiome/source/LayeredBiomeSource.d.ts'
import type { MCVersion } from '../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OrRestriction extends Restriction {
    static of(paramarg0: Object | null): (param0: OrRestriction, param1: MCVersion, param2: number) => unknown;
    constructor(arg0: number, arg1: number, arg2: Restriction[])
    // private restrictions: Restriction[];
    getBitPoints(): number[];
    testSeed(arg0: number, arg1: number): boolean;
    testSource(arg0: LayeredBiomeSource<BiomeLayer>): boolean;
}