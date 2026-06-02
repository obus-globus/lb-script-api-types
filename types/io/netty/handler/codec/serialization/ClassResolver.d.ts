import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ClassResolver extends Object{
    resolve(arg0: string): Class<Object>;
}