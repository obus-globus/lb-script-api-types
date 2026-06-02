import type { Object } from '../../../java/lang/Object.d.ts'
export class ImageInfo extends Object {
    static PROPERTY_IMAGE_CODE_KEY: string;
    static PROPERTY_IMAGE_CODE_VALUE_BUILDTIME: string;
    static PROPERTY_IMAGE_CODE_VALUE_RUNTIME: string;
    static PROPERTY_IMAGE_KIND_KEY: string;
    static PROPERTY_IMAGE_KIND_VALUE_EXECUTABLE: string;
    static PROPERTY_IMAGE_KIND_VALUE_SHARED_LIBRARY: string;
    static PROPERTY_NATIVE_IMAGE_PREFIX: string;
    static inImageBuildtimeCode(): boolean;
    static inImageCode(): boolean;
    static inImageRuntimeCode(): boolean;
    static isExecutable(): boolean;
    static isSharedLibrary(): boolean;
    private constructor()
}