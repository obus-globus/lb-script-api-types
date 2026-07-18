import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Source } from '../../../kotlinx/io/Source.d.ts'
export class InputJvmKt extends Object {
    static asStream(self: Source): InputStream;
}