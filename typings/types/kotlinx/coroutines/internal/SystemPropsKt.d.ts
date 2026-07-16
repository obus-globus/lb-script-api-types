import type { Object } from '../../../java/lang/Object.d.ts'
export class SystemPropsKt extends Object {
    static getAVAILABLE_PROCESSORS(): number;
    static systemProp(paramarg0: string, paramarg1: boolean): boolean;
    static systemProp(paramarg0: string, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static systemProp(paramarg0: string): string;
    static systemProp(paramarg0: string, paramarg1: string): string;
}