import type { SmoothSwimmingMoveControl } from '../../../../../../net/minecraft/world/entity/ai/control/SmoothSwimmingMoveControl.d.ts'
import type { Axolotl } from '../../../../../../net/minecraft/world/entity/animal/axolotl/Axolotl.d.ts'
export class Axolotl$AxolotlMoveControl extends SmoothSwimmingMoveControl {
    static MIN_SPEED: number;
    static MIN_SPEED_SQR: number;
    constructor(axolotl: Axolotl)
    // private axolotl: Axolotl;
    tick(): void;
}