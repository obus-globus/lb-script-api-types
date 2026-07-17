import type { ImmutableMap$Builder } from '../../../../com/google/common/collect/ImmutableMap$Builder.d.ts'
import type { TypeToken } from '../../../../com/google/common/reflect/TypeToken.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableTypeToInstanceMap$Builder<B extends unknown> extends Object {
    private constructor()
    // private mapBuilder: ImmutableMap$Builder<TypeToken<B>, B>;
    build(): { [key: string]: any };
    put<T extends B>(key: TypeToken<T>, value: T): ImmutableTypeToInstanceMap$Builder<B>;
    put<T extends B>(key: Class<T>, value: T): ImmutableTypeToInstanceMap$Builder<B>;
}