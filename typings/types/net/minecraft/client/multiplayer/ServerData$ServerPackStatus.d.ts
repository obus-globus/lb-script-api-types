import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export class ServerData$ServerPackStatus extends Enum<ServerData$ServerPackStatus> {
    static DISABLED: ServerData$ServerPackStatus;
    static ENABLED: ServerData$ServerPackStatus;
    static FIELD_CODEC: MapCodec<ServerData$ServerPackStatus>;
    static PROMPT: ServerData$ServerPackStatus;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ServerData$ServerPackStatus;
    static values(): ServerData$ServerPackStatus[];
    private constructor(name: string)
    getName(): Component;
    name(): "ENABLED" | "DISABLED" | "PROMPT";
}