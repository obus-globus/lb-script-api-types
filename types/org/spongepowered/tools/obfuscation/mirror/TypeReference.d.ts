import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { ITypeHandleProvider } from '../../../../../org/spongepowered/tools/obfuscation/interfaces/ITypeHandleProvider.d.ts'
import type { TypeHandle } from '../../../../../org/spongepowered/tools/obfuscation/mirror/TypeHandle.d.ts'
export class TypeReference extends Object implements Serializable, Comparable<TypeReference> {
    constructor(arg0: string)
    constructor(arg0: TypeHandle)
    // private handle: TypeHandle;
    readonly name: string;
    compareTo(arg0: TypeReference): number;
    equals(arg0: Object | null): boolean;
    getClassName(): string;
    getHandle(arg0: ITypeHandleProvider): TypeHandle;
    getName(): string;
    hashCode(): number;
    toString(): string;
}