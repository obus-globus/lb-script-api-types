import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../com/mojang/serialization/Keyable.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { IntFunction } from '../../../../java/util/function/IntFunction.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class Pose extends Enum<Pose> implements StringRepresentable {
    static BY_ID: (param0: number) => Pose;
    static CODEC: Codec<Pose>;
    static CROAKING: Pose;
    static CROUCHING: Pose;
    static DIGGING: Pose;
    static DYING: Pose;
    static EMERGING: Pose;
    static FALL_FLYING: Pose;
    static INHALING: Pose;
    static LONG_JUMPING: Pose;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static ROARING: Pose;
    static SHOOTING: Pose;
    static SITTING: Pose;
    static SLEEPING: Pose;
    static SLIDING: Pose;
    static SNIFFING: Pose;
    static SPIN_ATTACK: Pose;
    static STANDING: Pose;
    static STREAM_CODEC: StreamCodec<ByteBuf, Pose>;
    static SWIMMING: Pose;
    static USING_TONGUE: Pose;
    static createNameLookup(paramvalueArray: (StringRepresentable | null)[]): (param0: string) => StringRepresentable | null;
    static createNameLookup(paramvalueArray: (Object | null)[], paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => (Object | null)[]): StringRepresentable$EnumCodec<any>;
    static fromEnumWithMapping(paramvalues: () => (Object | null)[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<any>;
    static fromValues(paramvalues: () => (StringRepresentable | null)[]): Codec<StringRepresentable>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Pose;
    static values(): Pose[];
    private constructor(id: number, name: string)
    // private id: number;
    // private name: string;
    getSerializedName(): string;
    id(): number;
    name(): "STANDING" | "FALL_FLYING" | "SLEEPING" | "SWIMMING" | "SPIN_ATTACK" | "CROUCHING" | "LONG_JUMPING" | "DYING" | "CROAKING" | "USING_TONGUE" | "SITTING" | "ROARING" | "SNIFFING" | "EMERGING" | "DIGGING" | "SLIDING" | "SHOOTING" | "INHALING";
}