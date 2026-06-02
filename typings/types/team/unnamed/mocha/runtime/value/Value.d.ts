import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Value extends Object{
    getAsBoolean(): boolean;
    getAsNumber(): number;
    getAsString(): string;
    isString(): boolean;
}