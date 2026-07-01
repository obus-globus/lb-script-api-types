import type { Object } from '../../../../java/lang/Object.d.ts'
export class Key extends Object {
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
    constructor()
    equals(other: Object | null): boolean;
    equals(arg0: string): boolean;
    hasMinecraftNamespace(): boolean;
    minimized(): string;
    namespace(): string;
    original(): string;
    path(): string;
    withNamespace(arg0: string): Key;
    withPath(arg0: string): Key;
}