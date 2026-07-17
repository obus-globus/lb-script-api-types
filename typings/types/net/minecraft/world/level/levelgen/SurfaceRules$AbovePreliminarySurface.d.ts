import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { SurfaceRules$Condition } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Condition.d.ts'
import type { SurfaceRules$ConditionSource } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$ConditionSource.d.ts'
import type { SurfaceRules$Context } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Context.d.ts'
export class SurfaceRules$AbovePreliminarySurface extends Enum<SurfaceRules$AbovePreliminarySurface> implements SurfaceRules$ConditionSource {
    static CODEC: Codec<SurfaceRules$ConditionSource>;
    static INSTANCE: SurfaceRules$AbovePreliminarySurface;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SurfaceRules$AbovePreliminarySurface;
    static values(): SurfaceRules$AbovePreliminarySurface[];
    private constructor()
    apply(context: SurfaceRules$Context): SurfaceRules$Condition;
    codec(): MapCodec<SurfaceRules$AbovePreliminarySurface>;
    name(): "INSTANCE";
}