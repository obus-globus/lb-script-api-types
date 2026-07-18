import type { Object } from '../../../java/lang/Object.d.ts'
export class PlatformUtils extends Object {
    static INSTANCE: PlatformUtils;
    readonly IS_BROWSER: boolean;
    readonly IS_DEVELOPMENT_MODE: boolean;
    readonly IS_JS: boolean;
    readonly IS_JVM: boolean;
    readonly IS_NATIVE: boolean;
    readonly IS_NEW_MM_ENABLED: boolean;
    readonly IS_NODE: boolean;
    readonly IS_WASM_JS: boolean;
}