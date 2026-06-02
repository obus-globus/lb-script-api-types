import type { RewriteResult } from '../../../../../com/mojang/datafixers/RewriteResult.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Algebra extends Object{
    apply(arg0: number): RewriteResult<Object, Object>;
    toString(arg0: number): string;
}