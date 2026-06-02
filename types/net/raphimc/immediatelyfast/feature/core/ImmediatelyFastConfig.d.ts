import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ImmediatelyFastConfig extends Object {
    constructor()
    // private DEBUG_INFO: string;
    // private EXPERIMENTAL_INFO: string;
    // private REGULAR_INFO: string;
    avoid_redundant_framebuffer_switching: boolean;
    debug_only_and_not_recommended_disable_hardware_conflict_handling: boolean;
    debug_only_and_not_recommended_disable_mod_conflict_handling: boolean;
    debug_only_detailed_memory_leak_detection: boolean;
    debug_only_print_additional_error_information: boolean;
    debug_only_use_last_usage_for_batch_ordering: boolean;
    enhanced_batching: boolean;
    experimental_disable_resource_pack_conflict_handling: boolean;
    experimental_sign_text_buffering: boolean;
    fast_text_lookup: boolean;
    fix_slow_buffer_upload_on_apple_gpu: boolean;
    font_atlas_resizing: boolean;
    font_atlas_size: number;
    map_atlas_generation: boolean;
    map_atlas_size: number;
    skip_text_translucency_sorting: boolean;
    getBoolean(arg0: string, arg1: boolean): boolean;
    getInt(arg0: string, arg1: number): number;
    getLong(arg0: string, arg1: number): number;
    getString(arg0: string, arg1: string): string;
}