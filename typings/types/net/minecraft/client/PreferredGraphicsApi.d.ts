import type { GpuBackend } from '../../../com/mojang/blaze3d/systems/GpuBackend.d.ts'
import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { StringRepresentable } from '../../../net/minecraft/util/StringRepresentable.d.ts'
export class PreferredGraphicsApi extends Enum<PreferredGraphicsApi> implements StringRepresentable {
    static CODEC: Codec<PreferredGraphicsApi>;
    static DEFAULT: PreferredGraphicsApi;
    static OPENGL: PreferredGraphicsApi;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static VULKAN: PreferredGraphicsApi;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PreferredGraphicsApi;
    static values(): PreferredGraphicsApi[];
    private constructor(serializedName: string, key: string)
    // private key: Component;
    readonly serializedName: string;
    caption(): Component;
    getBackendsToTry(): GpuBackend[];
    getSerializedName(): string;
    name(): "DEFAULT" | "OPENGL" | "VULKAN";
}