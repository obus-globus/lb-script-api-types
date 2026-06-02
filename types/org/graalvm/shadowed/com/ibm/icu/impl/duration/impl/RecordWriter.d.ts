import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export interface RecordWriter extends Object{
    bool(name: string, value: boolean): void;
    boolArray(name: string, values: (Object | null)[]): void;
    character(name: string, value: string): void;
    characterArray(name: string, values: string[]): void;
    close(): boolean;
    namedIndex(name: string, names: string[], value: number): void;
    namedIndexArray(name: string, names: string[], values: number[]): void;
    open(title: string): boolean;
    string(name: string, value: string): void;
    stringArray(name: string, values: string[]): void;
    stringTable(name: string, values: string[][]): void;
}