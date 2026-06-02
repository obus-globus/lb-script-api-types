import type { Object } from '../../../java/lang/Object.d.ts'
export interface TypeInfo extends Object{
    getTypeName(): string;
    getTypeNamespace(): string;
    isDerivedFrom(arg0: string, arg1: string, arg2: number): boolean;
}