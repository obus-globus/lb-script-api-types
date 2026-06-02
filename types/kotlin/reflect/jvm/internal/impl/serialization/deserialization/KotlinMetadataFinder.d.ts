import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export interface KotlinMetadataFinder extends Object{
    findBuiltInsData(arg0: FqName): InputStream;
}