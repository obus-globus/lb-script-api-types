import type { Object } from '../../../../java/lang/Object.d.ts'
export class Verify extends Object {
    static verify(paramexpression: boolean): void;
    static verify(paramexpression: boolean, paramerrorMessageTemplate: string, paramp1: string): void;
    static verify(paramexpression: boolean, paramerrorMessageTemplate: string, paramp1: string, paramp2: string): void;
    static verify(paramexpression: boolean, paramerrorMessageTemplate: string, paramp1: string, paramp2: number): void;
    static verify(paramexpression: boolean, paramerrorMessageTemplate: string, paramp1: string, paramp2: Object): void;
    static verify(paramexpression: boolean, paramerrorMessageTemplate: string, paramp1: number): void;
    static verify(paramexpression: boolean, paramerrorMessageTemplate: string, paramp1: number, paramp2: string): void;
    static verify(paramexpression: boolean, paramerrorMessageTemplate: string, paramp1: number, paramp2: number): void;
    static verify(paramexpression: boolean, paramerrorMessageTemplate: string, paramp1: number, paramp2: Object): void;
    static verify(paramexpression: boolean, paramerrorMessageTemplate: string, paramp1: Object): void;
    static verify(paramexpression: boolean, paramerrorMessageTemplate: string, paramp1: Object, paramp2: string): void;
    static verify(paramexpression: boolean, paramerrorMessageTemplate: string, paramp1: Object, paramp2: number): void;
    static verify(paramexpression: boolean, paramerrorMessageTemplate: string, paramp1: Object, paramp2: Object): void;
    static verify(paramexpression: boolean, paramerrorMessageTemplate: string, paramp1: Object, paramp2: Object, paramp3: Object): void;
    static verify(paramexpression: boolean, paramerrorMessageTemplate: string, paramp1: Object, paramp2: Object, paramp3: Object, paramp4: Object): void;
    static verify(paramexpression: boolean, paramerrorMessageTemplate: string, ...paramerrorMessageArgs: Object[]): void;
    static verifyNotNull<T extends unknown>(paramreference: T): T;
    static verifyNotNull<T extends unknown>(paramreference: T, paramerrorMessageTemplate: string, ...paramerrorMessageArgs: Object[]): T;
    private constructor()
}