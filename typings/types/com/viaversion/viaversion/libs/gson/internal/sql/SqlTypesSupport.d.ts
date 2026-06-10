import type { TypeAdapterFactory } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapterFactory.d.ts'
import type { DefaultDateTypeAdapter$DateType } from '../../../../../../../com/viaversion/viaversion/libs/gson/internal/bind/DefaultDateTypeAdapter$DateType.d.ts'
import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class SqlTypesSupport extends Object {
    static DATE_DATE_TYPE: DefaultDateTypeAdapter$DateType<Date>;
    static DATE_FACTORY: TypeAdapterFactory;
    static SUPPORTS_SQL_TYPES: boolean;
    static TIMESTAMP_DATE_TYPE: DefaultDateTypeAdapter$DateType<Date>;
    static TIMESTAMP_FACTORY: TypeAdapterFactory;
    static TIME_FACTORY: TypeAdapterFactory;
    private constructor()
}