import type { CommandDispatcher } from '../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Message } from '../../../com/mojang/brigadier/Message.d.ts'
import type { CommandExceptionType } from '../../../com/mojang/brigadier/exceptions/CommandExceptionType.d.ts'
import type { CommandSyntaxException } from '../../../com/mojang/brigadier/exceptions/CommandSyntaxException.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CommandResultCallback } from '../../../net/minecraft/commands/CommandResultCallback.d.ts'
import type { TraceCallbacks } from '../../../net/minecraft/commands/execution/TraceCallbacks.d.ts'
import type { PermissionSet } from '../../../net/minecraft/server/permissions/PermissionSet.d.ts'
import type { PermissionSetSupplier } from '../../../net/minecraft/server/permissions/PermissionSetSupplier.d.ts'
export interface ExecutionCommandSource<T extends ExecutionCommandSource<T>> extends Object, PermissionSetSupplier {
    callback(): (param0: boolean, param1: number) => void;
    clearCallbacks(): T;
    dispatcher(): CommandDispatcher<T>;
    handleError(type: CommandExceptionType, message: Message, forked: boolean, tracer: TraceCallbacks): void;
    handleError(e: CommandSyntaxException, forked: boolean, tracer: TraceCallbacks): void;
    isSilent(): boolean;
    permissions(): PermissionSet;
    withCallback(resultCallback: (param0: boolean, param1: number) => void): T;
}