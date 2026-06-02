import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Assumption extends Object{
    check(): void;
    getName(): string;
    invalidate(): void;
    invalidate(message: string): void;
    isValid(): boolean;
}