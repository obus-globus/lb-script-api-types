import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
export interface TypeDefinition extends Object{
    matches(arg0: Type): boolean;
}