import type { Object } from '../../java/lang/Object.d.ts'
import type { KCallable } from '../../kotlin/reflect/KCallable.d.ts'
export interface KDeclarationContainer extends Object{
    readonly members: KCallable<Object>[];
}