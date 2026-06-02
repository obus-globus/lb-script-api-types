import type { Object } from '../../../../java/lang/Object.d.ts'
export interface GLDebug$DebugState extends Object{
    nameObject(arg0: number, arg1: number, arg2: string): void;
    popGroup(): void;
    pushGroup(arg0: number, arg1: string): void;
}