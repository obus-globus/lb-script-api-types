import type { Pattern } from '../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ProcUtil extends Object {
    static parseNestedStatistics(paramarg0: string, paramarg1: (Object | null)[]): { [key: string]: { [key: string]: number } };
    static parseStatistics(paramarg0: string): { [key: string]: number };
    static parseStatistics(paramarg0: string, paramarg1: Pattern): { [key: string]: number };
    private constructor()
}