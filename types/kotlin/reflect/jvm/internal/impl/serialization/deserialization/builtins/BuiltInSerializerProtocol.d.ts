import type { FqName } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
import type { SerializerExtensionProtocol } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/SerializerExtensionProtocol.d.ts'
export class BuiltInSerializerProtocol extends SerializerExtensionProtocol {
    static INSTANCE: BuiltInSerializerProtocol;
    private constructor()
    getBuiltInsFileName(arg0: FqName): string;
    getBuiltInsFilePath(arg0: FqName): string;
    // private shortName(arg0: FqName): string;
}