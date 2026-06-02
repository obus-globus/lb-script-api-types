import type { Object } from '../../java/lang/Object.d.ts'
export class CefBrowserSettings extends Object {
    constructor()
    external_begin_frame_enabled: boolean;
    shared_texture_enabled: boolean;
    windowless_frame_rate: number;
    clone(): CefBrowserSettings;
}