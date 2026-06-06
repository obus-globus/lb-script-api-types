import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export class ServerData$ServerPackStatus extends Enum<ServerData$ServerPackStatus> {
    static DISABLED: ServerData$ServerPackStatus;
    static ENABLED: ServerData$ServerPackStatus;
    static FIELD_CODEC: MapCodec<ServerData$ServerPackStatus>;
    static PROMPT: ServerData$ServerPackStatus;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ServerData$ServerPackStatus;
    static values(): (Object | null)[];
    private constructor(name: string)
    getName(): Component;
    name(): "ENABLED" | "DISABLED" | "PROMPT";
}