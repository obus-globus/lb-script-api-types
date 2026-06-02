import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSource } from '../../../../net/minecraft/commands/CommandSource.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { BaseCommandBlock$CloseableCommandBlockSource } from '../../../../net/minecraft/world/level/BaseCommandBlock$CloseableCommandBlockSource.d.ts'
import type { ValueInput } from '../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export abstract class BaseCommandBlock extends Object {
    constructor()
    readonly command: string;
    readonly customName: Component;
    // private lastExecution: number;
    readonly lastOutput: Component;
    readonly successCount: number;
    readonly trackOutput: boolean;
    // private updateLastExecution: boolean;
    createCommandSourceStack(level: ServerLevel, source: CommandSource): CommandSourceStack;
    // private createSource(level: ServerLevel): BaseCommandBlock$CloseableCommandBlockSource;
    getCommand(): string;
    getCustomName(): Component;
    getLastOutput(): Component;
    getName(): Component;
    getSuccessCount(): number;
    isTrackOutput(): boolean;
    isValid(): boolean;
    load(input: ValueInput): void;
    onUpdated(level: ServerLevel): void;
    performCommand(level: ServerLevel): boolean;
    save(output: ValueOutput): void;
    setCommand(command: string): void;
    setCustomName(name: Component): void;
    setLastOutput(lastOutput: Component): void;
    setSuccessCount(successCount: number): void;
    setTrackOutput(trackOutput: boolean): void;
}