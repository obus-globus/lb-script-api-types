import type { Object } from '../../../../java/lang/Object.d.ts'
export class Boxing extends Object {
    static boxBoolean(primitive: boolean): boolean;
    static boxByte(primitive: number): number;
    static boxChar(primitive: string): string;
    static boxDouble(primitive: number): number;
    static boxFloat(primitive: number): number;
    static boxInt(primitive: number): number;
    static boxLong(primitive: number): number;
    static boxShort(primitive: number): number;
}