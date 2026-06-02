import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Secur32Util extends Object {
    static getSecurityPackages(): (Object | null)[];
    static getUserNameEx(paramarg0: number): string;
    constructor()
}