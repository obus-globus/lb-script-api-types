import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class TestBlockMode extends Enum<TestBlockMode> implements StringRepresentable {
    static ACCEPT: TestBlockMode;
    static CODEC: Codec<TestBlockMode>;
    static FAIL: TestBlockMode;
    static LOG: TestBlockMode;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static START: TestBlockMode;
    static STREAM_CODEC: StreamCodec<ByteBuf, TestBlockMode>;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TestBlockMode;
    static values(): TestBlockMode[];
    private constructor(id: number, name: string)
    readonly detailedMessage: Component;
    readonly displayName: Component;
    // private id: number;
    // private name: string;
    getDetailedMessage(): Component;
    getDisplayName(): Component;
    getSerializedName(): string;
    name(): "START" | "LOG" | "FAIL" | "ACCEPT";
}