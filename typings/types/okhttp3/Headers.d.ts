import type { JavaMap } from '../JavaMap.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
import type { Headers$Companion } from '../okhttp3/Headers$Companion.d.ts'
export class Headers {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static Companion: Headers$Companion;
    static EMPTY: Pair<string, string>[];
    static of(...namesAndValues: string[]): Pair<string, string>[];
    static of(self: JavaMap<string, string>): Pair<string, string>[];
}