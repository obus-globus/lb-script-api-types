import type { Object } from '../../../java/lang/Object.d.ts'
export interface Locator extends Object{
    getColumnNumber(): number;
    getLineNumber(): number;
    getPublicId(): string;
    getSystemId(): string;
}