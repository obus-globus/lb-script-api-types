import type { URLWrapper$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { URLWrapper } from '../../../../../net/lenni0451/commons/httpclient/utils/URLWrapper.d.ts'
export class URLWrapper$QueryWrapper extends Object {
    private constructor(null_: URLWrapper)
    constructor(null_: URLWrapper, arg1: URLWrapper$1)
    readonly queries: { [key: string]: string };
    addQueries(arg0: { [key: string]: string }): URLWrapper$QueryWrapper;
    apply(): URLWrapper;
    discard(): URLWrapper;
    getQueries(): { [key: string]: string };
    getQuery(arg0: string): Optional<string>;
    hasQuery(arg0: string): boolean;
    removeQuery(arg0: string): URLWrapper$QueryWrapper;
    setQuery(arg0: string, arg1: string): URLWrapper$QueryWrapper;
}