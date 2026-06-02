import type { Context } from '../../../../../../javax/naming/Context.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JndiCloser extends Object {
    static close(paramcontext: Context): void;
    static closeSilently(paramcontext: Context): boolean;
    private constructor()
}