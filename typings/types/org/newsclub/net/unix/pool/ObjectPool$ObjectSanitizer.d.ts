import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ObjectPool$ObjectSanitizer<T extends unknown> extends Object{
    sanitize(arg0: T): boolean;
}