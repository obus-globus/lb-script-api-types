import type { Object } from '../../java/lang/Object.d.ts'
import type { TraceFormat } from '../../kotlinx/atomicfu/TraceFormat.d.ts'
export class TraceFormatThread extends TraceFormat {
    constructor()
    format(index: number, event: Object): string;
}