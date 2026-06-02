import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../org/objectweb/asm/Type.d.ts'
import type { MethodNode } from '../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
import type { AccessorInfo } from '../../../../../org/spongepowered/asm/mixin/gen/AccessorInfo.d.ts'
import type { AccessorInfo$AccessorName } from '../../../../../org/spongepowered/asm/mixin/gen/AccessorInfo$AccessorName.d.ts'
import type { AccessorInfo$AccessorType } from '../../../../../org/spongepowered/asm/mixin/gen/AccessorInfo$AccessorType.d.ts'
import type { ISelectorContext } from '../../../../../org/spongepowered/asm/mixin/injection/selectors/ISelectorContext.d.ts'
import type { ITargetSelector } from '../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelector.d.ts'
import type { MixinTargetContext } from '../../../../../org/spongepowered/asm/mixin/transformer/MixinTargetContext.d.ts'
import type { IAnnotatedElement } from '../../../../../org/spongepowered/asm/util/asm/IAnnotatedElement.d.ts'
export class InvokerInfo extends AccessorInfo {
    static getDynamicInfo(paramarg0: Object): string;
    static getDynamicInfo(paramarg0: MethodNode): string;
    static getDynamicInfo(paramarg0: IAnnotatedElement): string;
    static inflectTarget(paramarg0: string, paramarg1: AccessorInfo$AccessorType, paramarg2: string, paramarg3: ISelectorContext, paramarg4: boolean): string;
    static inflectTarget(paramarg0: AccessorInfo$AccessorName, paramarg1: AccessorInfo$AccessorType, paramarg2: string, paramarg3: ISelectorContext, paramarg4: boolean): string;
    static of(paramarg0: MixinTargetContext, paramarg1: MethodNode, paramarg2: Class<Object>): AccessorInfo;
    constructor(arg0: MixinTargetContext, arg1: MethodNode)
    // private findTargetMethod(): MethodNode;
    initTarget(): ITargetSelector;
    initTargetFieldType(): Type;
    initType(): AccessorInfo$AccessorType;
    // private initType(arg0: string, arg1: string): AccessorInfo$AccessorType;
    locate(): void;
}