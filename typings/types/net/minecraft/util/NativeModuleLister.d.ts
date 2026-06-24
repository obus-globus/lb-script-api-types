import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CrashReportCategory } from '../../../net/minecraft/CrashReportCategory.d.ts'
import type { NativeModuleLister$NativeModuleInfo } from '../../../net/minecraft/util/NativeModuleLister$NativeModuleInfo.d.ts'
import type { NativeModuleLister$NativeModuleVersion } from '../../../net/minecraft/util/NativeModuleLister$NativeModuleVersion.d.ts'
export class NativeModuleLister extends Object {
    static addCrashSection(paramcategory: CrashReportCategory): void;
    static listModules(): NativeModuleLister$NativeModuleInfo[];
    static tryGetModuleVersion(parampath: string): Optional<NativeModuleLister$NativeModuleVersion>;
    constructor()
}