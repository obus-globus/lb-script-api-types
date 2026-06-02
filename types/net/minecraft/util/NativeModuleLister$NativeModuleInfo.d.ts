import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { NativeModuleLister$NativeModuleVersion } from '../../../net/minecraft/util/NativeModuleLister$NativeModuleVersion.d.ts'
export class NativeModuleLister$NativeModuleInfo extends Object {
    constructor(name: string, version: Optional<NativeModuleLister$NativeModuleVersion>)
    name: string;
    version: Optional<NativeModuleLister$NativeModuleVersion>;
    toString(): string;
}