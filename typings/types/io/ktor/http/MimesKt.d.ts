import type { ContentType } from '../../../io/ktor/http/ContentType.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
export class MimesKt extends Object {
    static INITIAL_MIMES_LIST_SIZE: number;
    static getMimes(): Pair<string, ContentType>[];
    static loadMimes(): Pair<string, ContentType>[];
}