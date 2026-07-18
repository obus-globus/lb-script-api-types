import type { Parameters } from '../../../io/ktor/http/Parameters.d.ts'
import type { ParametersBuilder } from '../../../io/ktor/http/ParametersBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Parameters$Companion extends Object {
    // private Empty: Parameters;
    /*not mapped: */ getEmpty(): Parameters;
    build(builder: (param0: ParametersBuilder) => void): Parameters;
}