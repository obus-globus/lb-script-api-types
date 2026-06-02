import type { Object } from '../../java/lang/Object.d.ts'
export interface Baseboard extends Object{
    getManufacturer(): string;
    getModel(): string;
    getSerialNumber(): string;
    getVersion(): string;
}