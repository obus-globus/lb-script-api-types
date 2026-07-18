import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ClassLoadersKt extends Object {
    static allURLs(self: ClassLoader): URL[];
    static supportsAutoReload(self: ClassLoader): boolean;
}