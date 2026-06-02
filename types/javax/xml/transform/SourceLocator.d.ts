import type { Object } from '../../../java/lang/Object.d.ts'
export interface SourceLocator extends Object{
    getColumnNumber(): number;
    getLineNumber(): number;
    getPublicId(): string;
    getSystemId(): string;
}