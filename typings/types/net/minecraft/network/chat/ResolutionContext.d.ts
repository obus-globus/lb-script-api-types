import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { ResolutionContext$Builder } from '../../../../net/minecraft/network/chat/ResolutionContext$Builder.d.ts'
import type { ResolutionContext$LimitBehavior } from '../../../../net/minecraft/network/chat/ResolutionContext$LimitBehavior.d.ts'
import type { ObjectInfo } from '../../../../net/minecraft/network/chat/contents/objects/ObjectInfo.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
export class ResolutionContext extends Record {
    static builder(): ResolutionContext$Builder;
    static create(paramsource: CommandSourceStack): ResolutionContext;
    constructor(source: CommandSourceStack, defaultScoreboardEntity: Entity, objectInfoValidator: (param0: ObjectInfo) => boolean, depthLimit: number, depthLimitBehavior: ResolutionContext$LimitBehavior)
    // private defaultScoreboardEntity: Entity;
    // private depthLimit: number;
    // private depthLimitBehavior: ResolutionContext$LimitBehavior;
    // private objectInfoValidator: (param0: ObjectInfo) => boolean;
    // private source: CommandSourceStack;
    defaultScoreboardEntity(): Entity;
    depthLimit(): number;
    depthLimitBehavior(): ResolutionContext$LimitBehavior;
    equals(o: Object | null): boolean;
    hashCode(): number;
    objectInfoValidator(): (param0: ObjectInfo) => boolean;
    source(): CommandSourceStack;
    toString(): string;
    validate(description: ObjectInfo): ObjectInfo;
}