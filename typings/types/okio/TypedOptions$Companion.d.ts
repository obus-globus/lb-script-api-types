import type { Object } from '../java/lang/Object.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
export class TypedOptions$Companion extends Object {
    of(values: T[], encode: (param0: T) => ByteString): T[];
}