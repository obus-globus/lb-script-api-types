import type { JsonElement } from '../../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { TypeAdapter } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapter.d.ts'
import type { TypeAdapterFactory } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapterFactory.d.ts'
import type { LazilyParsedNumber } from '../../../../../../../com/viaversion/viaversion/libs/gson/internal/LazilyParsedNumber.d.ts'
import type { TypeToken } from '../../../../../../../com/viaversion/viaversion/libs/gson/reflect/TypeToken.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { BigDecimal } from '../../../../../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../../../../../java/math/BigInteger.d.ts'
import type { InetAddress } from '../../../../../../../java/net/InetAddress.d.ts'
import type { URI } from '../../../../../../../java/net/URI.d.ts'
import type { URL } from '../../../../../../../java/net/URL.d.ts'
import type { BitSet } from '../../../../../../../java/util/BitSet.d.ts'
import type { Calendar } from '../../../../../../../java/util/Calendar.d.ts'
import type { Currency } from '../../../../../../../java/util/Currency.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { UUID } from '../../../../../../../java/util/UUID.d.ts'
import type { AtomicBoolean } from '../../../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { AtomicInteger } from '../../../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { AtomicIntegerArray } from '../../../../../../../java/util/concurrent/atomic/AtomicIntegerArray.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
export class TypeAdapters extends Object {
    static ATOMIC_BOOLEAN: TypeAdapter<AtomicBoolean>;
    static ATOMIC_BOOLEAN_FACTORY: TypeAdapterFactory;
    static ATOMIC_INTEGER: TypeAdapter<AtomicInteger>;
    static ATOMIC_INTEGER_ARRAY: TypeAdapter<AtomicIntegerArray>;
    static ATOMIC_INTEGER_ARRAY_FACTORY: TypeAdapterFactory;
    static ATOMIC_INTEGER_FACTORY: TypeAdapterFactory;
    static BIG_DECIMAL: TypeAdapter<BigDecimal>;
    static BIG_INTEGER: TypeAdapter<BigInteger>;
    static BIT_SET: TypeAdapter<BitSet>;
    static BIT_SET_FACTORY: TypeAdapterFactory;
    static BOOLEAN: TypeAdapter<boolean>;
    static BOOLEAN_AS_STRING: TypeAdapter<boolean>;
    static BOOLEAN_FACTORY: TypeAdapterFactory;
    static BYTE: TypeAdapter<Number>;
    static BYTE_FACTORY: TypeAdapterFactory;
    static CALENDAR: TypeAdapter<Calendar>;
    static CALENDAR_FACTORY: TypeAdapterFactory;
    static CHARACTER: TypeAdapter<string>;
    static CHARACTER_FACTORY: TypeAdapterFactory;
    static CLASS: TypeAdapter<Class<Object>>;
    static CLASS_FACTORY: TypeAdapterFactory;
    static CURRENCY: TypeAdapter<Currency>;
    static CURRENCY_FACTORY: TypeAdapterFactory;
    static DOUBLE: TypeAdapter<Number>;
    static ENUM_FACTORY: TypeAdapterFactory;
    static FLOAT: TypeAdapter<Number>;
    static INET_ADDRESS: TypeAdapter<InetAddress>;
    static INET_ADDRESS_FACTORY: TypeAdapterFactory;
    static INTEGER: TypeAdapter<Number>;
    static INTEGER_FACTORY: TypeAdapterFactory;
    static JSON_ELEMENT: TypeAdapter<JsonElement>;
    static JSON_ELEMENT_FACTORY: TypeAdapterFactory;
    static LAZILY_PARSED_NUMBER: TypeAdapter<LazilyParsedNumber>;
    static LOCALE: TypeAdapter<Locale>;
    static LOCALE_FACTORY: TypeAdapterFactory;
    static LONG: TypeAdapter<Number>;
    static SHORT: TypeAdapter<Number>;
    static SHORT_FACTORY: TypeAdapterFactory;
    static STRING: TypeAdapter<string>;
    static STRING_BUFFER: TypeAdapter<StringBuffer>;
    static STRING_BUFFER_FACTORY: TypeAdapterFactory;
    static STRING_BUILDER: TypeAdapter<StringBuilder>;
    static STRING_BUILDER_FACTORY: TypeAdapterFactory;
    static STRING_FACTORY: TypeAdapterFactory;
    static URI: TypeAdapter<URI>;
    static URI_FACTORY: TypeAdapterFactory;
    static URL: TypeAdapter<URL>;
    static URL_FACTORY: TypeAdapterFactory;
    static UUID: TypeAdapter<UUID>;
    static UUID_FACTORY: TypeAdapterFactory;
    static newFactory(paramarg0: TypeToken<Object>, paramarg1: TypeAdapter<Object>): TypeAdapterFactory;
    static newFactory(paramarg0: Class<Object>, paramarg1: TypeAdapter<Object>): TypeAdapterFactory;
    static newFactory(paramarg0: Class<Object>, paramarg1: Class<Object>, paramarg2: TypeAdapter<Object>): TypeAdapterFactory;
    static newFactoryForMultipleTypes(paramarg0: Class<Object>, paramarg1: Class<Object>, paramarg2: TypeAdapter<Object>): TypeAdapterFactory;
    static newTypeHierarchyFactory(paramarg0: Class<Object>, paramarg1: TypeAdapter<Object>): TypeAdapterFactory;
    private constructor()
}