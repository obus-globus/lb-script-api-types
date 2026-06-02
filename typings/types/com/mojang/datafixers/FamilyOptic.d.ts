import type { TypedOptic } from '../../../com/mojang/datafixers/TypedOptic.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface FamilyOptic<A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends Object{
    apply(arg0: number): TypedOptic<Object, Object, A, B>;
}