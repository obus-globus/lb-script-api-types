import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Type } from '../../../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TypeConverter } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/convert/TypeConverter.d.ts'
import type { PluginType } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/util/PluginType.d.ts'
export class TypeConverterRegistry extends Object {
    static getInstance(): TypeConverterRegistry;
    private constructor()
    // private registry: JavaMap<Type, TypeConverter<Object>>;
    findCompatibleConverter(type: Type): TypeConverter<Object>;
    // private loadKnownTypeConverters(knownTypes: PluginType<Object>[]): void;
    // private registerConverter(conversionType: Type, converter: TypeConverter<Object>): TypeConverter<Object>;
    // private registerPrimitiveTypes(): void;
    // private registerTypeAlias(knownType: Type, aliasType: Type): void;
}