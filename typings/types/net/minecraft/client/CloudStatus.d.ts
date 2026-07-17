import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { StringRepresentable } from '../../../net/minecraft/util/StringRepresentable.d.ts'
export class CloudStatus extends Enum<CloudStatus> implements StringRepresentable {
    static CODEC: Codec<CloudStatus>;
    static FANCY: CloudStatus;
    static FAST: CloudStatus;
    static OFF: CloudStatus;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CloudStatus;
    static values(): CloudStatus[];
    private constructor(legacyName: string, key: string)
    // private caption: Component;
    // private legacyName: string;
    caption(): Component;
    getSerializedName(): string;
    name(): "OFF" | "FAST" | "FANCY";
}