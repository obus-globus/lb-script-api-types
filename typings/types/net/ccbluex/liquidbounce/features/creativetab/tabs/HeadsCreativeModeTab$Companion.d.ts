import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RetryingJob } from '../../../../../../net/ccbluex/liquidbounce/api/core/RetryingJob.d.ts'
import type { Head } from '../../../../../../net/ccbluex/liquidbounce/features/creativetab/tabs/Head.d.ts'
export class HeadsCreativeModeTab$Companion extends Object {
    HEAD_DB_API: string;
    readonly heads: RetryingJob<Head[]>;
}