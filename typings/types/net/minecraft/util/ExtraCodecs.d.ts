import type { JsonElement } from '../../../com/google/gson/JsonElement.d.ts'
import type { GameProfile } from '../../../com/mojang/authlib/GameProfile.d.ts'
import type { PropertyMap } from '../../../com/mojang/authlib/properties/PropertyMap.d.ts'
import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Codec$ResultFunction } from '../../../com/mojang/serialization/Codec$ResultFunction.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { MapCodec } from '../../../com/mojang/serialization/MapCodec.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Instant } from '../../../java/time/Instant.d.ts'
import type { DateTimeFormatter } from '../../../java/time/format/DateTimeFormatter.d.ts'
import type { TemporalAccessor } from '../../../java/time/temporal/TemporalAccessor.d.ts'
import type { BitSet } from '../../../java/util/BitSet.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { OptionalLong } from '../../../java/util/OptionalLong.d.ts'
import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { IntFunction } from '../../../java/util/function/IntFunction.d.ts'
import type { ToIntFunction } from '../../../java/util/function/ToIntFunction.d.ts'
import type { Pattern } from '../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Holder } from '../../../net/minecraft/core/Holder.d.ts'
import type { Tag } from '../../../net/minecraft/nbt/Tag.d.ts'
import type { ExtraCodecs$StrictUnboundedMapCodec } from '../../../net/minecraft/util/ExtraCodecs$StrictUnboundedMapCodec.d.ts'
import type { ExtraCodecs$TagOrElementLocation } from '../../../net/minecraft/util/ExtraCodecs$TagOrElementLocation.d.ts'
import type { AxisAngle4f } from '../../../org/joml/AxisAngle4f.d.ts'
import type { Matrix4fc } from '../../../org/joml/Matrix4fc.d.ts'
import type { Quaternionfc } from '../../../org/joml/Quaternionfc.d.ts'
import type { Vector2fc } from '../../../org/joml/Vector2fc.d.ts'
import type { Vector3fc } from '../../../org/joml/Vector3fc.d.ts'
import type { Vector3ic } from '../../../org/joml/Vector3ic.d.ts'
import type { Vector4fc } from '../../../org/joml/Vector4fc.d.ts'
export class ExtraCodecs extends Object {
    static ARGB_COLOR_CODEC: Codec<number>;
    static AUTHLIB_GAME_PROFILE: Codec<GameProfile>;
    static AXISANGLE4F: Codec<AxisAngle4f>;
    static BASE64_STRING: Codec<number[]>;
    static BIT_SET: Codec<BitSet>;
    static CHAT_STRING: Codec<string>;
    static CODEPOINT: Codec<number>;
    static ESCAPED_STRING: Codec<string>;
    static INSTANT_ISO8601: Codec<Instant>;
    static JAVA: Codec<Object>;
    static JSON: Codec<JsonElement>;
    static MATRIX4F: Codec<Matrix4fc>;
    static MAX_PROPERTIES: number;
    static MAX_PROPERTY_NAME_LENGTH: number;
    static MAX_PROPERTY_SIGNATURE_LENGTH: number;
    static MAX_PROPERTY_VALUE_LENGTH: number;
    static NBT: Codec<Tag>;
    static NON_EMPTY_STRING: Codec<string>;
    static NON_NEGATIVE_FLOAT: Codec<number>;
    static NON_NEGATIVE_INT: Codec<number>;
    static NON_NEGATIVE_LONG: Codec<number>;
    static PATTERN: Codec<Pattern>;
    static PLAYER_NAME: Codec<string>;
    static POSITIVE_FLOAT: Codec<number>;
    static POSITIVE_INT: Codec<number>;
    static POSITIVE_LONG: Codec<number>;
    static PROPERTY_MAP: Codec<PropertyMap>;
    static QUATERNIONF: Codec<Quaternionfc>;
    static QUATERNIONF_COMPONENTS: Codec<Quaternionfc>;
    static RESOURCE_PATH_CODEC: Codec<string>;
    static RGB_COLOR_CODEC: Codec<number>;
    static STORED_GAME_PROFILE: MapCodec<GameProfile>;
    static STRING_ARGB_COLOR: Codec<number>;
    static STRING_RGB_COLOR: Codec<number>;
    static TAG_OR_ELEMENT_ID: Codec<ExtraCodecs$TagOrElementLocation>;
    static UNSIGNED_BYTE: Codec<number>;
    static UNTRUSTED_URI: Codec<URI>;
    static VECTOR2F: Codec<Vector2fc>;
    static VECTOR3F: Codec<Vector3fc>;
    static VECTOR3I: Codec<Vector3ic>;
    static VECTOR4F: Codec<Vector4fc>;
    static fromOptionalLong: (param0: OptionalLong) => Optional<number>;
    static toOptionalLong: (param0: Optional<number>) => OptionalLong;
    static asOptionalLong(paramfieldCodec: MapCodec<Optional<number>>): MapCodec<OptionalLong>;
    static catchDecoderException(paramcodec: Codec<Object>): Codec<Object>;
    static compactListCodec(paramelementCodec: Codec<Object>): Codec<(Object | null)[]>;
    static compactListCodec(paramelementCodec: Codec<Object>, paramlistCodec: Codec<(Object | null)[]>): Codec<(Object | null)[]>;
    static converter(paramops: DynamicOps<Object>): Codec<Object>;
    static dispatchOptionalValue(paramtypeKey: string, paramvalueKey: string, paramtypeCodec: Codec<Object>, paramtypeGetter: (param0: Object) => Object | null, paramvalueCodec: (param0: Object) => Codec<Object>): MapCodec<Object>;
    static ensureHomogenous(paramtypeGetter: (param0: Object | null) => Object | null): (param0: Object | null) => DataResult<Object>;
    static floatRange(paramminInclusive: number, parammaxInclusive: number): Codec<number>;
    static guardedPathCodec(parambaseFolder: Path[][]): Codec<Path[][]>;
    static idResolverCodec(paramtoInt: (param0: Object | null) => number, paramfromInt: (param0: number) => Object | null, paramunknownId: number): Codec<Object>;
    static idResolverCodec(paramvalue: Codec<Object>, paramfromId: (param0: Object | null) => Object | null, paramtoId: (param0: Object | null) => Object | null): Codec<Object>;
    static intRange(paramminInclusive: number, parammaxInclusive: number): Codec<number>;
    static intervalCodec(parampointCodec: Codec<Object>, paramlowerBoundName: string, paramupperBoundName: string, parammakeInterval: (param0: Object | null, param1: Object | null) => DataResult<Object>, paramgetMin: (param0: Object | null) => Object | null, paramgetMax: (param0: Object | null) => Object | null): Codec<Object>;
    static legacyEnum(paramvalueOf: (param0: string) => Object | null): Codec<Object>;
    static longRange(paramminInclusive: number, parammaxInclusive: number): Codec<number>;
    static nonEmptyHolderSet(paramlistCodec: Codec<Holder<Object>[]>): Codec<Holder<Object>[]>;
    static nonEmptyList(paramlistCodec: Codec<(Object | null)[]>): Codec<(Object | null)[]>;
    static nonEmptyMap(parammapCodec: Codec<Object>): Codec<Object>;
    static object2BooleanMap(paramkeyCodec: Codec<Object>): Codec<{ [key: string]: any }>;
    static optionalEmptyMap(paramcodec: Codec<Object>): Codec<Optional<Object>>;
    static orCompressed(paramnormal: Codec<Object>, paramcompressed: Codec<Object>): Codec<Object>;
    static orCompressed(paramnormal: MapCodec<Object>, paramcompressed: MapCodec<Object>): MapCodec<Object>;
    static orElsePartial(paramvalue: Object | null): Codec$ResultFunction<Object>;
    static overrideLifecycle(paramcodec: Codec<Object>, paramlifecycleGetter: (param0: Object | null) => Lifecycle): Codec<Object>;
    static overrideLifecycle(paramcodec: Codec<Object>, paramdecodeLifecycle: (param0: Object | null) => Lifecycle, paramencodeLifecycle: (param0: Object | null) => Lifecycle): Codec<Object>;
    static pathCodec(parampathFactory: (param0: string) => Path[][]): Codec<Path[][]>;
    static relaiveNormalizedSubPathCodec(parampathFactory: (param0: string) => Path[][]): Codec<Path[][]>;
    static retrieveContext(paramgetter: (param0: DynamicOps<Object>) => DataResult<Object>): MapCodec<Object>;
    static sizeLimitedMap(paramcodec: Codec<Map<Object | null, Object | null>>, parammaxSizeInclusive: number): Codec<Map<Object | null, Object | null>>;
    static strictUnboundedMap(paramkeyCodec: Codec<Object>, paramelementCodec: Codec<Object>): ExtraCodecs$StrictUnboundedMapCodec<Object, Object>;
    static temporalCodec(paramformatter: DateTimeFormatter): Codec<TemporalAccessor>;
    constructor()
}