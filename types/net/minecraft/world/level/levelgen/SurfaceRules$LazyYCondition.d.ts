import type { SurfaceRules$Context } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$Context.d.ts'
import type { SurfaceRules$LazyCondition } from '../../../../../net/minecraft/world/level/levelgen/SurfaceRules$LazyCondition.d.ts'
export abstract class SurfaceRules$LazyYCondition extends SurfaceRules$LazyCondition {
    constructor(context: SurfaceRules$Context)
    getContextLastUpdate(): number;
}