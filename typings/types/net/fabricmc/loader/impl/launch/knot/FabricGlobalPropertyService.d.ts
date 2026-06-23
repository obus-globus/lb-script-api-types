import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { IGlobalPropertyService } from '../../../../../../org/spongepowered/asm/service/IGlobalPropertyService.d.ts'
import type { IPropertyKey } from '../../../../../../org/spongepowered/asm/service/IPropertyKey.d.ts'
export class FabricGlobalPropertyService extends Object implements IGlobalPropertyService {
    constructor()
    getProperty<T extends unknown>(arg0: IPropertyKey): T;
    getProperty<T extends unknown>(arg0: IPropertyKey, arg1: T): T;
    getPropertyString(arg0: IPropertyKey, arg1: string): string;
    // private keyString(arg0: IPropertyKey): string;
    resolveKey(arg0: string): IPropertyKey;
    setProperty(arg0: IPropertyKey, arg1: Object): void;
}