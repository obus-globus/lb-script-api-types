import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KDeclarationContainer } from '../../../kotlin/reflect/KDeclarationContainer.d.ts'
export interface ClassBasedDeclarationContainer extends Object, KDeclarationContainer{
    /*not mapped: */ getJClass(): Class<Object>;
}