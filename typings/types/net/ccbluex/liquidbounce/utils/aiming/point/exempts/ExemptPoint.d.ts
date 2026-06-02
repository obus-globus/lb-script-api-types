import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ExemptContext } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/exempts/ExemptContext.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface ExemptPoint extends Object{
    predicate(context: ExemptContext, point: Vec3): boolean;
}