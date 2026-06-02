import type { ImmutableStringReader } from '../../../../com/mojang/brigadier/ImmutableStringReader.d.ts'
import type { CommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/CommandExceptionType.d.ts'
import type { CommandSyntaxException } from '../../../../com/mojang/brigadier/exceptions/CommandSyntaxException.d.ts'
import type { Dynamic4CommandExceptionType$Function } from '../../../../com/mojang/brigadier/exceptions/Dynamic4CommandExceptionType$Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Dynamic4CommandExceptionType extends Object implements CommandExceptionType {
    constructor(arg0: Dynamic4CommandExceptionType$Function)
    // private function: Dynamic4CommandExceptionType$Function;
    create(arg0: Object, arg1: Object, arg2: Object, arg3: Object): CommandSyntaxException;
    createWithContext(arg0: ImmutableStringReader, arg1: Object, arg2: Object, arg3: Object, arg4: Object): CommandSyntaxException;
}