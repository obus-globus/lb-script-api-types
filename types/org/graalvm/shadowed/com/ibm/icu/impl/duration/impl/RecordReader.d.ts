import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export interface RecordReader extends Object{
    bool(name: string): boolean;
    boolArray(name: string): (Object | null)[];
    character(name: string): string;
    characterArray(name: string): string[];
    close(): boolean;
    namedIndex(name: string, names: string[]): number;
    namedIndexArray(name: string, names: string[]): number[];
    open(title: string): boolean;
    string(name: string): string;
    stringArray(name: string): string[];
    stringTable(name: string): string[][];
}