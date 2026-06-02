import type { ImmutableList$Builder } from '../../../../com/google/common/collect/ImmutableList$Builder.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DamageSourcePredicate } from '../../../../net/minecraft/advancements/criterion/DamageSourcePredicate.d.ts'
import type { EntityPredicate } from '../../../../net/minecraft/advancements/criterion/EntityPredicate.d.ts'
import type { EntityPredicate$Builder } from '../../../../net/minecraft/advancements/criterion/EntityPredicate$Builder.d.ts'
import type { TagPredicate } from '../../../../net/minecraft/advancements/criterion/TagPredicate.d.ts'
import type { DamageType } from '../../../../net/minecraft/world/damagesource/DamageType.d.ts'
export class DamageSourcePredicate$Builder extends Object {
    static damageType(): DamageSourcePredicate$Builder;
    constructor()
    // private directEntity: Optional<EntityPredicate>;
    // private isDirect: Optional<boolean>;
    // private sourceEntity: Optional<EntityPredicate>;
    // private tags: ImmutableList$Builder<TagPredicate<DamageType>>;
    build(): DamageSourcePredicate;
    direct(directEntity: EntityPredicate$Builder): DamageSourcePredicate$Builder;
    isDirect(direct: boolean): DamageSourcePredicate$Builder;
    source(sourceEntity: EntityPredicate$Builder): DamageSourcePredicate$Builder;
    tag(tag: TagPredicate<DamageType>): DamageSourcePredicate$Builder;
}