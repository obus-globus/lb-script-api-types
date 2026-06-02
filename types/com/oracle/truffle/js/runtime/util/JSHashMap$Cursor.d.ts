import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface JSHashMap$Cursor extends Object{
    advance(): boolean;
    copy(): JSHashMap$Cursor;
    getKey(): Object;
    getValue(): Object;
    shouldAdvance(): boolean;
}