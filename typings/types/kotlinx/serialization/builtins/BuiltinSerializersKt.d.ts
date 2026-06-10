import type { Object } from '../../../java/lang/Object.d.ts'
import type { BooleanCompanionObject } from '../../../kotlin/jvm/internal/BooleanCompanionObject.d.ts'
import type { ByteCompanionObject } from '../../../kotlin/jvm/internal/ByteCompanionObject.d.ts'
import type { CharCompanionObject } from '../../../kotlin/jvm/internal/CharCompanionObject.d.ts'
import type { DoubleCompanionObject } from '../../../kotlin/jvm/internal/DoubleCompanionObject.d.ts'
import type { FloatCompanionObject } from '../../../kotlin/jvm/internal/FloatCompanionObject.d.ts'
import type { IntCompanionObject } from '../../../kotlin/jvm/internal/IntCompanionObject.d.ts'
import type { LongCompanionObject } from '../../../kotlin/jvm/internal/LongCompanionObject.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
import type { ShortCompanionObject } from '../../../kotlin/jvm/internal/ShortCompanionObject.d.ts'
import type { StringCompanionObject } from '../../../kotlin/jvm/internal/StringCompanionObject.d.ts'
import type { Triple } from '../../../kotlin/Triple.d.ts'
import type { UByte } from '../../../kotlin/UByte.d.ts'
import type { UByte$Companion } from '../../../kotlin/UByte$Companion.d.ts'
import type { UInt } from '../../../kotlin/UInt.d.ts'
import type { UInt$Companion } from '../../../kotlin/UInt$Companion.d.ts'
import type { ULong } from '../../../kotlin/ULong.d.ts'
import type { ULong$Companion } from '../../../kotlin/ULong$Companion.d.ts'
import type { UShort } from '../../../kotlin/UShort.d.ts'
import type { UShort$Companion } from '../../../kotlin/UShort$Companion.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { Duration } from '../../../kotlin/time/Duration.d.ts'
import type { Duration$Companion } from '../../../kotlin/time/Duration$Companion.d.ts'
import type { Instant } from '../../../kotlin/time/Instant.d.ts'
import type { Instant$Companion } from '../../../kotlin/time/Instant$Companion.d.ts'
import type { Uuid } from '../../../kotlin/uuid/Uuid.d.ts'
import type { Uuid$Companion } from '../../../kotlin/uuid/Uuid$Companion.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
export class BuiltinSerializersKt extends Object {
    static ArraySerializer(paramarg0: KClass<Object>, paramarg1: KSerializer<Object>): KSerializer<Object>;
    static ArraySerializer(paramarg0: KSerializer<Object>): KSerializer<Object>;
    static BooleanArraySerializer(): KSerializer<(Object | null)[]>;
    static ByteArraySerializer(): KSerializer<number[]>;
    static CharArraySerializer(): KSerializer<string[]>;
    static DoubleArraySerializer(): KSerializer<number[]>;
    static FloatArraySerializer(): KSerializer<number[]>;
    static IntArraySerializer(): KSerializer<number[]>;
    static ListSerializer(paramarg0: KSerializer<Object>): KSerializer<(Object | null)[]>;
    static LongArraySerializer(): KSerializer<number[]>;
    static MapEntrySerializer(paramarg0: KSerializer<Object>, paramarg1: KSerializer<Object>): KSerializer<Map$Entry<Object, Object>>;
    static MapSerializer(paramarg0: KSerializer<Object>, paramarg1: KSerializer<Object>): KSerializer<Map<Object | null, Object | null>>;
    static NothingSerializer(): KSerializer<Object>;
    static PairSerializer(paramarg0: KSerializer<Object>, paramarg1: KSerializer<Object>): KSerializer<Pair<Object, Object>>;
    static SetSerializer(paramarg0: KSerializer<Object>): KSerializer<(Object | null)[]>;
    static ShortArraySerializer(): KSerializer<number[]>;
    static TripleSerializer(paramarg0: KSerializer<Object>, paramarg1: KSerializer<Object>, paramarg2: KSerializer<Object>): KSerializer<Triple<Object, Object, Object>>;
    static UByteArraySerializer(): KSerializer<(Object | null)[]>;
    static UIntArraySerializer(): KSerializer<(Object | null)[]>;
    static ULongArraySerializer(): KSerializer<(Object | null)[]>;
    static UShortArraySerializer(): KSerializer<(Object | null)[]>;
    static getNullable(paramarg0: KSerializer<Object>): KSerializer<Object>;
    static serializer(paramarg0: BooleanCompanionObject): KSerializer<boolean>;
    static serializer(paramarg0: ByteCompanionObject): KSerializer<number>;
    static serializer(paramarg0: CharCompanionObject): KSerializer<string>;
    static serializer(paramarg0: DoubleCompanionObject): KSerializer<number>;
    static serializer(paramarg0: FloatCompanionObject): KSerializer<number>;
    static serializer(paramarg0: IntCompanionObject): KSerializer<number>;
    static serializer(paramarg0: LongCompanionObject): KSerializer<number>;
    static serializer(paramarg0: ShortCompanionObject): KSerializer<number>;
    static serializer(paramarg0: StringCompanionObject): KSerializer<string>;
    static serializer(paramarg0: UByte$Companion): KSerializer<UByte>;
    static serializer(paramarg0: UInt$Companion): KSerializer<UInt>;
    static serializer(paramarg0: ULong$Companion): KSerializer<ULong>;
    static serializer(paramarg0: UShort$Companion): KSerializer<UShort>;
    static serializer(paramarg0: void): KSerializer<void>;
    static serializer(paramarg0: Duration$Companion): KSerializer<Duration>;
    static serializer(paramarg0: Instant$Companion): KSerializer<Instant>;
    static serializer(paramarg0: Uuid$Companion): KSerializer<Uuid>;
}