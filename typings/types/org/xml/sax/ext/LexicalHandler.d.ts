import type { Object } from '../../../../java/lang/Object.d.ts'
export interface LexicalHandler extends Object{
    comment(arg0: string[], arg1: number, arg2: number): void;
    endCDATA(): void;
    endDTD(): void;
    endEntity(arg0: string): void;
    startCDATA(): void;
    startDTD(arg0: string, arg1: string, arg2: string): void;
    startEntity(arg0: string): void;
}