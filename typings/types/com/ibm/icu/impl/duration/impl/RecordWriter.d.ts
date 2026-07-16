import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface RecordWriter extends Object{
    bool(arg0: string, arg1: boolean): void;
    boolArray(arg0: string, arg1: boolean[]): void;
    character(arg0: string, arg1: string): void;
    characterArray(arg0: string, arg1: string[]): void;
    close(): boolean;
    namedIndex(arg0: string, arg1: string[], arg2: number): void;
    namedIndexArray(arg0: string, arg1: string[], arg2: number[]): void;
    open(arg0: string): boolean;
    string(arg0: string, arg1: string): void;
    stringArray(arg0: string, arg1: string[]): void;
    stringTable(arg0: string, arg1: string[][]): void;
}