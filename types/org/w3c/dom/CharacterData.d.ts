import type { Object } from '../../../java/lang/Object.d.ts'
import type { Node } from '../../../org/w3c/dom/Node.d.ts'
export interface CharacterData extends Object, Node{
    appendData(arg0: string): void;
    deleteData(arg0: number, arg1: number): void;
    getData(): string;
    getLength(): number;
    insertData(arg0: number, arg1: string): void;
    replaceData(arg0: number, arg1: number, arg2: string): void;
    setData(arg0: string): void;
    substringData(arg0: number, arg1: number): string;
}