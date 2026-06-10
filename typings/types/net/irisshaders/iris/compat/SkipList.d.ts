import type { Class } from '../../../../java/lang/Class.d.ts'
import type { MethodHandle } from '../../../../java/lang/invoke/MethodHandle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SkipList extends Object {
    static ALWAYS: MethodHandle;
    static NONE: MethodHandle;
    static shouldSkipList: Map<Class<Object>, MethodHandle>;
    constructor()
}