import type { Key } from '../../../../com/viaversion/viaversion/util/Key.d.ts'
import type { MinecraftKey } from '../../../../com/viaversion/viaversion/util/MinecraftKey.d.ts'
export class MinecraftKey$CompactMinecraftKey extends MinecraftKey {
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
    constructor(arg0: string)
    // private identifier: string;
    original(): string;
    toString(): string;
}