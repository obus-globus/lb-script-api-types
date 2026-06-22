import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { JavaClass } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClass.d.ts'
import type { KotlinClassFinder$Result } from '../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinClassFinder$Result.d.ts'
import type { MetadataVersion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/MetadataVersion.d.ts'
import type { ClassId } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { KotlinMetadataFinder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/KotlinMetadataFinder.d.ts'
export interface KotlinClassFinder extends Object, KotlinMetadataFinder{
    findBuiltInsData(arg0: FqName): InputStream;
    findKotlinClassOrContent(arg0: JavaClass, arg1: MetadataVersion): KotlinClassFinder$Result;
    findKotlinClassOrContent(arg0: ClassId, arg1: MetadataVersion): KotlinClassFinder$Result;
}