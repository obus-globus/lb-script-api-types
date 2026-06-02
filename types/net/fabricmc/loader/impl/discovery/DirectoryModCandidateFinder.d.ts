import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModCandidateFinder } from '../../../../../net/fabricmc/loader/impl/discovery/ModCandidateFinder.d.ts'
import type { ModCandidateFinder$ModCandidateConsumer } from '../../../../../net/fabricmc/loader/impl/discovery/ModCandidateFinder$ModCandidateConsumer.d.ts'
export class DirectoryModCandidateFinder extends Object implements ModCandidateFinder {
    constructor(arg0: Path[], arg1: boolean)
    // private path: Path[];
    // private requiresRemap: boolean;
    findCandidates(arg0: ModCandidateFinder$ModCandidateConsumer): void;
}