import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ASM extends Object {
    static API_VERSION: number;
    static getApiVersionMajor(): number;
    static getApiVersionMinor(): number;
    static getApiVersionString(): string;
    static getClassVersionString(): string;
    static getMaxSupportedClassVersion(): number;
    static getMaxSupportedClassVersionMajor(): number;
    static getMaxSupportedClassVersionMinor(): number;
    static getVersionString(): string;
    static isAtLeastVersion(paramarg0: number): boolean;
    static isAtLeastVersion(paramarg0: number, paramarg1: number): boolean;
    static isAtLeastVersion(paramarg0: number, paramarg1: number, paramarg2: number): boolean;
    private constructor()
}