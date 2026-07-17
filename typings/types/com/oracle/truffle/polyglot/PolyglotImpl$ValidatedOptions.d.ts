import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotImpl$ValidatedOptions extends Record {
    private constructor(spawnIsolate: boolean, options: JavaMap<string, string>)
    // private options: JavaMap<string, string>;
    // private spawnIsolate: boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    options(): JavaMap<string, string>;
    spawnIsolate(): boolean;
    toString(): string;
}