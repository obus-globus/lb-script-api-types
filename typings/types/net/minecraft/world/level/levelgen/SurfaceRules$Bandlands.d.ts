import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { KeyDispatchDataCodec } from '../../../../../net/minecraft/util/KeyDispatchDataCodec.d.ts'
import type { SurfaceRules$Context } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Context.d.ts'
import type { SurfaceRules$RuleSource } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$RuleSource.d.ts'
import type { SurfaceRules$SurfaceRule } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$SurfaceRule.d.ts'
export class SurfaceRules$Bandlands extends Enum<SurfaceRules$Bandlands> implements SurfaceRules$RuleSource {
    static CODEC: Codec<SurfaceRules$RuleSource>;
    static INSTANCE: SurfaceRules$Bandlands;
    static bootstrap(paramregistry: (Object | null)[]): MapCodec<Object>;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SurfaceRules$Bandlands;
    static values(): (Object | null)[];
    private constructor()
    apply(context: SurfaceRules$Context): SurfaceRules$SurfaceRule;
    codec(): KeyDispatchDataCodec<SurfaceRules$RuleSource>;
    name(): "INSTANCE";
}