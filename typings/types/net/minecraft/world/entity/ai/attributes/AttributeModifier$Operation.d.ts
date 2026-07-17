import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { IntFunction } from '../../../../../../java/util/function/IntFunction.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class AttributeModifier$Operation extends Enum<AttributeModifier$Operation> implements StringRepresentable {
    static ADD_MULTIPLIED_BASE: AttributeModifier$Operation;
    static ADD_MULTIPLIED_TOTAL: AttributeModifier$Operation;
    static ADD_VALUE: AttributeModifier$Operation;
    static BY_ID: (param0: number) => AttributeModifier$Operation;
    static CODEC: Codec<AttributeModifier$Operation>;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static STREAM_CODEC: StreamCodec<ByteBuf, AttributeModifier$Operation>;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): AttributeModifier$Operation;
    static values(): AttributeModifier$Operation[];
    private constructor(name: string, id: number)
    // private id: number;
    // private name: string;
    getSerializedName(): string;
    id(): number;
    name(): "ADD_VALUE" | "ADD_MULTIPLIED_BASE" | "ADD_MULTIPLIED_TOTAL";
}