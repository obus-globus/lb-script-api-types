import type { Parameters } from '../../../io/ktor/http/Parameters.d.ts'
import type { ParametersBuilder } from '../../../io/ktor/http/ParametersBuilder.d.ts'
import type { StringValues } from '../../../io/ktor/util/StringValues.d.ts'
import type { StringValuesBuilder } from '../../../io/ktor/util/StringValuesBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class UrlDecodedParametersBuilderKt extends Object {
    static decodeParameters(parameters: StringValuesBuilder): Parameters;
    static encodeParameters(parameters: StringValues): ParametersBuilder;
}