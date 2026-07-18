import type { AsciiString } from '../../../../../io/netty/util/AsciiString.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReadOnlyHttp2Headers {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static clientHeaders(paramarg0: boolean, paramarg1: AsciiString, paramarg2: AsciiString, paramarg3: AsciiString, paramarg4: AsciiString, ...paramarg5: AsciiString[]): (Object | null)[];
    static serverHeaders(paramarg0: boolean, paramarg1: AsciiString, ...paramarg2: AsciiString[]): (Object | null)[];
    static trailers(paramarg0: boolean, ...paramarg1: AsciiString[]): (Object | null)[];
}