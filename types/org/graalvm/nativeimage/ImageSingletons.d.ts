import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ImageSingletons extends Object {
    static add(paramkey: Class<Object>, paramvalue: Object | null): void;
    static contains(paramkey: Class<Object>): boolean;
    static lookup(paramkey: Class<Object>): Object | null;
    private constructor()
}