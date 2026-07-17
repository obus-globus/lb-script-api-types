import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { StringRepresentable } from '../../../net/minecraft/util/StringRepresentable.d.ts'
export class InactivityFpsLimit extends Enum<InactivityFpsLimit> implements StringRepresentable {
    static AFK: InactivityFpsLimit;
    static CODEC: Codec<InactivityFpsLimit>;
    static MINIMIZED: InactivityFpsLimit;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): InactivityFpsLimit;
    static values(): InactivityFpsLimit[];
    private constructor(serializedName: string, key: string)
    // private caption: Component;
    readonly serializedName: string;
    caption(): Component;
    getSerializedName(): string;
    name(): "MINIMIZED" | "AFK";
}