import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModCandidateFinder } from '../../../../../net/fabricmc/loader/impl/discovery/ModCandidateFinder.d.ts'
import type { ModCandidateFinder$ModCandidateConsumer } from '../../../../../net/fabricmc/loader/impl/discovery/ModCandidateFinder$ModCandidateConsumer.d.ts'
export class ClasspathModCandidateFinder extends Object implements ModCandidateFinder {
    constructor()
    findCandidates(arg0: ModCandidateFinder$ModCandidateConsumer): void;
}