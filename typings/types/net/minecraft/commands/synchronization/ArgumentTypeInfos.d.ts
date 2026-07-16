import type { ArgumentType } from '../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ArgumentTypeInfosAccessor } from '../../../../net/fabricmc/fabric/mixin/command/ArgumentTypeInfosAccessor.d.ts'
import type { ArgumentTypeInfo } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { ArgumentTypeInfo$Template } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo$Template.d.ts'
export class ArgumentTypeInfos extends Object implements ArgumentTypeInfosAccessor {
    static bootstrap(paramregistry: ArgumentTypeInfo<any, any>[]): ArgumentTypeInfo<any, any>;
    static byClass<A extends ArgumentType<Object>>(paramargumentType: A): ArgumentTypeInfo<A, any>;
    static fabric_getClassMap(): Map<Class<Object>, ArgumentTypeInfo<any, any>>;
    static isClassRecognized(paramcls: Class<Object>): boolean;
    static unpack<A extends ArgumentType<Object>>(paramargumentType: A): ArgumentTypeInfo$Template<A>;
    constructor()
}