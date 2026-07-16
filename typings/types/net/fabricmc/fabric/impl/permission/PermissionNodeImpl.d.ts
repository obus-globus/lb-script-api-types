import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PermissionNode } from '../../../../../net/fabricmc/fabric/api/permission/v1/PermissionNode.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class PermissionNodeImpl<T extends unknown> extends Record implements PermissionNode<T> {
    static BOOLEAN: (param0: Object) => boolean;
    static INTEGER: (param0: Object) => boolean;
    static STRING: (param0: Object) => boolean;
    static of(paramarg0: string, paramarg1: string): PermissionNode<boolean>;
    static of(paramarg0: Identifier): PermissionNode<boolean>;
    static ofCustom<T extends unknown>(paramarg0: string, paramarg1: string, paramarg2: Codec<T>, paramarg3: Class<T>): PermissionNode<T>;
    static ofCustom<T extends unknown>(paramarg0: string, paramarg1: string, paramarg2: Codec<T>, paramarg3: (param0: Object) => boolean): PermissionNode<T>;
    static ofCustom<T extends unknown>(paramarg0: Identifier, paramarg1: Codec<T>, paramarg2: Class<T>): PermissionNode<T>;
    static ofCustom<T extends unknown>(paramarg0: Identifier, paramarg1: Codec<T>, paramarg2: (param0: Object) => boolean): PermissionNode<T>;
    static ofInteger(paramarg0: string, paramarg1: string): PermissionNode<number>;
    static ofInteger(paramarg0: Identifier): PermissionNode<number>;
    static ofString(paramarg0: string, paramarg1: string): PermissionNode<string>;
    static ofString(paramarg0: Identifier): PermissionNode<string>;
    constructor(key: Identifier, codec: Codec<T>, castPredicate: (param0: Object) => boolean)
    // private castPredicate: (param0: Object) => boolean;
    // private codec: Codec<T>;
    // private key: Identifier;
    cast(arg0: Object): T;
    castPredicate(): (param0: Object) => boolean;
    codec(): Codec<T>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    key(): Identifier;
    toString(): string;
}