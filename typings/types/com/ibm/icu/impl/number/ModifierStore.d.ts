import type { StandardPlural } from '../../../../../com/ibm/icu/impl/StandardPlural.d.ts'
import type { Modifier } from '../../../../../com/ibm/icu/impl/number/Modifier.d.ts'
import type { Modifier$Signum } from '../../../../../com/ibm/icu/impl/number/Modifier$Signum.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ModifierStore extends Object{
    getModifier(arg0: Modifier$Signum, arg1: StandardPlural): Modifier;
}