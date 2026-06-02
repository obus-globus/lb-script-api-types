import type { ValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
export class ModuleParticles$Physical extends ValueGroup {
    constructor()
    readonly bounceX: number;
    readonly bounceY: number;
    readonly bounceZ: number;
    readonly drag: number;
    readonly gravityFactor: number;
    readonly motion: number;
}