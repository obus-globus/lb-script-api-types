import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Parameters } from '../../../io/ktor/http/Parameters.d.ts'
import type { Parameters$Companion } from '../../../io/ktor/http/Parameters$Companion.d.ts'
import type { StringValuesImpl } from '../../../io/ktor/util/StringValuesImpl.d.ts'
export class ParametersImpl extends StringValuesImpl implements Parameters {
    static Companion: Parameters$Companion;
    constructor(values?: JavaMap<string, string[]>)
    toString(): string;
}