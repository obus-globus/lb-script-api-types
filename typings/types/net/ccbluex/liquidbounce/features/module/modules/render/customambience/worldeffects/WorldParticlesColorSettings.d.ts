import type { ValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { Color4b } from '../../../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class WorldParticlesColorSettings extends ValueGroup {
    constructor()
    readonly color: Color4b;
    getColor(): Color4b;
}