import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class ChatVisiblity extends Enum<ChatVisiblity> {
    static FULL: ChatVisiblity;
    static HIDDEN: ChatVisiblity;
    static LEGACY_CODEC: Codec<ChatVisiblity>;
    static SYSTEM: ChatVisiblity;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ChatVisiblity;
    static values(): ChatVisiblity[];
    private constructor(id: number, key: string)
    // private caption: Component;
    // private id: number;
    caption(): Component;
    name(): "FULL" | "SYSTEM" | "HIDDEN";
}