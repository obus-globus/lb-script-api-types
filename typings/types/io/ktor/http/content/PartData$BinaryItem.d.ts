import type { Headers } from '../../../../io/ktor/http/Headers.d.ts'
import type { PartData } from '../../../../io/ktor/http/content/PartData.d.ts'
import type { Source } from '../../../../kotlinx/io/Source.d.ts'
export class PartData$BinaryItem extends PartData {
    constructor(provider: () => Source, dispose: () => void, partHeaders: Headers, release: () => void)
    readonly provider: () => Source;
}