import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IPropertyKey } from '../../../../org/spongepowered/asm/service/IPropertyKey.d.ts'
export interface IGlobalPropertyService extends Object{
    getProperty<T extends unknown>(arg0: IPropertyKey): T;
    getProperty<T extends unknown>(arg0: IPropertyKey, arg1: T): T;
    getPropertyString(arg0: IPropertyKey, arg1: string): string;
    resolveKey(arg0: string): IPropertyKey;
    setProperty(arg0: IPropertyKey, arg1: Object): void;
}