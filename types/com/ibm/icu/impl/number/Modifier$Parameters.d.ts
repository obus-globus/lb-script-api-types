import type { StandardPlural } from '../../../../../com/ibm/icu/impl/StandardPlural.d.ts'
import type { Modifier$Signum } from '../../../../../com/ibm/icu/impl/number/Modifier$Signum.d.ts'
import type { ModifierStore } from '../../../../../com/ibm/icu/impl/number/ModifierStore.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Modifier$Parameters extends Object {
    constructor()
    obj: ModifierStore;
    plural: StandardPlural;
    signum: Modifier$Signum;
}