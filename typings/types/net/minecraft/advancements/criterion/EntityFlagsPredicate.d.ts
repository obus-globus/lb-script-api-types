import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
export class EntityFlagsPredicate extends Record {
    static CODEC: Codec<EntityFlagsPredicate>;
    constructor(isOnGround: Optional<boolean>, isOnFire: Optional<boolean>, isCrouching: Optional<boolean>, isSprinting: Optional<boolean>, isSwimming: Optional<boolean>, isFlying: Optional<boolean>, isBaby: Optional<boolean>, isInWater: Optional<boolean>, isFallFlying: Optional<boolean>)
    // private isBaby: Optional<boolean>;
    // private isCrouching: Optional<boolean>;
    // private isFallFlying: Optional<boolean>;
    // private isFlying: Optional<boolean>;
    // private isInWater: Optional<boolean>;
    // private isOnFire: Optional<boolean>;
    // private isOnGround: Optional<boolean>;
    // private isSprinting: Optional<boolean>;
    // private isSwimming: Optional<boolean>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isBaby(): Optional<boolean>;
    isCrouching(): Optional<boolean>;
    isFallFlying(): Optional<boolean>;
    isFlying(): Optional<boolean>;
    isInWater(): Optional<boolean>;
    isOnFire(): Optional<boolean>;
    isOnGround(): Optional<boolean>;
    isSprinting(): Optional<boolean>;
    isSwimming(): Optional<boolean>;
    matches(entity: Entity): boolean;
    toString(): string;
}