import type { SmoothSwimmingMoveControl } from '../../../../../../net/minecraft/world/entity/ai/control/SmoothSwimmingMoveControl.d.ts'
import type { Axolotl } from '../../../../../../net/minecraft/world/entity/animal/axolotl/Axolotl.d.ts'
export class Axolotl$AxolotlMoveControl<T extends Axolotl> extends SmoothSwimmingMoveControl<T> {
    static MIN_SPEED: number;
    static MIN_SPEED_SQR: number;
    constructor(axolotl: T)
    tick(): void;
}