import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSource } from '../../../../net/minecraft/commands/CommandSource.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
export class BaseCommandBlock$CloseableCommandBlockSource extends Object implements AutoCloseable, CommandSource {
    static NULL: CommandSource;
    constructor(null_: BaseCommandBlock$CloseableCommandBlockSource, level: ServerLevel)
    // private closed: boolean;
    // private level: ServerLevel;
    acceptsFailure(): boolean;
    acceptsSuccess(): boolean;
    alwaysAccepts(): boolean;
    close(): void;
    sendSystemMessage(message: Component): void;
    shouldInformAdmins(): boolean;
}