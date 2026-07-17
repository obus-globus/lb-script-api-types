import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Unbox$WebSafeState extends Object {
    private constructor()
    // private current: ThreadLocal<number[]>;
    // private ringBuffer: ThreadLocal<StringBuilder[]>;
    getStringBuilder(): StringBuilder;
}