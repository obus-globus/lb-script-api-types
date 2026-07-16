import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
export class MinecraftServer$MultiplayerScope extends Enum<MinecraftServer$MultiplayerScope> {
    static LAN: MinecraftServer$MultiplayerScope;
    static OFF: MinecraftServer$MultiplayerScope;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): MinecraftServer$MultiplayerScope;
    static values(): MinecraftServer$MultiplayerScope[];
    private constructor(key: string)
    readonly tooltip: Component;
    // private translatable: Component;
    getDisplayName(): Component;
    getTooltip(): Component;
    name(): "OFF" | "LAN";
}