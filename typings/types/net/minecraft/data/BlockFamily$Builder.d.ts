import type { Object } from '../../../java/lang/Object.d.ts'
import type { BlockFamily } from '../../../net/minecraft/data/BlockFamily.d.ts'
import type { Block } from '../../../net/minecraft/world/level/block/Block.d.ts'
export class BlockFamily$Builder extends Object {
    constructor(baseBlock: Block)
    readonly family: BlockFamily;
    bricks(bricks: Block): BlockFamily$Builder;
    button(button: Block): BlockFamily$Builder;
    chiseled(chiseled: Block): BlockFamily$Builder;
    cobbled(cobble: Block): BlockFamily$Builder;
    cracked(cracked: Block): BlockFamily$Builder;
    customFence(fence: Block): BlockFamily$Builder;
    customFenceGate(fenceGate: Block): BlockFamily$Builder;
    customHangingSign(sign: Block, wallSign: Block): BlockFamily$Builder;
    cut(cut: Block): BlockFamily$Builder;
    dontGenerateCraftingRecipe(): BlockFamily$Builder;
    dontGenerateModel(): BlockFamily$Builder;
    dontGenerateSmeltingRecipe(): BlockFamily$Builder;
    door(door: Block): BlockFamily$Builder;
    fence(fence: Block): BlockFamily$Builder;
    fenceGate(fenceGate: Block): BlockFamily$Builder;
    generateStonecutterRecipe(): BlockFamily$Builder;
    getFamily(): BlockFamily;
    hangingSign(sign: Block, wallSign: Block): BlockFamily$Builder;
    log(log: Block): BlockFamily$Builder;
    mosaic(mosaic: Block): BlockFamily$Builder;
    pillar(pillar: Block): BlockFamily$Builder;
    polished(polished: Block): BlockFamily$Builder;
    pressurePlate(pressurePlate: Block): BlockFamily$Builder;
    recipeGroupPrefix(recipeGroupPrefix: string): BlockFamily$Builder;
    recipeUnlockedBy(recipeUnlockedBy: string): BlockFamily$Builder;
    sign(sign: Block, wallSign: Block): BlockFamily$Builder;
    slab(slab: Block): BlockFamily$Builder;
    stairs(stairs: Block): BlockFamily$Builder;
    strippedLog(strippedLog: Block): BlockFamily$Builder;
    tiles(tiles: Block): BlockFamily$Builder;
    trapdoor(trapdoor: Block): BlockFamily$Builder;
    wall(wall: Block): BlockFamily$Builder;
}