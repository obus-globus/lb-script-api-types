import type { Object } from '../../../java/lang/Object.d.ts'
export class ArgumentsUtil extends Object {
    static booleanValue(paramarg0: { [key: string]: Object | null }, paramarg1: string): boolean;
    static booleanValue(paramarg0: { [key: string]: Object | null }, paramarg1: string, paramarg2: boolean): boolean;
    static floatValue(paramarg0: { [key: string]: Object | null }, paramarg1: string): number;
    static floatValue(paramarg0: { [key: string]: Object | null }, paramarg1: string, paramarg2: number): number;
    static intValue(paramarg0: { [key: string]: Object | null }, paramarg1: string): number;
    static intValue(paramarg0: { [key: string]: Object | null }, paramarg1: string, paramarg2: number): number;
    static longValue(paramarg0: { [key: string]: Object | null }, paramarg1: string, paramarg2: number): number;
    static longValue(paramarg0: { [key: string]: Object | null }, paramarg1: string): number;
    static stringValue(paramarg0: { [key: string]: Object | null }, paramarg1: string): string;
    static stringValue(paramarg0: { [key: string]: Object | null }, paramarg1: string, paramarg2: string): string;
    private constructor()
}