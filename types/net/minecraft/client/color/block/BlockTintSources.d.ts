import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockTintSource } from '../../../../../net/minecraft/client/color/block/BlockTintSource.d.ts'
export class BlockTintSources extends Object {
    static constant(paramcolor: number): BlockTintSource;
    static constant(paramcolorInHand: number, paramcolorInWorld: number): BlockTintSource;
    static doubleTallGrass(): BlockTintSource;
    static dryFoliage(): BlockTintSource;
    static foliage(): BlockTintSource;
    static grass(): BlockTintSource;
    static grassBlock(): BlockTintSource;
    static redstone(): BlockTintSource;
    static stem(): BlockTintSource;
    static sugarCane(): BlockTintSource;
    static water(): BlockTintSource;
    static waterParticles(): BlockTintSource;
    constructor()
}