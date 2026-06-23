import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface PermissionNode<T extends unknown> extends Object{
    cast(arg0: Object): T;
    codec(): Codec<T>;
    key(): Identifier;
}