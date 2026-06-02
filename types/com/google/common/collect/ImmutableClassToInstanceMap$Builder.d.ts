import type { ImmutableMap$Builder } from '../../../../com/google/common/collect/ImmutableMap$Builder.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableClassToInstanceMap$Builder<B extends Object | number | string | boolean> extends Object {
    constructor()
    // private mapBuilder: ImmutableMap$Builder<Class<B>, B>;
    build(): ImmutableClassToInstanceMap<B>;
    put<T extends B>(key: Class<T>, value: T): ImmutableClassToInstanceMap$Builder<B>;
    putAll(map: Map<Class<T>, T>): ImmutableClassToInstanceMap$Builder<B>;
}