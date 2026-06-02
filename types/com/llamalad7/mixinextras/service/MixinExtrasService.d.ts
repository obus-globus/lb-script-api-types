import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { InjectionPoint } from '../../../../org/spongepowered/asm/mixin/injection/InjectionPoint.d.ts'
import type { InjectionInfo } from '../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { IExtension } from '../../../../org/spongepowered/asm/mixin/transformer/ext/IExtension.d.ts'
export interface MixinExtrasService extends Object{
    concedeTo(arg0: Object, arg1: boolean): void;
    getVersion(): number;
    initialize(): void;
    offerExtension(arg0: number, arg1: IExtension): void;
    offerInjectionPoint(arg0: number, arg1: Class<InjectionPoint>): void;
    offerInjector(arg0: number, arg1: Class<InjectionInfo>): void;
    offerPackage(arg0: number, arg1: string): void;
    shouldReplace(arg0: Object): boolean;
    takeControlFrom(arg0: Object): void;
}