import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GitInfo extends Object {
    static branch(): string;
    static entries(): (Object | null)[];
    static get(paramarg0: string): string;
    static getOrDefault(paramarg0: string, paramarg1: string): string;
    static version(): string;
    private constructor()
}