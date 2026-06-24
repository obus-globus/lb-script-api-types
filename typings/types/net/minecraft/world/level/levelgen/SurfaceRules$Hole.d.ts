import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { SurfaceRules$Condition } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Condition.d.ts'
import type { SurfaceRules$ConditionSource } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$ConditionSource.d.ts'
import type { SurfaceRules$Context } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Context.d.ts'
export class SurfaceRules$Hole extends Enum<SurfaceRules$Hole> implements SurfaceRules$ConditionSource {
    static CODEC: Codec<SurfaceRules$ConditionSource>;
    static INSTANCE: SurfaceRules$Hole;
    static bootstrap(paramregistry: MapCodec<SurfaceRules$ConditionSource>[]): MapCodec<SurfaceRules$ConditionSource>;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SurfaceRules$Hole;
    static values(): (Object | null)[];
    private constructor()
    apply(context: SurfaceRules$Context): SurfaceRules$Condition;
    codec(): MapCodec<SurfaceRules$Hole>;
    name(): "INSTANCE";
}