import type { Object } from '../../../java/lang/Object.d.ts'
export interface AttributeList extends Object{
    getLength(): number;
    getName(arg0: number): string;
    getType(arg0: number): string;
    getType(arg0: string): string;
    getValue(arg0: number): string;
    getValue(arg0: string): string;
}