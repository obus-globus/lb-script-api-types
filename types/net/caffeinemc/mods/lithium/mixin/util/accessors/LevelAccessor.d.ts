import type { Thread } from '../../../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface LevelAccessor extends Object{
    getThread(): Thread;
}