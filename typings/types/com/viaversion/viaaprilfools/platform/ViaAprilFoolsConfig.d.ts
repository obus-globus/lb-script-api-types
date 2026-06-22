import type { Config } from '../../../../com/viaversion/viaversion/api/configuration/Config.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ViaAprilFoolsConfig extends Config, Object{
    reload(): void;
    save(): void;
    set(arg0: string, arg1: Object): void;
}