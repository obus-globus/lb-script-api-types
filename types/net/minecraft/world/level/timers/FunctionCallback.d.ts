import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MinecraftServer } from '../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { TimerCallback } from '../../../../../net/minecraft/world/level/timers/TimerCallback.d.ts'
import type { TimerQueue } from '../../../../../net/minecraft/world/level/timers/TimerQueue.d.ts'
export class FunctionCallback extends Record implements TimerCallback<MinecraftServer> {
    static CODEC: MapCodec<FunctionCallback>;
    constructor(functionId: Identifier)
    // private functionId: Identifier;
    codec(): MapCodec<FunctionCallback>;
    equals(o: Object | null): boolean;
    functionId(): Identifier;
    handle(server: MinecraftServer, queue: TimerQueue<MinecraftServer>, time: number): void;
    hashCode(): number;
    toString(): string;
}