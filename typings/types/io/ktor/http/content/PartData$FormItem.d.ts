import type { Headers } from '../../../../io/ktor/http/Headers.d.ts'
import type { PartData } from '../../../../io/ktor/http/content/PartData.d.ts'
export class PartData$FormItem extends PartData {
    constructor(value: string, dispose: () => void, partHeaders: Headers, release: () => void)
    readonly value: string;
}