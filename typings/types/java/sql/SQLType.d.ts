import type { Object } from '../../java/lang/Object.d.ts'
export interface SQLType extends Object{
    getName(): string;
    getVendor(): string;
    getVendorTypeNumber(): number;
}