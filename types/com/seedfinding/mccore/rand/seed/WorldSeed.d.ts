import type { SeedIterator } from '../../../../../com/seedfinding/mccore/util/data/SeedIterator.d.ts'
import type { StringUnhasher$Config } from '../../../../../com/seedfinding/mccore/util/data/StringUnhasher$Config.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WorldSeed extends Object {
    static fromHash(paramarg0: number, paramarg1: number): number[];
    static getShadowSeed(paramarg0: number): number;
    static getSisterSeeds(paramarg0: number): SeedIterator;
    static isRandom(paramarg0: number): boolean;
    static isString(paramarg0: number): boolean;
    static isStructureSeed(paramarg0: number): boolean;
    static randomSeedsIterator(): SeedIterator;
    static toHash(paramarg0: number): number;
    static toPillarSeed(paramarg0: number): number;
    static toString(paramarg0: number, paramarg1: StringUnhasher$Config, paramarg2: (param0: string) => kotlin.Boolean): void;
    static toStructureSeed(paramarg0: number): number;
    constructor()
}