import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { StandardPlural } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StandardPlural.d.ts'
import type { Modifier } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Modifier.d.ts'
import type { Modifier$Signum } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Modifier$Signum.d.ts'
import type { ModifierStore } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/ModifierStore.d.ts'
export class AdoptingModifierStore extends Object implements ModifierStore {
    constructor()
    constructor(positive: Modifier, posZero: Modifier, negZero: Modifier, negative: Modifier)
    // private frozen: boolean;
    // private mods: Modifier[];
    // private negZero: Modifier;
    // private negative: Modifier;
    // private posZero: Modifier;
    // private positive: Modifier;
    freeze(): void;
    getModifier(signum: Modifier$Signum, plural: StandardPlural): Modifier;
    getModifierWithoutPlural(signum: Modifier$Signum): Modifier;
    setModifier(signum: Modifier$Signum, plural: StandardPlural, mod: Modifier): void;
}