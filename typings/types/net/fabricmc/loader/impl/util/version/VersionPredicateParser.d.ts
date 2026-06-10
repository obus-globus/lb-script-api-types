import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { VersionPredicate } from '../../../../../../net/fabricmc/loader/api/metadata/version/VersionPredicate.d.ts'
export class VersionPredicateParser extends Object {
    static getAny(): VersionPredicate;
    static parse(paramarg0: string[]): VersionPredicate[];
    static parse(paramarg0: string): VersionPredicate;
    constructor()
}