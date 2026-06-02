import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export interface HttpHeadersFactory extends Object{
    newEmptyHeaders(): Map$Entry<string, string>[];
    newHeaders(): Map$Entry<string, string>[];
}