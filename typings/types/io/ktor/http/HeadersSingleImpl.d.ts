import type { Headers } from '../../../io/ktor/http/Headers.d.ts'
import type { Headers$Companion } from '../../../io/ktor/http/Headers$Companion.d.ts'
import type { StringValuesSingleImpl } from '../../../io/ktor/util/StringValuesSingleImpl.d.ts'
export class HeadersSingleImpl extends StringValuesSingleImpl implements Headers {
    static Companion: Headers$Companion;
    constructor(name: string, values: string[])
    toString(): string;
}