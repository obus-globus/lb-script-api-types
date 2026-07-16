import type { Object } from '../java/lang/Object.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
import type { TypedOptions$Companion } from '../okio/TypedOptions$Companion.d.ts'
export class TypedOptions<T extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static Companion: TypedOptions$Companion;
    static of<T extends unknown>(values: T[], encode: (param0: T) => ByteString): T[];
}