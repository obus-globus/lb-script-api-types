import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PackLoadFeedback$FinalResult } from '../../../../../net/minecraft/client/resources/server/PackLoadFeedback$FinalResult.d.ts'
import type { PackLoadFeedback$Update } from '../../../../../net/minecraft/client/resources/server/PackLoadFeedback$Update.d.ts'
export interface PackLoadFeedback extends Object{
    reportFinalResult(id: UUID, result: PackLoadFeedback$FinalResult): void;
    reportUpdate(id: UUID, result: PackLoadFeedback$Update): void;
}