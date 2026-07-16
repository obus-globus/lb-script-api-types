import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface RecordReader extends Object{
    bool(arg0: string): boolean;
    boolArray(arg0: string): boolean[];
    character(arg0: string): string;
    characterArray(arg0: string): string[];
    close(): boolean;
    namedIndex(arg0: string, arg1: string[]): number;
    namedIndexArray(arg0: string, arg1: string[]): number[];
    open(arg0: string): boolean;
    string(arg0: string): string;
    stringArray(arg0: string): string[];
    stringTable(arg0: string): string[][];
}