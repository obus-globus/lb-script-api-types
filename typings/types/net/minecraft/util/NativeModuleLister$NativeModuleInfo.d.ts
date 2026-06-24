import type { Record } from '../../../java/lang/Record.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { NativeModuleLister$NativeModuleVersion } from '../../../net/minecraft/util/NativeModuleLister$NativeModuleVersion.d.ts'
export class NativeModuleLister$NativeModuleInfo extends Record {
    constructor(name: string, version: Optional<NativeModuleLister$NativeModuleVersion>)
    // private name: string;
    // private version: Optional<NativeModuleLister$NativeModuleVersion>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    name(): string;
    toString(): string;
    version(): Optional<NativeModuleLister$NativeModuleVersion>;
}