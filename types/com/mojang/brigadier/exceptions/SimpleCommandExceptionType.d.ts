import type { ImmutableStringReader } from '../../../../com/mojang/brigadier/ImmutableStringReader.d.ts'
import type { Message } from '../../../../com/mojang/brigadier/Message.d.ts'
import type { CommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/CommandExceptionType.d.ts'
import type { CommandSyntaxException } from '../../../../com/mojang/brigadier/exceptions/CommandSyntaxException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SimpleCommandExceptionType extends Object implements CommandExceptionType {
    constructor(arg0: Message)
    // private message: Message;
    create(): CommandSyntaxException;
    createWithContext(arg0: ImmutableStringReader): CommandSyntaxException;
    toString(): string;
}