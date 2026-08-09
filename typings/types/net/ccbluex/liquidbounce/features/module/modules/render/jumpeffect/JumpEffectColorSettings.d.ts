import type { ValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { Color4b } from '../../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class JumpEffectColorSettings extends ValueGroup {
    constructor()
    readonly innerColor: Color4b;
    readonly outerColor: Color4b;
}