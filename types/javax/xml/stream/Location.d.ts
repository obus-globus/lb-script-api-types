import type { Object } from '../../../java/lang/Object.d.ts'
export interface Location extends Object{
    getCharacterOffset(): number;
    getColumnNumber(): number;
    getLineNumber(): number;
    getPublicId(): string;
    getSystemId(): string;
}