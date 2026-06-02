import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export abstract class CollationRuleParser$Sink extends Object {
    constructor()
    addRelation(arg0: number, arg1: CharSequence, arg2: CharSequence, arg3: CharSequence): void;
    addReset(arg0: number, arg1: CharSequence): void;
    optimize(arg0: string[]): void;
    suppressContractions(arg0: string[]): void;
}