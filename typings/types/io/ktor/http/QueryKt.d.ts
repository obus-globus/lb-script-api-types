import type { Parameters } from '../../../io/ktor/http/Parameters.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class QueryKt extends Object {
    static parseQueryString(query: string, startIndex: number, limit: number, decode: boolean): Parameters;
    static withEmptyStringForValuelessKeys(self: Parameters): Parameters;
}