import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
export class HumanoidArm extends Enum<HumanoidArm> implements StringRepresentable {
    static CODEC: Codec<HumanoidArm>;
    static LEFT: HumanoidArm;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static RIGHT: HumanoidArm;
    static STREAM_CODEC: StreamCodec<ByteBuf, HumanoidArm>;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): HumanoidArm;
    static values(): HumanoidArm[];
    private constructor(id: number, name: string, translationKey: string)
    // private caption: Component;
    id: number;
    // private name: string;
    caption(): Component;
    getOpposite(): HumanoidArm;
    getSerializedName(): string;
    name(): "LEFT" | "RIGHT";
}