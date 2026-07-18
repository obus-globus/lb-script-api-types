import type { CIOHeaders } from '../../../../io/ktor/http/cio/CIOHeaders.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class CIOHeaders$Entry extends Object implements Map$Entry<string, string[]> {
    constructor(null_: CIOHeaders, offset: number)
    readonly key: string;
    // private offset: number;
    readonly value: string[];
}