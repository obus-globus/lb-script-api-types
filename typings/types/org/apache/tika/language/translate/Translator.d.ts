import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Translator extends Object{
    isAvailable(): boolean;
    translate(arg0: string, arg1: string): string;
    translate(arg0: string, arg1: string, arg2: string): string;
}