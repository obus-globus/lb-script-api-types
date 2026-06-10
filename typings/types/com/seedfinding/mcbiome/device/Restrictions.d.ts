import type { BoundRestriction } from '../../../../com/seedfinding/mcbiome/device/BoundRestriction.d.ts'
import type { ModRestriction } from '../../../../com/seedfinding/mcbiome/device/ModRestriction.d.ts'
import type { Restriction$Factory } from '../../../../com/seedfinding/mcbiome/device/Restriction$Factory.d.ts'
import type { MCVersion } from '../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Restrictions extends Object {
    static BAMBOO_JUNGLE: (param0: MCVersion, param1: number, param2: number) => BoundRestriction;
    static COLD_FOREST: (param0: MCVersion, param1: number, param2: number) => BoundRestriction;
    static COLD_MOUNTAIN: (param0: MCVersion, param1: number, param2: number) => BoundRestriction;
    static COLD_PLAINS: (param0: MCVersion, param1: number, param2: number) => BoundRestriction;
    static CONTINENT: (param0: MCVersion, param1: number, param2: number) => BoundRestriction;
    static HILLS_PLATEAU: (param0: MCVersion, param1: number, param2: number) => BoundRestriction;
    static ISLAND: (param0: MCVersion, param1: number, param2: number) => BoundRestriction;
    static MUSHROOM: (param0: MCVersion, param1: number, param2: number) => BoundRestriction;
    static MUTATED: (param0: MCVersion, param1: number, param2: number) => ModRestriction;
    static MUTATED_SECOND: (param0: MCVersion, param1: number, param2: number) => ModRestriction;
    static SAVANNAH_BIOME: (param0: MCVersion, param1: number, param2: number) => BoundRestriction;
    static SPECIAL: (param0: MCVersion, param1: number, param2: number) => BoundRestriction;
    static SUNFLOWER_PLAINS: (param0: MCVersion, param1: number, param2: number) => BoundRestriction;
    constructor()
}