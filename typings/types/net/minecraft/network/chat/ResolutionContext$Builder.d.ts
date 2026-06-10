import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { ResolutionContext } from '../../../../net/minecraft/network/chat/ResolutionContext.d.ts'
import type { ResolutionContext$LimitBehavior } from '../../../../net/minecraft/network/chat/ResolutionContext$LimitBehavior.d.ts'
import type { ObjectInfo } from '../../../../net/minecraft/network/chat/contents/objects/ObjectInfo.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
export class ResolutionContext$Builder extends Object {
    constructor()
    // private defaultScoreboardEntity: Entity;
    // private depthLimit: number;
    // private depthLimitBehavior: ResolutionContext$LimitBehavior;
    // private objectInfoValidator: (param0: ObjectInfo) => boolean;
    // private source: CommandSourceStack;
    build(): ResolutionContext;
    setDepthLimit(depthLimit: number): ResolutionContext$Builder;
    setDepthLimitBehavior(behavior: ResolutionContext$LimitBehavior): ResolutionContext$Builder;
    withEntityOverride(defaultScoreboardEntity: Entity): ResolutionContext$Builder;
    withObjectInfoValidator(objectInfoValidator: (param0: ObjectInfo) => boolean): ResolutionContext$Builder;
    withSource(source: CommandSourceStack): ResolutionContext$Builder;
}