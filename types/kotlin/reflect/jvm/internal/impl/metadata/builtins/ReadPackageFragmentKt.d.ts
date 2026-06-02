import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../../kotlin/Pair.d.ts'
import type { ProtoBuf$PackageFragment } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$PackageFragment.d.ts'
import type { BuiltInsBinaryVersion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/builtins/BuiltInsBinaryVersion.d.ts'
export class ReadPackageFragmentKt extends Object {
    static readBuiltinsPackageFragment(paramarg0: InputStream): Pair<ProtoBuf$PackageFragment, BuiltInsBinaryVersion>;
}