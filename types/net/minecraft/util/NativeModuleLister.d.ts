import type { Object } from '../../../java/lang/Object.d.ts'
import type { CrashReportCategory } from '../../../net/minecraft/CrashReportCategory.d.ts'
import type { NativeModuleLister$NativeModuleInfo } from '../../../net/minecraft/util/NativeModuleLister$NativeModuleInfo.d.ts'
export class NativeModuleLister extends Object {
    static addCrashSection(paramcategory: CrashReportCategory): void;
    static listModules(): NativeModuleLister$NativeModuleInfo[];
    constructor()
}