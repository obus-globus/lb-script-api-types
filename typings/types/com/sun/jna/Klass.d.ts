import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class Klass extends Object {
    static newInstance<T extends unknown>(paramarg0: Class<T>): T;
    private constructor()
}