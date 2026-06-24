import type { AbstractCubeMob$CubeMobMoveControl } from '../../../../../../net/minecraft/world/entity/monster/cubemob/AbstractCubeMob$CubeMobMoveControl.d.ts'
import type { SulfurCube } from '../../../../../../net/minecraft/world/entity/monster/cubemob/SulfurCube.d.ts'
export class SulfurCube$SulfurCubeMobMoveControl<T extends SulfurCube> extends AbstractCubeMob$CubeMobMoveControl<T> {
    static MIN_SPEED: number;
    static MIN_SPEED_SQR: number;
    constructor(cubeMob: T)
    tick(): void;
}