import type { SulfurCubeStateExtension } from '../../../../../../net/irisshaders/iris/mixinterface/SulfurCubeStateExtension.d.ts'
import type { BlockModelRenderState } from '../../../../../../net/minecraft/client/renderer/block/BlockModelRenderState.d.ts'
import type { SlimeRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/SlimeRenderState.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class SulfurCubeRenderState extends SlimeRenderState implements SulfurCubeStateExtension {
    static NO_OUTLINE: number;
    constructor()
    readonly block: BlockState;
    containedBlock: BlockModelRenderState;
    fuseRemainingTicks: number;
    getBlock(): BlockState;
    setBlock(arg0: BlockState): void;
}