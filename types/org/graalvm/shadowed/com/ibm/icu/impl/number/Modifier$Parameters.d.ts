import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { StandardPlural } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/StandardPlural.d.ts'
import type { Modifier$Signum } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/Modifier$Signum.d.ts'
import type { ModifierStore } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/ModifierStore.d.ts'
export class Modifier$Parameters extends Object {
    constructor()
    obj: ModifierStore;
    plural: StandardPlural;
    signum: Modifier$Signum;
}