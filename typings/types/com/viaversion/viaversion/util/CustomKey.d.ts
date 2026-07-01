import type { Key } from '../../../../com/viaversion/viaversion/util/Key.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CustomKey extends Key {
    static equals(paramarg0: string, paramarg1: string): boolean;
    static isValid(paramarg0: string): boolean;
    static namespace(paramarg0: string): string;
    static namespaced(paramarg0: string): string;
    static of(paramarg0: string): Key;
    static of(paramarg0: string, paramarg1: string): Key;
    static ofPath(paramarg0: string): Key;
    static stripMinecraftNamespace(paramarg0: string): string;
    static stripNamespace(paramarg0: string): string;
    static tryParse(paramarg0: string): Key;
    constructor(arg0: string, arg1: string, arg2: string)
    // private namespace: string;
    // private original: string;
    // private path: string;
    equals(arg0: Object | null): boolean;
    equals(arg0: string): boolean;
    hasMinecraftNamespace(): boolean;
    hashCode(): number;
    minimized(): string;
    namespace(): string;
    original(): string;
    path(): string;
    toString(): string;
}