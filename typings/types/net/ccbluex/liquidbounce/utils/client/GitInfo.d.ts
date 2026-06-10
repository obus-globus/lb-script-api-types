import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class GitInfo extends Object {
    static branch(): string;
    static entries(): Map$Entry<Object, Object>[];
    static get(paramarg0: string): string;
    static getOrDefault(paramarg0: string, paramarg1: string): string;
    static version(): string;
    private constructor()
}