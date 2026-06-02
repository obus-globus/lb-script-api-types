import type { Message } from '../../../../com/mojang/brigadier/Message.d.ts'
import type { BuiltInExceptionProvider } from '../../../../com/mojang/brigadier/exceptions/BuiltInExceptionProvider.d.ts'
import type { CommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/CommandExceptionType.d.ts'
import type { Exception } from '../../../../java/lang/Exception.d.ts'
export class CommandSyntaxException extends Exception {
    static BUILT_IN_EXCEPTIONS: BuiltInExceptionProvider;
    static CONTEXT_AMOUNT: number;
    static ENABLE_COMMAND_STACK_TRACES: boolean;
    constructor(arg0: CommandExceptionType, arg1: Message)
    constructor(arg0: CommandExceptionType, arg1: Message, arg2: string, arg3: number)
    readonly cursor: number;
    readonly input: string;
    readonly message: Message;
    readonly message: string | null;
    readonly type: CommandExceptionType;
    getContext(): string;
    getCursor(): number;
    getInput(): string;
    getRawMessage(): Message;
    getType(): CommandExceptionType;
}