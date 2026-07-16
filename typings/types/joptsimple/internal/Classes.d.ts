import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Classes extends Object {
    static shortNameOf(paramarg0: string): string;
    static wrapperOf<T extends unknown>(paramarg0: Class<T>): Class<T>;
    private constructor()
}