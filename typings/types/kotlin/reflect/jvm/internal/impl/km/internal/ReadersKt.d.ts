import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KmClass } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmClass.d.ts'
import type { KmLambda } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmLambda.d.ts'
import type { KmPackage } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmPackage.d.ts'
import type { KmProperty } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmProperty.d.ts'
import type { ReadContext } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/ReadContext.d.ts'
import type { ProtoBuf$Class } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Class.d.ts'
import type { ProtoBuf$Function } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Function.d.ts'
import type { ProtoBuf$Package } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Package.d.ts'
import type { ProtoBuf$Property } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$Property.d.ts'
import type { NameResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
export class ReadersKt extends Object {
    static getDefaultPropertyAccessorFlags(paramarg0: number): number;
    static getPropertyGetterFlags(paramarg0: ProtoBuf$Property): number;
    static getPropertySetterFlags(paramarg0: ProtoBuf$Property): number;
    static toKmClass(paramarg0: ProtoBuf$Class, paramarg1: NameResolver, paramarg2: boolean, paramarg3: Object[]): KmClass;
    static toKmLambda(paramarg0: ProtoBuf$Function, paramarg1: NameResolver, paramarg2: boolean): KmLambda;
    static toKmPackage(paramarg0: ProtoBuf$Package, paramarg1: NameResolver, paramarg2: boolean, paramarg3: Object[]): KmPackage;
    static toKmProperty(paramarg0: ProtoBuf$Property, paramarg1: ReadContext): KmProperty;
}