import type { BoundRestriction } from '../../../../com/seedfinding/mcbiome/device/BoundRestriction.d.ts'
import type { ModRestriction } from '../../../../com/seedfinding/mcbiome/device/ModRestriction.d.ts'
import type { Restriction$Factory } from '../../../../com/seedfinding/mcbiome/device/Restriction$Factory.d.ts'
import type { MCVersion } from '../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Restrictions extends Object {
    static BAMBOO_JUNGLE: (param0: BoundRestriction, param1: MCVersion, param2: number) => unknown;
    static COLD_FOREST: (param0: BoundRestriction, param1: MCVersion, param2: number) => unknown;
    static COLD_MOUNTAIN: (param0: BoundRestriction, param1: MCVersion, param2: number) => unknown;
    static COLD_PLAINS: (param0: BoundRestriction, param1: MCVersion, param2: number) => unknown;
    static CONTINENT: (param0: BoundRestriction, param1: MCVersion, param2: number) => unknown;
    static HILLS_PLATEAU: (param0: BoundRestriction, param1: MCVersion, param2: number) => unknown;
    static ISLAND: (param0: BoundRestriction, param1: MCVersion, param2: number) => unknown;
    static MUSHROOM: (param0: BoundRestriction, param1: MCVersion, param2: number) => unknown;
    static MUTATED: (param0: ModRestriction, param1: MCVersion, param2: number) => unknown;
    static MUTATED_SECOND: (param0: ModRestriction, param1: MCVersion, param2: number) => unknown;
    static SAVANNAH_BIOME: (param0: BoundRestriction, param1: MCVersion, param2: number) => unknown;
    static SPECIAL: (param0: BoundRestriction, param1: MCVersion, param2: number) => unknown;
    static SUNFLOWER_PLAINS: (param0: BoundRestriction, param1: MCVersion, param2: number) => unknown;
    constructor()
}