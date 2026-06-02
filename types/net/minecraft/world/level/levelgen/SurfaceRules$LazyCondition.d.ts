import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SurfaceRules$Condition } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Condition.d.ts'
import type { SurfaceRules$Context } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Context.d.ts'
export abstract class SurfaceRules$LazyCondition extends Object implements SurfaceRules$Condition {
    constructor(context: SurfaceRules$Context)
    // private context: SurfaceRules$Context;
    // private lastUpdate: number;
    // private result: boolean;
    compute(): boolean;
    getContextLastUpdate(): number;
    test(): boolean;
}