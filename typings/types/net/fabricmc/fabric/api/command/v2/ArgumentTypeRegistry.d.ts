import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ArgumentTypeInfo } from '../../../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ArgumentTypeRegistry extends Object {
    static registerArgumentType(paramarg0: Identifier, paramarg1: Class<Object>, paramarg2: ArgumentTypeInfo<any, any>): void;
    private constructor()
}