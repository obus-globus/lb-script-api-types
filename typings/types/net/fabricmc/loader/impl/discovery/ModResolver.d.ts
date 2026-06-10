import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EnvType } from '../../../../../net/fabricmc/api/EnvType.d.ts'
import type { ModCandidateImpl } from '../../../../../net/fabricmc/loader/impl/discovery/ModCandidateImpl.d.ts'
export class ModResolver extends Object {
    static resolve(paramarg0: ModCandidateImpl[], paramarg1: EnvType, paramarg2: { [key: string]: ModCandidateImpl[] }): ModCandidateImpl[];
    constructor()
}