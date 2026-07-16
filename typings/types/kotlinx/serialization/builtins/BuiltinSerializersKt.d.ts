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
    static ArraySerializer<E extends T, T extends unknown>(kClass: KClass<T>, elementSerializer: KSerializer<E>): KSerializer<E[]>;
    static ArraySerializer<E extends T>(elementSerializer: KSerializer<E>): KSerializer<E[]>;
    static BooleanArraySerializer(): KSerializer<boolean[]>;
    static ByteArraySerializer(): KSerializer<number[]>;
    static CharArraySerializer(): KSerializer<string[]>;
    static DoubleArraySerializer(): KSerializer<number[]>;
    static FloatArraySerializer(): KSerializer<number[]>;
    static IntArraySerializer(): KSerializer<number[]>;
    static ListSerializer<T extends unknown>(elementSerializer: KSerializer<T>): KSerializer<T[]>;
    static LongArraySerializer(): KSerializer<number[]>;
    static MapEntrySerializer<K extends unknown, V extends unknown>(keySerializer: KSerializer<K>, valueSerializer: KSerializer<V>): KSerializer<Map$Entry<K, V>>;
    static MapSerializer<K extends unknown, V extends unknown>(keySerializer: KSerializer<K>, valueSerializer: KSerializer<V>): KSerializer<Map<K, V>>;
    static NothingSerializer(): KSerializer<void>;
    static PairSerializer<K extends unknown, V extends unknown>(keySerializer: KSerializer<K>, valueSerializer: KSerializer<V>): KSerializer<Pair<K, V>>;
    static SetSerializer<T extends unknown>(elementSerializer: KSerializer<T>): KSerializer<T[]>;
    static ShortArraySerializer(): KSerializer<number[]>;
    static TripleSerializer<A extends unknown, B extends unknown, C extends unknown>(aSerializer: KSerializer<A>, bSerializer: KSerializer<B>, cSerializer: KSerializer<C>): KSerializer<Triple<A, B, C>>;
    static UByteArraySerializer(): KSerializer<(Object | null)[]>;
    static UIntArraySerializer(): KSerializer<(Object | null)[]>;
    static ULongArraySerializer(): KSerializer<(Object | null)[]>;
    static UShortArraySerializer(): KSerializer<(Object | null)[]>;
    static getNullable<T extends unknown>(paramarg0: KSerializer<T>): KSerializer<T>;
    static serializer(self: BooleanCompanionObject): KSerializer<boolean>;
    static serializer(self: ByteCompanionObject): KSerializer<number>;
    static serializer(self: CharCompanionObject): KSerializer<string>;
    static serializer(self: DoubleCompanionObject): KSerializer<number>;
    static serializer(self: FloatCompanionObject): KSerializer<number>;
    static serializer(self: IntCompanionObject): KSerializer<number>;
    static serializer(self: LongCompanionObject): KSerializer<number>;
    static serializer(self: ShortCompanionObject): KSerializer<number>;
    static serializer(self: StringCompanionObject): KSerializer<string>;
    static serializer(self: UByte$Companion): KSerializer<UByte>;
    static serializer(self: UInt$Companion): KSerializer<UInt>;
    static serializer(self: ULong$Companion): KSerializer<ULong>;
    static serializer(self: UShort$Companion): KSerializer<UShort>;
    static serializer(self: void): KSerializer<void>;
    static serializer(self: Duration$Companion): KSerializer<Duration>;
    static serializer(self: Instant$Companion): KSerializer<Instant>;
    static serializer(self: Uuid$Companion): KSerializer<Uuid>;
}