import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IClassTracker extends Object{
    getClassRestrictions(arg0: string): string;
    isClassLoaded(arg0: string): boolean;
    registerInvalidClass(arg0: string): void;
}