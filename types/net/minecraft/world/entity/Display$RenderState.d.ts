import type { Transformation } from '../../../../com/mojang/math/Transformation.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Display$BillboardConstraints } from '../../../../net/minecraft/world/entity/Display$BillboardConstraints.d.ts'
import type { Display$FloatInterpolator } from '../../../../net/minecraft/world/entity/Display$FloatInterpolator.d.ts'
import type { Display$GenericInterpolator } from '../../../../net/minecraft/world/entity/Display$GenericInterpolator.d.ts'
export class Display$RenderState extends Record {
    // private billboardConstraints: Display$BillboardConstraints;
    // private brightnessOverride: number;
    // private glowColorOverride: number;
    // private shadowRadius: (param0: number) => kotlin.Float;
    // private shadowStrength: (param0: number) => kotlin.Float;
    // private transformation: (param0: Transformation) => unknown;
    billboardConstraints(): Display$BillboardConstraints;
    brightnessOverride(): number;
    equals(o: Object | null): boolean;
    glowColorOverride(): number;
    hashCode(): number;
    shadowRadius(): (param0: number) => kotlin.Float;
    shadowStrength(): (param0: number) => kotlin.Float;
    toString(): string;
    transformation(): (param0: Transformation) => unknown;
}