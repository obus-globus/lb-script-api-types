import type { Object } from '../../java/lang/Object.d.ts'
export class EdidUtil extends Object {
    static getDescriptorRangeLimits(paramarg0: number[]): string;
    static getDescriptorText(paramarg0: number[]): string;
    static getDescriptorType(paramarg0: number[]): number;
    static getDescriptors(paramarg0: number[]): number[][];
    static getHcm(paramarg0: number[]): number;
    static getManufacturerID(paramarg0: number[]): string;
    static getModel(paramarg0: number[]): string;
    static getPreferredResolution(paramarg0: number[]): string;
    static getProductID(paramarg0: number[]): string;
    static getSerialNo(paramarg0: number[]): string;
    static getTimingDescriptor(paramarg0: number[]): string;
    static getVcm(paramarg0: number[]): number;
    static getVersion(paramarg0: number[]): string;
    static getWeek(paramarg0: number[]): number;
    static getYear(paramarg0: number[]): number;
    static isDigital(paramarg0: number[]): boolean;
    static toString(paramarg0: number[]): string;
    private constructor()
}