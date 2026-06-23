import type { TypedOptic } from '../../../com/mojang/datafixers/TypedOptic.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface FamilyOptic<A extends unknown, B extends unknown> extends Object{
    apply(arg0: number): TypedOptic<Object, Object, A, B>;
}