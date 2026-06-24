import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { EasingType } from '../../../net/minecraft/util/EasingType.d.ts'
import type { EasingType$CubicBezier$CubicCurve } from '../../../net/minecraft/util/EasingType$CubicBezier$CubicCurve.d.ts'
import type { EasingType$CubicBezierControls } from '../../../net/minecraft/util/EasingType$CubicBezierControls.d.ts'
import type { ExtraCodecs$LateBoundIdMapper } from '../../../net/minecraft/util/ExtraCodecs$LateBoundIdMapper.d.ts'
export class EasingType$CubicBezier extends Object implements EasingType {
    static CODEC: Codec<EasingType$CubicBezier>;
    static CODEC: Codec<EasingType>;
    static CONSTANT: EasingType;
    static IN_BACK: EasingType;
    static IN_BOUNCE: EasingType;
    static IN_CIRC: EasingType;
    static IN_CUBIC: EasingType;
    static IN_ELASTIC: EasingType;
    static IN_EXPO: EasingType;
    static IN_OUT_BACK: EasingType;
    static IN_OUT_BOUNCE: EasingType;
    static IN_OUT_CIRC: EasingType;
    static IN_OUT_CUBIC: EasingType;
    static IN_OUT_ELASTIC: EasingType;
    static IN_OUT_EXPO: EasingType;
    static IN_OUT_QUAD: EasingType;
    static IN_OUT_QUART: EasingType;
    static IN_OUT_QUINT: EasingType;
    static IN_OUT_SINE: EasingType;
    static IN_QUAD: EasingType;
    static IN_QUART: EasingType;
    static IN_QUINT: EasingType;
    static IN_SINE: EasingType;
    static LINEAR: EasingType;
    static OUT_BACK: EasingType;
    static OUT_BOUNCE: EasingType;
    static OUT_CIRC: EasingType;
    static OUT_CUBIC: EasingType;
    static OUT_ELASTIC: EasingType;
    static OUT_EXPO: EasingType;
    static OUT_QUAD: EasingType;
    static OUT_QUART: EasingType;
    static OUT_QUINT: EasingType;
    static OUT_SINE: EasingType;
    static SIMPLE_REGISTRY: ExtraCodecs$LateBoundIdMapper<string, EasingType>;
    static cubicBezier(paramx1: number, paramy1: number, paramx2: number, paramy2: number): EasingType;
    static registerSimple(paramid: string, parameasing: EasingType): EasingType;
    static symmetricCubicBezier(paramx1: number, paramy1: number): EasingType;
    constructor(controls: EasingType$CubicBezierControls)
    // private controls: EasingType$CubicBezierControls;
    // private xCurve: EasingType$CubicBezier$CubicCurve;
    // private yCurve: EasingType$CubicBezier$CubicCurve;
    apply(x: number): number;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    // private solveT(x: number): number;
    // private solveTBisect(x: number, initialT: number): number;
    toString(): string;
}