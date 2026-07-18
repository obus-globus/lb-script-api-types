import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Parameters } from '../../../io/ktor/http/Parameters.d.ts'
import type { ParametersBuilder } from '../../../io/ktor/http/ParametersBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
export class ParametersKt extends Object {
    static ParametersBuilder(size: number): ParametersBuilder;
    static parameters(builder: (param0: ParametersBuilder) => void): Parameters;
    static parametersOf(): Parameters;
    static parametersOf(name: string, value: string): Parameters;
    static parametersOf(name: string, values: string[]): Parameters;
    static parametersOf(map: JavaMap<string, string[]>): Parameters;
    static parametersOf(...pairs: Pair<string, string[]>[]): Parameters;
    static plus(self: Parameters, other: Parameters): Parameters;
}