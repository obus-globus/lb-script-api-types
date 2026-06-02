import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModCandidateImpl } from '../../../../../net/fabricmc/loader/impl/discovery/ModCandidateImpl.d.ts'
import type { ModSolver$AddModVar } from '../../../../../net/fabricmc/loader/impl/discovery/ModSolver$AddModVar.d.ts'
import type { ModSolver$InactiveReason } from '../../../../../net/fabricmc/loader/impl/discovery/ModSolver$InactiveReason.d.ts'
export class ModSolver$Fix extends Object {
    constructor(arg0: E[], arg1: E[], arg2: Map<ModSolver$AddModVar, ModCandidateImpl[]>, arg3: { [key: string]: ModCandidateImpl }, arg4: Map<ModCandidateImpl, ModSolver$InactiveReason>)
    // private activeMods: { [key: string]: ModCandidateImpl };
    // private inactiveMods: Map<ModCandidateImpl, ModSolver$InactiveReason>;
    // private modReplacements: Map<ModSolver$AddModVar, ModCandidateImpl[]>;
    // private modsToAdd: E[];
    // private modsToRemove: E[];
}