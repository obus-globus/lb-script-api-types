import type { Object } from '../../../java/lang/Object.d.ts'
export class SystemPropsKt extends Object {
    static getAVAILABLE_PROCESSORS(): number;
    static systemProp(propertyName: string, defaultValue: boolean): boolean;
    static systemProp(propertyName: string, defaultValue: number, minValue: number, maxValue: number): number;
    static systemProp(propertyName: string): string | null;
    static systemProp(propertyName: string, defaultValue: string): string;
}