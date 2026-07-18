import type { Parameters } from '../../../io/ktor/http/Parameters.d.ts'
import type { ParametersBuilder } from '../../../io/ktor/http/ParametersBuilder.d.ts'
import type { StringValuesBuilderImpl } from '../../../io/ktor/util/StringValuesBuilderImpl.d.ts'
export class ParametersBuilderImpl extends StringValuesBuilderImpl implements ParametersBuilder {
    constructor(size?: number)
    build(): Parameters;
}