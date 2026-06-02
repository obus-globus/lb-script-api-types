import type { Object } from '../java/lang/Object.d.ts'
import type { Function1 } from '../kotlin/jvm/functions/Function1.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
export class TypedOptions$Companion extends Object {
    of(values: T[], encode: Function1<T, ByteString>): T[];
}