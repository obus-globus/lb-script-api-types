import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Headers } from '../../../io/ktor/http/Headers.d.ts'
import type { Headers$Companion } from '../../../io/ktor/http/Headers$Companion.d.ts'
import type { StringValuesImpl } from '../../../io/ktor/util/StringValuesImpl.d.ts'
export class HeadersImpl extends StringValuesImpl implements Headers {
    static Companion: Headers$Companion;
    constructor(values?: JavaMap<string, string[]>)
    toString(): string;
}