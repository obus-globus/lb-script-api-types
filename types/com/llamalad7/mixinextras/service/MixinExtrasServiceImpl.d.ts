import type { MixinExtrasService } from '../../../../com/llamalad7/mixinextras/service/MixinExtrasService.d.ts'
import type { MixinExtrasVersion } from '../../../../com/llamalad7/mixinextras/service/MixinExtrasVersion.d.ts'
import type { Versioned } from '../../../../com/llamalad7/mixinextras/service/Versioned.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../org/objectweb/asm/Type.d.ts'
import type { InjectionPoint } from '../../../../org/spongepowered/asm/mixin/injection/InjectionPoint.d.ts'
import type { InjectionInfo } from '../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
import type { IExtension } from '../../../../org/spongepowered/asm/mixin/transformer/ext/IExtension.d.ts'
export class MixinExtrasServiceImpl extends Object implements MixinExtrasService {
    static getFrom(paramarg0: Object): MixinExtrasService;
    static getInstance(): MixinExtrasServiceImpl;
    static setup(): void;
    constructor()
    // private allPackages: Versioned<string>[];
    // private initialized: boolean;
    // private internalInjectors: Class<InjectionInfo>[];
    // private offeredExtensions: Versioned<IExtension>[];
    // private offeredInjectors: Versioned<Class<InjectionInfo>>[];
    // private offeredPackages: Versioned<string>[];
    // private offeredPoints: Versioned<Class<InjectionPoint>>[];
    // private ownExtensions: IExtension[];
    // private ownGatedInjectors: Versioned<Class<InjectionInfo>>[];
    // private ownInjectors: Class<InjectionInfo>[];
    // private ownPackage: string;
    // private ownPoints: Class<InjectionPoint>[];
    // private registeredInjectors: string[];
    changePackage(arg0: Class<Object>, arg1: Type, arg2: Class<Object>): Type;
    concedeTo(arg0: Object, arg1: boolean): void;
    // private deInitialize(): void;
    // private detectBetaPackages(): void;
    getAllClassNames(arg0: string): string[];
    getAllClassNamesAtLeast(arg0: string, arg1: MixinExtrasVersion): string[];
    // private getAllClassNamesAtLeast(arg0: string, arg1: number): string[];
    // private getBetaVersion(arg0: string): MixinExtrasVersion;
    getVersion(): number;
    initialize(): void;
    isClassOwned(arg0: string): boolean;
    offerExtension(arg0: number, arg1: IExtension): void;
    offerInjectionPoint(arg0: number, arg1: Class<InjectionPoint>): void;
    offerInjector(arg0: number, arg1: Class<InjectionInfo>): void;
    offerPackage(arg0: number, arg1: string): void;
    // private registerInjector(arg0: Class<InjectionInfo>, arg1: string): void;
    // private requireNotInitialized(): void;
    shouldReplace(arg0: Object): boolean;
    takeControlFrom(arg0: Object): void;
    toString(): string;
}