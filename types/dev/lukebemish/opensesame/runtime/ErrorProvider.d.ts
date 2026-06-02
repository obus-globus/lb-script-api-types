import type { ClassProvider } from '../../../../dev/lukebemish/opensesame/runtime/ClassProvider.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ErrorProvider extends Object implements ClassProvider {
    constructor()
    provide(arg0: ClassLoader, arg1: string): Class<Object>;
}