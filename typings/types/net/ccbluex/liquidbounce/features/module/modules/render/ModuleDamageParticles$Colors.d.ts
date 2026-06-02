import type { ValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class ModuleDamageParticles$Colors extends ValueGroup {
    static INSTANCE: ModuleDamageParticles$Colors;
    readonly damage: Color4b;
    readonly death: Color4b;
    readonly heal: Color4b;
    readonly maxHealth: Color4b;
}