import type { Object } from '../java/lang/Object.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
export class Headers$Companion extends Object {
    EMPTY: Pair<string, string>[];
    headersOf(...namesAndValues: string[]): Pair<string, string>[];
    of(...namesAndValues: string[]): Pair<string, string>[];
    of(headers: { [key: string]: string }): Pair<string, string>[];
}