import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PagingFile$PagingPercentProperty } from '../../../../oshi/driver/windows/perfmon/PagingFile$PagingPercentProperty.d.ts'
export class PagingFile extends Object {
    static querySwapUsed(): { [key in PagingFile$PagingPercentProperty]: number };
    private constructor()
}