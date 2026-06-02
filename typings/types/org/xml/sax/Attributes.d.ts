import type { Object } from '../../../java/lang/Object.d.ts'
export interface Attributes extends Object{
    getIndex(arg0: string): number;
    getIndex(arg0: string, arg1: string): number;
    getLength(): number;
    getLocalName(arg0: number): string;
    getQName(arg0: number): string;
    getType(arg0: number): string;
    getType(arg0: string): string;
    getType(arg0: string, arg1: string): string;
    getURI(arg0: number): string;
    getValue(arg0: number): string;
    getValue(arg0: string): string;
    getValue(arg0: string, arg1: string): string;
}