import type { StringUnhasher$Config } from '../../../../../com/seedfinding/mccore/util/data/StringUnhasher$Config.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StringUnhasher extends Object {
    static newConfig(): StringUnhasher$Config;
    static unhash(paramarg0: number, paramarg1: StringUnhasher$Config, paramarg2: (param0: string) => kotlin.Boolean): void;
    constructor()
}