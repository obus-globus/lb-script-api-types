import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModCandidateImpl } from '../../../../../net/fabricmc/loader/impl/discovery/ModCandidateImpl.d.ts'
import type { ModSolver$AddModVar } from '../../../../../net/fabricmc/loader/impl/discovery/ModSolver$AddModVar.d.ts'
import type { ModSolver$InactiveReason } from '../../../../../net/fabricmc/loader/impl/discovery/ModSolver$InactiveReason.d.ts'
export class ModSolver$Fix extends Object {
    constructor(arg0: ModSolver$AddModVar[], arg1: ModCandidateImpl[], arg2: JavaMap<ModSolver$AddModVar, ModCandidateImpl[]>, arg3: JavaMap<string, ModCandidateImpl>, arg4: JavaMap<ModCandidateImpl, ModSolver$InactiveReason>)
    // private activeMods: JavaMap<string, ModCandidateImpl>;
    // private inactiveMods: JavaMap<ModCandidateImpl, ModSolver$InactiveReason>;
    // private modReplacements: JavaMap<ModSolver$AddModVar, ModCandidateImpl[]>;
    // private modsToAdd: ModSolver$AddModVar[];
    // private modsToRemove: ModCandidateImpl[];
}