import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSource } from '../../../../net/minecraft/commands/CommandSource.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { MinecraftServer } from '../../../../net/minecraft/server/MinecraftServer.d.ts'
export class RconConsoleSource extends Object implements CommandSource {
    static NULL: CommandSource;
    constructor(server: MinecraftServer)
    // private buffer: StringBuffer;
    // private server: MinecraftServer;
    acceptsFailure(): boolean;
    acceptsSuccess(): boolean;
    alwaysAccepts(): boolean;
    createCommandSourceStack(): CommandSourceStack;
    getCommandResponse(): string;
    prepareForCommand(): void;
    sendSystemMessage(message: Component): void;
    shouldInformAdmins(): boolean;
}