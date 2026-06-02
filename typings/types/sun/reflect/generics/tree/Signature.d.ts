import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FormalTypeParameter } from '../../../../sun/reflect/generics/tree/FormalTypeParameter.d.ts'
import type { Tree } from '../../../../sun/reflect/generics/tree/Tree.d.ts'
export interface Signature extends Object, Tree{
    getFormalTypeParameters(): FormalTypeParameter[];
}