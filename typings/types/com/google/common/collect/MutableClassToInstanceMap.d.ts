import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MutableClassToInstanceMap<B extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static create<B extends unknown>(): JavaMap<any, any>;
    static create<B extends unknown>(parambackingMap: JavaMap<Class<B>, B>): JavaMap<any, any>;
}