import type { Headers } from '../../../io/ktor/http/Headers.d.ts'
import type { Headers$Companion } from '../../../io/ktor/http/Headers$Companion.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export class EmptyHeaders extends Object implements Headers {
    static Companion: Headers$Companion;
    static INSTANCE: EmptyHeaders;
    readonly caseInsensitiveName: boolean;
    entries(): Map$Entry<string, string[]>[];
    getAll(name: string): string[] | null;
    isEmpty(): boolean;
    names(): string[];
    toString(): string;
}