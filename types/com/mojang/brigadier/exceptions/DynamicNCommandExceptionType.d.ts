import type { ImmutableStringReader } from '../../../../com/mojang/brigadier/ImmutableStringReader.d.ts'
import type { CommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/CommandExceptionType.d.ts'
import type { CommandSyntaxException } from '../../../../com/mojang/brigadier/exceptions/CommandSyntaxException.d.ts'
import type { DynamicNCommandExceptionType$Function } from '../../../../com/mojang/brigadier/exceptions/DynamicNCommandExceptionType$Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DynamicNCommandExceptionType extends Object implements CommandExceptionType {
    constructor(arg0: DynamicNCommandExceptionType$Function)
    // private function: DynamicNCommandExceptionType$Function;
    create(arg0: Object, arg1: Object[]): CommandSyntaxException;
    createWithContext(arg0: ImmutableStringReader, arg1: Object[]): CommandSyntaxException;
}