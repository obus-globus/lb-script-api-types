import type { JavaMap } from '../JavaMap.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
export class Headers$Companion extends Object {
    EMPTY: Pair<string, string>[];
    headersOf(...namesAndValues: string[]): Pair<string, string>[];
    of(...namesAndValues: string[]): Pair<string, string>[];
    of(headers: JavaMap<string, string>): Pair<string, string>[];
}