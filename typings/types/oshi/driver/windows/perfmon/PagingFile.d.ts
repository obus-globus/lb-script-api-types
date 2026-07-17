import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PagingFile$PagingPercentProperty } from '../../../../oshi/driver/windows/perfmon/PagingFile$PagingPercentProperty.d.ts'
export class PagingFile extends Object {
    static querySwapUsed(): JavaMap<PagingFile$PagingPercentProperty, number>;
    private constructor()
}