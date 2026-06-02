import type { InputStream } from '../../../../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../../../kotlin/Pair.d.ts'
import type { ProtoBuf$Class } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Class.d.ts'
import type { ProtoBuf$Constructor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Constructor.d.ts'
import type { ProtoBuf$Function } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Function.d.ts'
import type { ProtoBuf$Package } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Package.d.ts'
import type { ProtoBuf$Property } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Property.d.ts'
import type { ProtoBuf$Type } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Type.d.ts'
import type { NameResolver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
import type { TypeTable } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/TypeTable.d.ts'
import type { JvmMemberSignature$Field } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/deserialization/JvmMemberSignature$Field.d.ts'
import type { JvmMemberSignature$Method } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/deserialization/JvmMemberSignature$Method.d.ts'
import type { JvmNameResolver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/deserialization/JvmNameResolver.d.ts'
import type { ExtensionRegistryLite } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/ExtensionRegistryLite.d.ts'
export class JvmProtoBufUtil extends Object {
    static INSTANCE: JvmProtoBufUtil;
    static isMovedFromInterfaceCompanion(paramarg0: ProtoBuf$Property): boolean;
    static readClassDataFrom(paramarg0: number[], paramarg1: (Object | null)[]): Pair<JvmNameResolver, ProtoBuf$Class>;
    static readClassDataFrom(paramarg0: (Object | null)[], paramarg1: (Object | null)[]): Pair<JvmNameResolver, ProtoBuf$Class>;
    static readFunctionDataFrom(paramarg0: (Object | null)[], paramarg1: (Object | null)[]): Pair<JvmNameResolver, ProtoBuf$Function>;
    static readPackageDataFrom(paramarg0: number[], paramarg1: (Object | null)[]): Pair<JvmNameResolver, ProtoBuf$Package>;
    static readPackageDataFrom(paramarg0: (Object | null)[], paramarg1: (Object | null)[]): Pair<JvmNameResolver, ProtoBuf$Package>;
    private constructor()
    getEXTENSION_REGISTRY(): ExtensionRegistryLite;
    getJvmConstructorSignature(arg0: ProtoBuf$Constructor, arg1: NameResolver, arg2: TypeTable): JvmMemberSignature$Method;
    getJvmFieldSignature(arg0: ProtoBuf$Property, arg1: NameResolver, arg2: TypeTable, arg3: boolean): JvmMemberSignature$Field;
    getJvmMethodSignature(arg0: ProtoBuf$Function, arg1: NameResolver, arg2: TypeTable): JvmMemberSignature$Method;
    // private mapTypeDefault(arg0: ProtoBuf$Type, arg1: NameResolver): string;
    // private readNameResolver(arg0: InputStream, arg1: string[]): JvmNameResolver;
}