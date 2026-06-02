import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ImmediatelyFastConfig } from '../../../../../net/raphimc/immediatelyfast/feature/core/ImmediatelyFastConfig.d.ts'
export class ImmediatelyFastRuntimeConfig extends Object {
    constructor(arg0: ImmediatelyFastConfig)
    disable_fast_buffer_upload: boolean;
    font_atlas_resizing: boolean;
    getBoolean(arg0: string, arg1: boolean): boolean;
    getInt(arg0: string, arg1: number): number;
    getLong(arg0: string, arg1: number): number;
    getString(arg0: string, arg1: string): string;
}