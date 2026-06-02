import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export interface TraceCallbacks extends AutoCloseable, Object{
    close(): void;
    onCall(depth: number, function_: Identifier, size: number): void;
    onCommand(depth: number, command: string): void;
    onError(message: string): void;
    onReturn(depth: number, command: string, result: number): void;
}