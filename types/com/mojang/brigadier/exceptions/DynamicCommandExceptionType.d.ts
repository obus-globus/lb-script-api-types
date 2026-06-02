import type { ImmutableStringReader } from '../../../../com/mojang/brigadier/ImmutableStringReader.d.ts'
import type { Message } from '../../../../com/mojang/brigadier/Message.d.ts'
import type { CommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/CommandExceptionType.d.ts'
import type { CommandSyntaxException } from '../../../../com/mojang/brigadier/exceptions/CommandSyntaxException.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DynamicCommandExceptionType extends Object implements CommandExceptionType {
    constructor(arg0: (param0: Object) => Message)
    // private function: (param0: Object) => Message;
    create(arg0: Object): CommandSyntaxException;
    createWithContext(arg0: ImmutableStringReader, arg1: Object): CommandSyntaxException;
}