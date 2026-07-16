import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
export class PrioritizeChunkUpdates extends Enum<PrioritizeChunkUpdates> {
    static LEGACY_CODEC: Codec<PrioritizeChunkUpdates>;
    static NEARBY: PrioritizeChunkUpdates;
    static NONE: PrioritizeChunkUpdates;
    static PLAYER_AFFECTED: PrioritizeChunkUpdates;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PrioritizeChunkUpdates;
    static values(): PrioritizeChunkUpdates[];
    private constructor(id: number, key: string)
    // private caption: Component;
    // private id: number;
    caption(): Component;
    name(): "NONE" | "PLAYER_AFFECTED" | "NEARBY";
}