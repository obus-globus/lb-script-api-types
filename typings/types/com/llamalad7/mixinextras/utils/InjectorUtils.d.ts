import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { Injector$InjectorData } from '../../../../org/spongepowered/asm/mixin/injection/code/Injector$InjectorData.d.ts'
import type { LocalVariableDiscriminator } from '../../../../org/spongepowered/asm/mixin/injection/modify/LocalVariableDiscriminator.d.ts'
import type { LocalVariableDiscriminator$Context } from '../../../../org/spongepowered/asm/mixin/injection/modify/LocalVariableDiscriminator$Context.d.ts'
import type { InjectionInfo } from '../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { InjectionNodes$InjectionNode } from '../../../../org/spongepowered/asm/mixin/injection/struct/InjectionNodes$InjectionNode.d.ts'
export class InjectorUtils extends Object {
    static checkForDupedNews(paramarg0: Map<AbstractInsnNode[], Object | null>): void;
    static checkForImmediatePops(paramarg0: Map<AbstractInsnNode[], Object | null>): void;
    static coerceReturnType(paramarg0: Injector$InjectorData, paramarg1: AbstractInsnNode[], paramarg2: Type): void;
    static decorateInjectorSpecific(paramarg0: InjectionNodes$InjectionNode, paramarg1: InjectionInfo, paramarg2: string, paramarg3: Object): void;
    static findCoerce(paramarg0: InjectionNodes$InjectionNode, paramarg1: Type): AbstractInsnNode;
    static getInjectorSpecificDecoration(paramarg0: InjectionNodes$InjectionNode, paramarg1: InjectionInfo, paramarg2: string): Object | null;
    static getOrCreateLocalContext(paramarg0: AbstractInsnNode[], paramarg1: InjectionNodes$InjectionNode, paramarg2: InjectionInfo, paramarg3: Type, paramarg4: boolean): LocalVariableDiscriminator$Context;
    static handlerArgMap(paramarg0: AbstractInsnNode[], paramarg1: number[], paramarg2: (Object | null)[], paramarg3: boolean): number[];
    static hasInjectorSpecificDecoration(paramarg0: InjectionNodes$InjectionNode, paramarg1: InjectionInfo, paramarg2: string): boolean;
    static isDupedFactoryRedirect(paramarg0: InjectionNodes$InjectionNode): boolean;
    static isDupedNew(paramarg0: InjectionNodes$InjectionNode): boolean;
    static isDynamicInstanceofRedirect(paramarg0: InjectionNodes$InjectionNode): boolean;
    static isVirtualRedirect(paramarg0: InjectionNodes$InjectionNode): boolean;
    static printLocals(paramarg0: AbstractInsnNode[], paramarg1: AbstractInsnNode, paramarg2: LocalVariableDiscriminator$Context, paramarg3: LocalVariableDiscriminator, paramarg4: Type, paramarg5: boolean): void;
    constructor()
}