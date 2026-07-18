import type { Parameters } from '../../../io/ktor/http/Parameters.d.ts'
import type { Parameters$Companion } from '../../../io/ktor/http/Parameters$Companion.d.ts'
import type { StringValuesSingleImpl } from '../../../io/ktor/util/StringValuesSingleImpl.d.ts'
export class ParametersSingleImpl extends StringValuesSingleImpl implements Parameters {
    static Companion: Parameters$Companion;
    constructor(name: string, values: string[])
    toString(): string;
}