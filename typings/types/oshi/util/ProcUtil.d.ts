import type { JavaMap } from '../../JavaMap.d.ts'
import type { Pattern } from '../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ProcUtil extends Object {
    static parseNestedStatistics(paramarg0: string, ...paramarg1: string[]): JavaMap<string, JavaMap<string, number>>;
    static parseStatistics(paramarg0: string): JavaMap<string, number>;
    static parseStatistics(paramarg0: string, paramarg1: Pattern): JavaMap<string, number>;
    private constructor()
}