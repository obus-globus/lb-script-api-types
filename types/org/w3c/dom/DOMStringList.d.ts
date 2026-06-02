import type { Object } from '../../../java/lang/Object.d.ts'
export interface DOMStringList extends Object{
    contains(arg0: string): boolean;
    getLength(): number;
    item(arg0: number): string;
}