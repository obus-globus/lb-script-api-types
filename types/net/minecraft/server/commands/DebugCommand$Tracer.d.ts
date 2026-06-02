import type { PrintWriter } from '../../../../java/io/PrintWriter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSource } from '../../../../net/minecraft/commands/CommandSource.d.ts'
import type { TraceCallbacks } from '../../../../net/minecraft/commands/execution/TraceCallbacks.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class DebugCommand$Tracer extends Object implements CommandSource, TraceCallbacks {
    static INDENT_OFFSET: number;
    static NULL: CommandSource;
    private constructor(output: PrintWriter)
    // private lastIndent: number;
    // private output: PrintWriter;
    // private waitingForResult: boolean;
    acceptsFailure(): boolean;
    acceptsSuccess(): boolean;
    alwaysAccepts(): boolean;
    alwaysAccepts(): boolean;
    close(): void;
    // private indentAndSave(value: number): void;
    // private newLine(): void;
    onCall(depth: number, function_: Identifier, size: number): void;
    onCommand(depth: number, command: string): void;
    onError(message: string): void;
    onReturn(depth: number, command: string, result: number): void;
    // private printIndent(value: number): void;
    sendSystemMessage(message: Component): void;
    shouldInformAdmins(): boolean;
}