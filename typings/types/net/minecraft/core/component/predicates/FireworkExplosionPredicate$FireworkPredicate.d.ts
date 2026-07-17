import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FireworkExplosion } from '../../../../../net/minecraft/world/item/component/FireworkExplosion.d.ts'
import type { FireworkExplosion$Shape } from '../../../../../net/minecraft/world/item/component/FireworkExplosion$Shape.d.ts'
export class FireworkExplosionPredicate$FireworkPredicate extends Record implements Predicate<FireworkExplosion> {
    static CODEC: Codec<FireworkExplosionPredicate$FireworkPredicate>;
    constructor(shape: Optional<FireworkExplosion$Shape>, twinkle: Optional<boolean>, trail: Optional<boolean>)
    // private shape: Optional<FireworkExplosion$Shape>;
    // private trail: Optional<boolean>;
    // private twinkle: Optional<boolean>;
    and(arg0: (param0: FireworkExplosion) => boolean): (param0: FireworkExplosion) => boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    negate(): (param0: FireworkExplosion) => boolean;
    or(arg0: (param0: FireworkExplosion) => boolean): (param0: FireworkExplosion) => boolean;
    shape(): Optional<FireworkExplosion$Shape>;
    test(fireworkExplosion: FireworkExplosion): boolean;
    toString(): string;
    trail(): Optional<boolean>;
    twinkle(): Optional<boolean>;
}