import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../../../java/lang/reflect/Method.d.ts'
import type { Annotation } from '../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ISelectorContext } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ISelectorContext.d.ts'
import type { ITargetSelectorDynamic } from '../../../../../../org/spongepowered/asm/mixin/injection/selectors/ITargetSelectorDynamic.d.ts'
import type { IAnnotationHandle } from '../../../../../../org/spongepowered/asm/util/asm/IAnnotationHandle.d.ts'
export class TargetSelector$DynamicSelectorEntry extends Object {
    constructor(arg0: string, arg1: string, arg2: Class<ITargetSelectorDynamic>)
    // private annotation: Class<Annotation>;
    // private id: string;
    // private mdParseAnnotation: Method;
    // private mdParseString: Method;
    // private namespace: string;
    // private type: Class<ITargetSelectorDynamic>;
    getCode(): string;
    parse(arg0: Object, arg1: ISelectorContext, arg2: Method): ITargetSelectorDynamic;
    parse(arg0: string, arg1: ISelectorContext): ITargetSelectorDynamic;
    parse(arg0: IAnnotationHandle, arg1: ISelectorContext): ITargetSelectorDynamic;
}