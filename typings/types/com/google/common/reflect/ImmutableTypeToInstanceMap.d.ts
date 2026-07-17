import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ImmutableTypeToInstanceMap$Builder } from '../../../../com/google/common/reflect/ImmutableTypeToInstanceMap$Builder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableTypeToInstanceMap<B extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static builder<B extends unknown>(): ImmutableTypeToInstanceMap$Builder<B>;
    static of<B extends unknown>(): JavaMap<any, any>;
}