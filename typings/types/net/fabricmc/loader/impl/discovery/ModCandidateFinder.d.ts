import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModCandidateFinder$ModCandidateConsumer } from '../../../../../net/fabricmc/loader/impl/discovery/ModCandidateFinder$ModCandidateConsumer.d.ts'
export interface ModCandidateFinder extends Object{
    findCandidates(arg0: ModCandidateFinder$ModCandidateConsumer): void;
}