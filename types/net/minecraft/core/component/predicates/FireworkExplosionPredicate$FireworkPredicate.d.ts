import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FireworkExplosion } from '../../../../../net/minecraft/world/item/component/FireworkExplosion.d.ts'
import type { FireworkExplosion$Shape } from '../../../../../net/minecraft/world/item/component/FireworkExplosion$Shape.d.ts'
export class FireworkExplosionPredicate$FireworkPredicate extends Record implements Predicate<FireworkExplosion> {
    static CODEC: Codec<FireworkExplosionPredicate$FireworkPredicate>;
    static isEqual(paramarg0: Object): (param0: Object | null) => kotlin.Boolean;
    static not(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    constructor(shape: Optional<FireworkExplosion$Shape>, twinkle: Optional<boolean>, trail: Optional<boolean>)
    // private shape: Optional<FireworkExplosion$Shape>;
    // private trail: Optional<boolean>;
    // private twinkle: Optional<boolean>;
    and(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    negate(): (param0: T) => kotlin.Boolean;
    or(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    shape(): Optional<FireworkExplosion$Shape>;
    test(fireworkExplosion: FireworkExplosion): boolean;
    toString(): string;
    trail(): Optional<boolean>;
    twinkle(): Optional<boolean>;
}