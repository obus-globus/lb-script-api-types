import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CefRequest$ResourceType extends Enum<CefRequest$ResourceType> {
    static RT_CSP_REPORT: CefRequest$ResourceType;
    static RT_FAVICON: CefRequest$ResourceType;
    static RT_FONT_RESOURCE: CefRequest$ResourceType;
    static RT_IMAGE: CefRequest$ResourceType;
    static RT_MAIN_FRAME: CefRequest$ResourceType;
    static RT_MEDIA: CefRequest$ResourceType;
    static RT_NAVIGATION_PRELOAD_MAIN_FRAME: CefRequest$ResourceType;
    static RT_NAVIGATION_PRELOAD_SUB_FRAME: CefRequest$ResourceType;
    static RT_NUM_VALUES: CefRequest$ResourceType;
    static RT_OBJECT: CefRequest$ResourceType;
    static RT_PING: CefRequest$ResourceType;
    static RT_PLUGIN_RESOURCE: CefRequest$ResourceType;
    static RT_PREFETCH: CefRequest$ResourceType;
    static RT_SCRIPT: CefRequest$ResourceType;
    static RT_SERVICE_WORKER: CefRequest$ResourceType;
    static RT_SHARED_WORKER: CefRequest$ResourceType;
    static RT_STYLESHEET: CefRequest$ResourceType;
    static RT_SUB_FRAME: CefRequest$ResourceType;
    static RT_SUB_RESOURCE: CefRequest$ResourceType;
    static RT_WORKER: CefRequest$ResourceType;
    static RT_XHR: CefRequest$ResourceType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CefRequest$ResourceType;
    static values(): (Object | null)[];
    private constructor()
    name(): "RT_MAIN_FRAME" | "RT_SUB_FRAME" | "RT_STYLESHEET" | "RT_SCRIPT" | "RT_IMAGE" | "RT_FONT_RESOURCE" | "RT_SUB_RESOURCE" | "RT_OBJECT" | "RT_MEDIA" | "RT_WORKER" | "RT_SHARED_WORKER" | "RT_PREFETCH" | "RT_FAVICON" | "RT_XHR" | "RT_PING" | "RT_SERVICE_WORKER" | "RT_CSP_REPORT" | "RT_PLUGIN_RESOURCE" | "RT_NAVIGATION_PRELOAD_MAIN_FRAME" | "RT_NAVIGATION_PRELOAD_SUB_FRAME" | "RT_NUM_VALUES";
}