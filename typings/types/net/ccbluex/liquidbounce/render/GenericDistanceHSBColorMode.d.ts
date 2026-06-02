import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CurveValue } from '../../../../net/ccbluex/liquidbounce/config/types/CurveValue.d.ts'
import type { RangedValue } from '../../../../net/ccbluex/liquidbounce/config/types/RangedValue.d.ts'
import type { ModeValueGroup } from '../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { GenericColorMode } from '../../../../net/ccbluex/liquidbounce/render/GenericColorMode.d.ts'
import type { GenericDistanceHSBColorMode$Companion } from '../../../../net/ccbluex/liquidbounce/render/GenericDistanceHSBColorMode$Companion.d.ts'
import type { Color4b } from '../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { ToFloatFunction } from '../../../../net/minecraft/util/ToFloatFunction.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
export class GenericDistanceHSBColorMode<T extends Object | number | string | boolean> extends GenericColorMode<T> {
    static Companion: Tagged$Companion;
    static Companion: GenericDistanceHSBColorMode$Companion;
    static entity(paramarg0: ModeValueGroup<Object>): GenericDistanceHSBColorMode<Entity>;
    static entity(paramarg0: ModeValueGroup<Object>, paramarg1: number): GenericDistanceHSBColorMode<Entity>;
    constructor(parent: ModeValueGroup<Object>, fixedAlpha: number | null, distanceGetter: (param0: T) => kotlin.Float)
    // private alphaValue: RangedValue<number> | null;
    // private brightness: number;
    // private /*not mapped: */ getBrightness(): number;
    // private distanceGetter: (param0: T) => kotlin.Float;
    // private fixedAlpha: number | null;
    // private hue: CurveValue;
    readonly parent: ModeValueGroup<Object>;
    // private saturation: number;
    // private /*not mapped: */ getSaturation(): number;
    getColor(param: T): Color4b;
}