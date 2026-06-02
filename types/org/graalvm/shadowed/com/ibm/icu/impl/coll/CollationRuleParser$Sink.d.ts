import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../../java/lang/CharSequence.d.ts'
export abstract class CollationRuleParser$Sink extends Object {
    constructor()
    addRelation(strength: number, prefix: CharSequence, str: CharSequence, extension: CharSequence): void;
    addReset(strength: number, str: CharSequence): void;
    optimize(set: string[]): void;
    suppressContractions(set: string[]): void;
}