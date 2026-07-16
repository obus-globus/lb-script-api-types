import type { ArgumentType } from '../../../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ArgumentTypeInfo } from '../../../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { ArgumentTypeInfo$Template } from '../../../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo$Template.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ArgumentTypeRegistry extends Object {
    static registerArgumentType<A extends ArgumentType<Object>, T extends ArgumentTypeInfo$Template<A>>(paramarg0: Identifier, paramarg1: Class<A>, paramarg2: ArgumentTypeInfo<A, T>): void;
    private constructor()
}