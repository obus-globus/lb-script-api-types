import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Services extends Object {
    static get<T extends unknown>(paramarg0: Class<T>): T;
    static reload(): void;
    private constructor()
}