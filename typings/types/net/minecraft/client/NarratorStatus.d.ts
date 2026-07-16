import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
export class NarratorStatus extends Enum<NarratorStatus> {
    static ALL: NarratorStatus;
    static CHAT: NarratorStatus;
    static LEGACY_CODEC: Codec<NarratorStatus>;
    static OFF: NarratorStatus;
    static SYSTEM: NarratorStatus;
    static byId(paramid: number): NarratorStatus;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): NarratorStatus;
    static values(): NarratorStatus[];
    private constructor(id: number, key: string)
    readonly id: number;
    getId(): number;
    getName(): Component;
    shouldNarrateChat(): boolean;
    shouldNarrateSystem(): boolean;
    shouldNarrateSystemOrChat(): boolean;
    name(): "OFF" | "ALL" | "CHAT" | "SYSTEM";
}