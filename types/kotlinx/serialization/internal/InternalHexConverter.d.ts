import type { Object } from '../../../java/lang/Object.d.ts'
export class InternalHexConverter extends Object {
    static INSTANCE: InternalHexConverter;
    // private hexCode: string;
    // private hexToInt(ch: string): number;
    parseHexBinary(s: string): number[];
    printHexBinary(data: number[], lowerCase: boolean): string;
    toHexString(n: number): string;
}