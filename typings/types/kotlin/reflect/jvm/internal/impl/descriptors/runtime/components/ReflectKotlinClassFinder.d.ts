import type { InputStream } from '../../../../../../../../java/io/InputStream.d.ts'
import type { ClassLoader } from '../../../../../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { JavaClass } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/java/structure/JavaClass.d.ts'
import type { KotlinClassFinder } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinClassFinder.d.ts'
import type { KotlinClassFinder$Result } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/KotlinClassFinder$Result.d.ts'
import type { MetadataVersion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/MetadataVersion.d.ts'
import type { ClassId } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/ClassId.d.ts'
import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { BuiltInsResourceLoader } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/builtins/BuiltInsResourceLoader.d.ts'
export class ReflectKotlinClassFinder extends Object implements KotlinClassFinder {
    constructor(arg0: ClassLoader)
    // private builtInsResourceLoader: BuiltInsResourceLoader;
    // private classLoader: ClassLoader;
    findBuiltInsData(arg0: FqName): InputStream;
    // private findKotlinClass(arg0: string): KotlinClassFinder$Result;
    findKotlinClassOrContent(arg0: JavaClass, arg1: MetadataVersion): KotlinClassFinder$Result;
    findKotlinClassOrContent(arg0: ClassId, arg1: MetadataVersion): KotlinClassFinder$Result;
}