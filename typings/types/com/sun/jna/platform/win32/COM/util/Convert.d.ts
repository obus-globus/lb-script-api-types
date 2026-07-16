import type { IComEnum } from '../../../../../../../com/sun/jna/platform/win32/COM/util/IComEnum.d.ts'
import type { ObjectFactory } from '../../../../../../../com/sun/jna/platform/win32/COM/util/ObjectFactory.d.ts'
import type { Variant$VARIANT } from '../../../../../../../com/sun/jna/platform/win32/Variant$VARIANT.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Convert extends Object {
    static free(paramarg0: Variant$VARIANT, paramarg1: Class<Object>): void;
    static free(paramarg0: Variant$VARIANT, paramarg1: Object): void;
    static toComEnum<T extends IComEnum>(paramarg0: Class<T>, paramarg1: Object): T;
    static toJavaObject(paramarg0: Variant$VARIANT, paramarg1: Class<Object>, paramarg2: ObjectFactory, paramarg3: boolean, paramarg4: boolean): Object;
    static toVariant(paramarg0: Object): Variant$VARIANT;
    constructor()
}