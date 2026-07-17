import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotImpl$ValidatedOptions extends Record {
    private constructor(spawnIsolate: boolean, options: { [key: string]: string })
    // private options: { [key: string]: string };
    // private spawnIsolate: boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    options(): { [key: string]: string };
    spawnIsolate(): boolean;
    toString(): string;
}