import type { Narrator } from '../../../com/mojang/text2speech/Narrator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../net/minecraft/client/Minecraft.d.ts'
import type { NarratorStatus } from '../../../net/minecraft/client/NarratorStatus.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
export class GameNarrator extends Object {
    static NO_TITLE: Component;
    constructor(minecraft: Minecraft)
    // private minecraft: Minecraft;
    // private narrator: Narrator;
    checkStatus(requiredActive: boolean): void;
    clear(): void;
    destroy(): void;
    // private getStatus(): NarratorStatus;
    isActive(): boolean;
    // private logNarratedMessage(message: string): void;
    // private narrateMessage(message: string, interrupt: boolean): void;
    // private narrateNotInterruptingMessage(message: Component): void;
    sayChatQueued(message: Component): void;
    saySystemChatQueued(message: Component): void;
    saySystemNow(message: string): void;
    saySystemNow(message: Component): void;
    saySystemQueued(message: Component): void;
    updateNarratorStatus(status: NarratorStatus): void;
}