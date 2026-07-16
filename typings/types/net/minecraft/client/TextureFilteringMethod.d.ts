import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
export class TextureFilteringMethod extends Enum<TextureFilteringMethod> {
    static ANISOTROPIC: TextureFilteringMethod;
    static LEGACY_CODEC: Codec<TextureFilteringMethod>;
    static NONE: TextureFilteringMethod;
    static RGSS: TextureFilteringMethod;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TextureFilteringMethod;
    static values(): TextureFilteringMethod[];
    private constructor(id: number, key: string)
    // private caption: Component;
    // private id: number;
    caption(): Component;
    name(): "NONE" | "RGSS" | "ANISOTROPIC";
}