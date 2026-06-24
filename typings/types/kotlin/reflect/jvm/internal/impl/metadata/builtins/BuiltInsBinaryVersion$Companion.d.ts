import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { BuiltInsBinaryVersion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/builtins/BuiltInsBinaryVersion.d.ts'
export class BuiltInsBinaryVersion$Companion extends Object {
    private constructor()
    constructor(arg0: DefaultConstructorMarker)
    readFrom(arg0: InputStream): BuiltInsBinaryVersion;
}