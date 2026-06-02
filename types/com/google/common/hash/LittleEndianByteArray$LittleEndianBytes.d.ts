import type { Object } from '../../../../java/lang/Object.d.ts'
export interface LittleEndianByteArray$LittleEndianBytes extends Object{
    getLongLittleEndian(array: number[], offset: number): number;
    putLongLittleEndian(array: number[], offset: number, value: number): void;
    usesFastPath(): boolean;
}