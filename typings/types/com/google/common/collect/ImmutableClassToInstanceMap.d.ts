import type { ImmutableClassToInstanceMap$Builder } from '../../../../com/google/common/collect/ImmutableClassToInstanceMap$Builder.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableClassToInstanceMap<B extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static builder<B extends unknown>(): ImmutableClassToInstanceMap$Builder<B>;
    static copyOf<B extends unknown, S extends B>(parammap: Map<Class<S>, S>): { [key: string]: any };
    static of<B extends unknown, T extends B>(paramtype: Class<T>, paramvalue: T): { [key: string]: any };
    static of<B extends unknown>(): { [key: string]: any };
}