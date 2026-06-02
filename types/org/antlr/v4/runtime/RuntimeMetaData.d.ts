import type { Object } from '../../../../java/lang/Object.d.ts'
export class RuntimeMetaData extends Object {
    static VERSION: string;
    static checkVersion(paramarg0: string, paramarg1: string): void;
    static getMajorMinorVersion(paramarg0: string): string;
    static getRuntimeVersion(): string;
    constructor()
}