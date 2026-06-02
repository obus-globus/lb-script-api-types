import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SurfaceRules$RuleSource } from '../../../../net/minecraft/world/level/levelgen/SurfaceRules$RuleSource.d.ts'
export class SurfaceRuleData extends Object {
    static air(): SurfaceRules$RuleSource;
    static end(): SurfaceRules$RuleSource;
    static nether(): SurfaceRules$RuleSource;
    static overworld(): SurfaceRules$RuleSource;
    static overworldLike(paramdoPreliminarySurfaceCheck: boolean, parambedrockRoof: boolean, parambedrockFloor: boolean): SurfaceRules$RuleSource;
    constructor()
}