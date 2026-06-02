import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LightPredicate } from '../../../../net/minecraft/advancements/criterion/LightPredicate.d.ts'
import type { MinMaxBounds$Ints } from '../../../../net/minecraft/advancements/criterion/MinMaxBounds$Ints.d.ts'
export class LightPredicate$Builder extends Object {
    static light(): LightPredicate$Builder;
    constructor()
    // private composite: MinMaxBounds$Ints;
    build(): LightPredicate;
    setComposite(composite: MinMaxBounds$Ints): LightPredicate$Builder;
}