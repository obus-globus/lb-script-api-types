import type { Object } from '../../../java/lang/Object.d.ts'
export class JsonOptions extends Object {
    constructor()
    // private isJsoncSupported: boolean;
    readonly nonNumericNumbersSupported: boolean;
    isJsoncSupported(): boolean;
    isNonNumericNumbersSupported(): boolean;
    setJsoncSupported(arg0: boolean): JsonOptions;
    setNonNumericNumbersSupported(arg0: boolean): JsonOptions;
}