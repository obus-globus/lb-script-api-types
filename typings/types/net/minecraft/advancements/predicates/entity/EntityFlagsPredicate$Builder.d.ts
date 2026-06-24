import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntityFlagsPredicate } from '../../../../../net/minecraft/advancements/predicates/entity/EntityFlagsPredicate.d.ts'
export class EntityFlagsPredicate$Builder extends Object {
    static flags(): EntityFlagsPredicate$Builder;
    constructor()
    // private isBaby: Optional<boolean>;
    // private isCrouching: Optional<boolean>;
    // private isFallFlying: Optional<boolean>;
    // private isFlying: Optional<boolean>;
    // private isInWater: Optional<boolean>;
    // private isOnFire: Optional<boolean>;
    // private isOnGround: Optional<boolean>;
    // private isSprinting: Optional<boolean>;
    // private isSwimming: Optional<boolean>;
    build(): EntityFlagsPredicate;
    setCrouching(crouching: boolean): EntityFlagsPredicate$Builder;
    setIsBaby(baby: boolean): EntityFlagsPredicate$Builder;
    setIsFallFlying(fallFlying: boolean): EntityFlagsPredicate$Builder;
    setIsFlying(flying: boolean): EntityFlagsPredicate$Builder;
    setIsInWater(inWater: boolean): EntityFlagsPredicate$Builder;
    setOnFire(onFire: boolean): EntityFlagsPredicate$Builder;
    setOnGround(onGround: boolean): EntityFlagsPredicate$Builder;
    setSprinting(sprinting: boolean): EntityFlagsPredicate$Builder;
    setSwimming(swimming: boolean): EntityFlagsPredicate$Builder;
}