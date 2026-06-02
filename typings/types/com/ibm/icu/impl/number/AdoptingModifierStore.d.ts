import type { StandardPlural } from '../../../../../com/ibm/icu/impl/StandardPlural.d.ts'
import type { Modifier } from '../../../../../com/ibm/icu/impl/number/Modifier.d.ts'
import type { Modifier$Signum } from '../../../../../com/ibm/icu/impl/number/Modifier$Signum.d.ts'
import type { ModifierStore } from '../../../../../com/ibm/icu/impl/number/ModifierStore.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AdoptingModifierStore extends Object implements ModifierStore {
    constructor()
    constructor(arg0: Modifier, arg1: Modifier, arg2: Modifier, arg3: Modifier)
    // private frozen: boolean;
    // private mods: Modifier[];
    // private negZero: Modifier;
    // private negative: Modifier;
    // private posZero: Modifier;
    // private positive: Modifier;
    freeze(): void;
    getModifier(arg0: Modifier$Signum, arg1: StandardPlural): Modifier;
    getModifierWithoutPlural(arg0: Modifier$Signum): Modifier;
    setModifier(arg0: Modifier$Signum, arg1: StandardPlural, arg2: Modifier): void;
}