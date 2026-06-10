import type { Object } from '../java/lang/Object.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
export class TypedOptions$Companion extends Object {
    of<T extends Object | number | string | boolean>(values: T[], encode: (param0: T) => ByteString): T[];
}