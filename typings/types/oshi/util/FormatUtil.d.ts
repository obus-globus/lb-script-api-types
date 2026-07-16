import type { Object } from '../../java/lang/Object.d.ts'
export class FormatUtil extends Object {
    static HEX_ERROR: string;
    static formatBytes(paramarg0: number): string;
    static formatBytesDecimal(paramarg0: number): string;
    static formatElapsedSecs(paramarg0: number): string;
    static formatError(paramarg0: number): string;
    static formatHertz(paramarg0: number): string;
    static formatValue(paramarg0: number, paramarg1: string): string;
    static getUnsignedInt(paramarg0: number): number;
    static roundToInt(paramarg0: number): number;
    static toUnsignedString(paramarg0: number): string;
    private constructor()
}