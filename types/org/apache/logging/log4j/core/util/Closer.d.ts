import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Closer extends Object {
    static close(paramcloseable: AutoCloseable): boolean;
    static closeSilently(paramcloseable: AutoCloseable): boolean;
    private constructor()
}