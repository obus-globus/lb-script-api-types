import type { Parameters } from '../../../io/ktor/http/Parameters.d.ts'
import type { Parameters$Companion } from '../../../io/ktor/http/Parameters$Companion.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export class EmptyParameters extends Object implements Parameters {
    static Companion: Parameters$Companion;
    static INSTANCE: EmptyParameters;
    readonly caseInsensitiveName: boolean;
    entries(): Map$Entry<string, string[]>[];
    equals(other: Object | null): boolean;
    getAll(name: string): string[] | null;
    isEmpty(): boolean;
    names(): string[];
    toString(): string;
}