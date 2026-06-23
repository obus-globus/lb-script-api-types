import type { Typed } from '../../../../../com/mojang/datafixers/Typed.d.ts'
import type { Type } from '../../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FixProjectileStoredItem$SubFixer<F extends unknown> extends Object{
    fix(input: Typed<Object>, outputType: Type<F>): Typed<F>;
}