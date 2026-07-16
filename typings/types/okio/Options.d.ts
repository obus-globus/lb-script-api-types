import type { Object } from '../java/lang/Object.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
import type { Options$Companion } from '../okio/Options$Companion.d.ts'
export class Options {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static Companion: Options$Companion;
    static of(...byteStrings: ByteString[]): (Object | null)[];
}