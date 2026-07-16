import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CefContextMenuParams$MediaType extends Enum<CefContextMenuParams$MediaType> {
    static CM_MEDIATYPE_AUDIO: CefContextMenuParams$MediaType;
    static CM_MEDIATYPE_FILE: CefContextMenuParams$MediaType;
    static CM_MEDIATYPE_IMAGE: CefContextMenuParams$MediaType;
    static CM_MEDIATYPE_NONE: CefContextMenuParams$MediaType;
    static CM_MEDIATYPE_PLUGIN: CefContextMenuParams$MediaType;
    static CM_MEDIATYPE_VIDEO: CefContextMenuParams$MediaType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CefContextMenuParams$MediaType;
    static values(): CefContextMenuParams$MediaType[];
    private constructor()
    name(): "CM_MEDIATYPE_NONE" | "CM_MEDIATYPE_IMAGE" | "CM_MEDIATYPE_VIDEO" | "CM_MEDIATYPE_AUDIO" | "CM_MEDIATYPE_FILE" | "CM_MEDIATYPE_PLUGIN";
}