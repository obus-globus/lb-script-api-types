import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface NameResolver extends Object{
    getQualifiedClassName(arg0: number): string;
    getString(arg0: number): string;
    isLocalClassName(arg0: number): boolean;
}