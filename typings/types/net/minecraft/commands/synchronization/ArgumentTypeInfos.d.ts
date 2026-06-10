import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ArgumentTypeInfosAccessor } from '../../../../net/fabricmc/fabric/mixin/command/ArgumentTypeInfosAccessor.d.ts'
import type { ArgumentTypeInfo } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { ArgumentTypeInfo$Template } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo$Template.d.ts'
export class ArgumentTypeInfos extends Object implements ArgumentTypeInfosAccessor {
    static bootstrap(paramregistry: ArgumentTypeInfo<Object, Object>[]): ArgumentTypeInfo<Object, Object>;
    static byClass(paramargumentType: Object | null): ArgumentTypeInfo<Object, Object>;
    static fabric_getClassMap(): Map<Class<Object>, ArgumentTypeInfo<Object, Object>>;
    static isClassRecognized(paramcls: Class<Object>): boolean;
    static unpack(paramargumentType: Object | null): ArgumentTypeInfo$Template<Object>;
    constructor()
}