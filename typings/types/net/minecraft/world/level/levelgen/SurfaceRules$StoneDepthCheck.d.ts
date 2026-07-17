import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SurfaceRules$Condition } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Condition.d.ts'
import type { SurfaceRules$ConditionSource } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$ConditionSource.d.ts'
import type { SurfaceRules$Context } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Context.d.ts'
import type { CaveSurface } from '../../../../../net/minecraft/world/level/levelgen/placement/CaveSurface.d.ts'
export class SurfaceRules$StoneDepthCheck extends Record implements SurfaceRules$ConditionSource {
    static CODEC: Codec<SurfaceRules$ConditionSource>;
    private constructor(offset: number, addSurfaceDepth: boolean, secondaryDepthRange: number, surfaceType: CaveSurface)
    // private addSurfaceDepth: boolean;
    // private offset: number;
    // private secondaryDepthRange: number;
    // private surfaceType: CaveSurface;
    addSurfaceDepth(): boolean;
    apply(ruleContext: SurfaceRules$Context): SurfaceRules$Condition;
    codec(): MapCodec<SurfaceRules$StoneDepthCheck>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    offset(): number;
    secondaryDepthRange(): number;
    surfaceType(): CaveSurface;
    toString(): string;
}