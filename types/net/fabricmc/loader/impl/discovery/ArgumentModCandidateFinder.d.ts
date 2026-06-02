import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModCandidateFinder } from '../../../../../net/fabricmc/loader/impl/discovery/ModCandidateFinder.d.ts'
import type { ModCandidateFinder$ModCandidateConsumer } from '../../../../../net/fabricmc/loader/impl/discovery/ModCandidateFinder$ModCandidateConsumer.d.ts'
export class ArgumentModCandidateFinder extends Object implements ModCandidateFinder {
    constructor(arg0: boolean)
    // private requiresRemap: boolean;
    // private addMod(arg0: string, arg1: string, arg2: ModCandidateFinder$ModCandidateConsumer): void;
    // private addMods(arg0: string, arg1: string, arg2: ModCandidateFinder$ModCandidateConsumer): void;
    findCandidates(arg0: ModCandidateFinder$ModCandidateConsumer): void;
}