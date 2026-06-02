import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PointerBase } from '../../../../org/graalvm/word/PointerBase.d.ts'
export interface SizeOfSupport extends Object{
    sizeof(clazz: Class<PointerBase>): number;
}